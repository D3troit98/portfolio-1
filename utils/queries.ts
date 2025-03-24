
'use server';
import { StudentSignInData, TutorSignInData } from '@/types';
import api from './api';
import { setCookie } from './action';

export async function refreshToken(): Promise<string | null> {
  //   try {
  //     // Make your API call to refresh the token here
  //     const response = await api.get(`/auth/refresh-token`);

  //     // Axios already parses the response, so you access the data directly
  //     const data = response.data;

  //     // Assuming the API returns the new token in `newAccessToken`
  //     return data.newAccessToken || null;
  //   } catch (error) {
  //     console.error('Error refreshing token:', error);
  //     return null; // Return null if an error occurs
  //   }
  return null;
}
export const resetForgetPassword = async (
  formdata:
    | {
        password: string;
        passConfirm: string;
      }
    | StudentSignInData,
  type: string,
  passID: string
) => {
  try {
    // Determine the endpoint based on the type
    const endpoint =
      type === 'tutor'
        ? `/auth/tutor/resetForgetpass/${passID}`
        : `/auth/student/resetForgetpass/${passID}`;

    // Make the API call with the common data and mail: true
    const response = await api.patch(endpoint, formdata);

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const signUp = async (
  formdata: TutorSignInData | StudentSignInData,
  type: 'tutor' | 'student'
) => {
  try {
    // Determine the endpoint based on the type
    const endpoint =
      type === 'tutor' ? '/auth/tutor/signUp' : '/auth/student/signUp';

    // Make the API call with the common data and mail: true
    const response = await api.post(endpoint, formdata);

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.log('error', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};
export const findMyLocation = async ({
  lat,
  lng,
}: {
  lat: string;
  lng: string;
}) => {
  try {
    const response = await api.post('/my-location', { lat, lng });
    return response?.data;
  } catch (error: any) {
    // Extract relevant information from the error
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      // You can add more properties if needed, e.g.:
      // status: error.response?.status,
      data: error.response?.data,
    };
  }
};
interface LocationResponse {
    error?: boolean;
    data?: {
      country?: string;
      city?: string;
      timezone?: string;
      message?:string
      country_code?:string
    };
    message?: string;
  }

export const findMyLocationOSM = async ({
    lat,
    lng,
  }: {
    lat: string;
    lng: string;
  }): Promise<LocationResponse> => {
    try {
      // Using Nominatim API with reverse geocoding
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
        {
          headers: {
            'User-Agent': 'solutionsplatforms', // Replace with your app name
            'Accept-Language': 'en' // Get results in English
          }
        }
      );

      console.log('response',response)
      if (!response.ok) {
        throw new Error('Failed to fetch location data');
      }

      const data = await response.json();

      console.log("address",data)
      // Extract relevant information from Nominatim response

      return {
        data: {
          country: data.address?.country_code || '',
          city: data.address?.city || data.address?.town || data.address?.village || data?.address?.county ||  data?.address?.suburb ||'',
          // Note: Nominatim doesn't provide timezone, we'll get it from the browser
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.message || 'An unknown error occurred',
        data: {
          country: '',
          city: '',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      };
    }
  };


export const resendMail = async ({
  email,
  type,
}: {
  email: string;
  type: 'tutor' | 'student' | 'admin';
}) => {
  try {
    if (type === 'tutor') {
      const response = await api.post('/auth/tutor/request-email', { email });
      return response?.data;
    } else if (type === 'admin'){
        const response = await api.post('/auth/admin/request-email', { email });
        return response?.data;
    }
    else {
      const response = await api.post('/auth/student/request-email', { email });
      return response?.data;
    }
  } catch (error: any) {
    // Extract relevant information from the error
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      // You can add more properties if needed, e.g.:
      // status: error.response?.status,
      data: error.response?.data,
    };
  }
};

export const verifyEmail = async ({
  token,
  type,
}: {
  token: string | undefined;
  type: string | undefined;
}) => {
  try {
    if (type === 'tutor' && token) {
      const response = await api.get(`/auth/tutor/verify/${token}`);
      return response?.data;
    } else if (type === 'student' && token) {
      const response = await api.get(`/auth/student/verify/${token}`);
      return response?.data;
    }else if (type === 'admin' && token){
        const response = await api.get(`/auth/admin/verify/${token}`);
        return response?.data;
    }
    else {
      throw Error();
    }
  } catch (error: any) {
    // Extract relevant information from the error
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      // You can add more properties if needed, e.g.:
      // status: error.response?.status,
      data: error.response?.data,
    };
  }
};

export const verifyGoogleSignin = async ({
  formdata,
  code,
}: {
  formdata: any;
  code: string;
}) => {
  try {
    // Set cookies for user and token (consider different cookies for tutor and student)
    console.log('verify google signin', code);
    setCookie('sp-token', code);
    const response = await api.post(`/auth/googleAuth-signIn`, formdata, {
      headers: {
        Authorization: `SOLUTIONS_PLATFORMS ${code || ''}`,
      },
    });

    console.log("response from API",response)
    if(!response?.data?.success){
        throw new Error(response.data.message)
    }
    setCookie('sp-token', response?.data?.userData?.token || code);
    setCookie(formdata.role, JSON.stringify(response?.data?.userData?.user || formdata)); // 'tutor' or 'student' cookie

    return response?.data;
  } catch (error: any) {
    console.log("response",error)
    // Extract relevant information from the error
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      // You can add more properties if needed, e.g.:
      // status: error.response?.status,
      data: error.response?.data,
    };
  }
};

export const signInUser = async (
  { email, password }: { email: string; password: string },
  type: 'student' | 'tutor'
) => {
  try {
    // Determine the endpoint based on the type
    const endpoint =
      type === 'tutor' ? '/auth/tutor/singIn' : '/auth/student/singIn';

    // Make the API call
    const response = await api.post(endpoint, { email, password });

    // Set cookies for user and token (consider different cookies for tutor and student)
    setCookie(type, JSON.stringify(response?.data?.userData?.user)); // 'tutor' or 'student' cookie
    setCookie('sp-token', response?.data?.userData?.token);

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const forgotPassword = async (
  { email }: { email: string },
  type: 'student' | 'tutor'
) => {
  try {
    // Determine the endpoint based on the type
    const endpoint =
      type === 'tutor'
        ? '/auth/tutor/forgetPasword'
        : '/auth/student/forgetPasword';

    // Make the API call
    const response = await api.post(endpoint, { email });

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const googleSignIn = async (userType: string) => {
  try {
    // Determine the endpoint based on the type
    const endpoint =
      userType === 'tutor'
        ? '/auth/tutor/googleAuth'
        : '/auth/student/googleAuth';
    // https://www.apis.solutionsplatforms.com/v1/auth/tutor/googleAuth
    // Make the API call
    const response = await api.get(endpoint, {
      baseURL: 'https://www.apis.solutionsplatforms.com/v1',
    });

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const fetchExchangeRate = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow' as RequestRedirect,
      next: { revalidate: 3600 },
    };
    const response = await fetch(
      'https://open.er-api.com/v6/latest/USD',
      requestOptions
    );
    if (!response.ok) {
      return response.json();
    }

    const result = await response.json();

    const rate = result?.rates?.NGN || 0;
    return rate;
  } catch (error) {
    if (error) {
      // console.log(error);
      return 0;
    }
  }
};

export const serveServices = async (formdata: any) => {
  try {
    // Determine the endpoint based on the type

    // Make the API call
    const response = await api.post('/serve', formdata);

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};


export const testRegistration = async (formdata: any) => {
    try {
      const response = await api.post('/testRes', formdata);
      return response?.data;
    } catch (error: any) {
      // Handle the error and return relevant information
      return {
        error: true,
        message: error.message || 'An unknown error occurred',
        data: error.response?.data,
      };
    }
  };

  export const visaRegistration = async (formdata: any) => {
    try {
      const response = await api.post('/visa', formdata);
      return response?.data;
    } catch (error: any) {
      // Handle the error and return relevant information
      return {
        error: true,
        message: error.message || 'An unknown error occurred',
        data: error.response?.data,
      };
    }
  };

  export const travelManagement = async (formdata: any) => {
    try {
      const response = await api.post('/travel', formdata);
      return response?.data;
    } catch (error: any) {
      // Handle the error and return relevant information
      return {
        error: true,
        message: error.message || 'An unknown error occurred',
        data: error.response?.data,
      };
    }
  };

  export const tutorialServices = async (formdata: any) => {
    try {
      const response = await api.post('/tutorial', formdata);
      return response?.data;
    } catch (error: any) {
      // Handle the error and return relevant information
      return {
        error: true,
        message: error.message || 'An unknown error occurred',
        data: error.response?.data,
      };
    }
  };


  export const teacherTraining = async (formdata: any) => {
    try {
      const response = await api.post('/teaching', formdata);
      return response?.data;
    } catch (error: any) {
      // Handle the error and return relevant information
      return {
        error: true,
        message: error.message || 'An unknown error occurred',
        data: error.response?.data,
      };
    }
  };


export const getStarted = async (formdata: any) => {
  try {
    // Determine the endpoint based on the type

    // Make the API call
    const response = await api.post('/getStarted', formdata);

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};


export const createSupport = async (formdata: any) => {
    try {
      // Determine the endpoint based on the type

      // Make the API call
      const response = await api.post('/surport', formdata);

      // Return the API response data
      return response?.data;
    } catch (error: any) {
      // Handle the error and return relevant information
      return {
        error: true,
        message: error.message || 'An unknown error occurred',
        data: error.response?.data,
      };
    }
  };
