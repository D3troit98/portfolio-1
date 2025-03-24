/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { AxiosError, AxiosResponse } from 'axios';
import api from './api';

export const getStudentBooking = async ({
  page,
  limit,
  sort,
  department,
  subject,
  tutorName,
  availability,
  name,
}: {
  page: string;
  limit: string;
  sort?: string;
  department?: string;
  subject?: string;
  tutorName?: string;
  availability?: string;
  name?: string;
}) => {
  try {
    let url = `/user/student/find-tutors?page=${page}&limit=${limit}`;
    if (department) {
      url += `&department=${department}`;
    }
    if (subject) {
      url += `&subject=${subject}`;
    }
    if (tutorName) {
      url += `&name=${tutorName}`;
    }
    if (availability) {
      url += `&availabilty=${availability}`;
    }
    if (name) {
      url += `&name=${name}`;
    }
    if(sort){
        url += `&sort=${sort}`;
    }

    const response = await api.get(url);

    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getPublicBooking = async ({
  page,
  limit,
  sort,
  department,
  subject,
  availability,
  name,
}: {
  page: string;
  limit: string;
  sort?: string;
  department?: string;
  subject?: string;
  tutorName?: string;
  availability?: string;
  name?: string;
}) => {
  try {
    let url = `/tutors?page=${page}&limit=${limit}&sort=${sort}`;
    if (department) {
      url += `&department=${department}`;
    }
    if (subject) {
      url += `&subject=${subject}`;
    }
    if (availability) {
      url += `&availabilty=${availability}`;
    }
    if (name) {
      url += `&name=${name}`;
    }
    if (availability) {
      url += `&availabilty=${availability}`;
    }

    const response = await api.get(url);

    // Return the API response data
    console.log('response.data',response.data)
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getStudentPersonalDetail = async () => {
  try {
    const response = await api.get('/user/student/me');
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

// Define interfaces for better type safety
interface BookTutorRequest {
  tutorId: string;
  courseId: string;
  weeks: number;
  message?: string;
  availability: string[];
  hoursPerDay: number;
  paymentOption: string;
}

interface BookTutorResponse {
  success: boolean;
  data?: any;
  error?: boolean;
  message?: string;
}

export const studentBookTutor = async ({
  tutorId,
  courseId,
  weeks,
  message,
  availability,
  hoursPerDay,
  paymentOption,
}: BookTutorRequest): Promise<BookTutorResponse> => {
  // Input validation
  if (!tutorId || !courseId || !weeks || !availability.length) {
    return {
      success: false,
      error: true,
      message: 'Missing required fields',
    };
  }

  // Validate weeks is a positive number
  if (weeks <= 0) {
    return {
      success: false,
      error: true,
      message: 'Weeks must be a positive number',
    };
  }

  try {
    const response: AxiosResponse = await api.post('/user/student/book-tutor', {
      tutorId,
      courseId,
      weeks,
      availability,
      message,
      hoursPerDay,
      paymentOption,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    // Type guard to ensure error is AxiosError
    if (error instanceof AxiosError) {
      console.error('API Error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      return {
        success: false,
        error: true,
        message:
          error.response?.data?.message ||
          error.message ||
          'An error occurred while booking the tutor',
        data: error.response?.data,
      };
    }

    // Handle non-Axios errors
    console.error('Unexpected error:', error);
    return {
      success: false,
      error: true,
      message: 'An unexpected error occurred',
    };
  }
};

export const studentSendMessageTutor = async ({
  tutorId,
  message,
}: {
  tutorId: string;
  message: string;
}): Promise<BookTutorResponse> => {
  // Input validation
  if (!tutorId) {
    return {
      success: false,
      error: true,
      message: 'Missing required fields',
    };
  }

  try {
    const response: AxiosResponse = await api.post('/user/student/send', {
      tutorId,
      message,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    // Type guard to ensure error is AxiosError
    if (error instanceof AxiosError) {
      console.error('API Error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      return {
        success: false,
        error: true,
        message:
          error.response?.data?.message ||
          error.message ||
          'An error occurred while booking the tutor',
        data: error.response?.data,
      };
    }

    // Handle non-Axios errors
    console.error('Unexpected error:', error);
    return {
      success: false,
      error: true,
      message: 'An unexpected error occurred',
    };
  }
};

export const studentUpdateProfile = async (formData: any) => {
  try {
    const response = await api.patch('user/student/UpdateMe', formData);
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const studentGetTutorProfile = async (tutorId: string | undefined) => {
  if (!tutorId)
    return {
      error: true,
      message: 'No tutor Id presented',
      data: null,
    };
  try {
    const response = await api.get(`/user/student/${tutorId}`);
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getStudentBookingRequest = async ({
  page,
  limit,
  sort,
  type,
}: {
  page: string;
  limit: string;
  sort?: string;
  type: string;
}) => {
  try {
    const response = await api.get(
      `/user/student/booking?type=${type}&page=${page}&limit=${limit}&${sort}`
    );
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const payFinderFee = async () => {
  try {
    const response = await api.post(`/user/student/addCard/finders-fee`);
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const startSession = async (requestId: string) => {
  try {
    const response = await api.post(`/user/student/start/session/${requestId}`);
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getStudentTransactionHistory = async () => {
  try {
    const response = await api.get('/user/student/trnx');
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const studentChangeLocaton = async ({
  lat,
  lng,
  type,
}: {
  lat: string;
  lng: string;
  type: string;
}) => {
  try {
    const endpoint =
      type === 'tutor' ? `/user/tutor/change-loc` : `/user/student/change-loc`;
    const response = await api.patch(endpoint, { lat, lng });
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const studentReviewTutor = async (formData: {
  rating: number;
  comment: string;
  tutorId: string;
  courseId: string;
}) => {
  try {
    const response = await api.post('/user/student/review', formData);
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const studentReportTutor = async (formData: {
  tutorId: string;
  requestId: string;
  reason: string;
}) => {
  try {
    const response = await api.post('/user/student/report', formData);
    // Return the API response data
    return response?.data;
  } catch (error: any) {
    console.error('error: ', error);
    // Handle the error and return relevant information
    return {
      error: true,
      message: error.message || 'An unknown error occurred',
      data: error.response?.data,
    };
  }
};
