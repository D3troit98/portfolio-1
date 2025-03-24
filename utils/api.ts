'use server';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  RawAxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from 'axios';
import toast from 'react-hot-toast';
import { getToken } from './action';
import { refreshToken } from './queries';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

interface QueueItem {
  config: AxiosRequestConfig;
  resolve: (value: AxiosResponse) => void;
  reject: (reason: void) => void;
}

// Default headers for all Axios requests
const headers: RawAxiosRequestHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Channel: 'web',
};

// Creating an Axios instance with default configuration
const api: AxiosInstance = axios.create({
  baseURL,
  headers: headers,
  timeout: 120000, // Setting request timeout to 120 seconds
});

// Queue to hold requests during token refresh
const refreshAndRetryQueue: QueueItem[] = [];
// Flag to prevent multiple token refresh requests
let isRefreshing: boolean = false;

// Request interceptor to add Authorization header with the token
api.interceptors.request.use(
    async (
        config: InternalAxiosRequestConfig
    ): Promise<InternalAxiosRequestConfig> => {
        const user = await getToken('sp-token');
        // Get tokens from storage
        const token = user?.value;
        // Log the full user object with indentation
        // console.log('tokens', token);
        if (config.headers) {
            config.headers['Authorization'] = `SOLUTIONS_PLATFORMS ${token || ''}`; // Set Authorization header
        }
        return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error); // Handle request error
    }
);

// Response interceptor to handle errors, including token expiration
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosResponse> => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };
    console.error('api error', error);
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (!isRefreshing) {
        isRefreshing = true;
        originalRequest._retry = true;

        try {
          const newAccessToken = await refreshToken();
          if (newAccessToken) {
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] =
                `SOLUTIONS_PLATFORMS ${newAccessToken}`;
            }

            try {
              await Promise.all(
                refreshAndRetryQueue.map(({ config, resolve, reject }) =>
                  api.request(config).then(resolve).catch(reject)
                )
              );
            } catch (batchError) {
              console.error('Error processing queued requests:', batchError);
            }

            refreshAndRetryQueue.length = 0;
            return api(originalRequest);
          } else {
            return Promise.reject(new Error('User is unauthorized'));
          }
        } catch (refreshError) {
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise<AxiosResponse>((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
      });
    }

    // Handle other error cases...
    if (error.response && error.response.status === 403) {
      toast.error('Access forbidden. Please log in again.');
      return Promise.reject(
        new Error('Access forbidden. Please log in again.')
      );
    } else if (error.code === 'ERR_NETWORK') {
      toast.error('Network error. Please check your connection and try again.');
    } else if (error.response && error.response.status === 413) {
      return Promise.reject(
        new Error(
          'The file you uploaded is too large. Please upload a smaller file.'
        )
      );
    } else if (error.response && error.response.status >= 500) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default api; // Export the configured Axios instance
