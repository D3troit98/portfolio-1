/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { setCookie } from './action';
import api from './api';

// Signup Function
export const signUpAdmin = async (data: any) => {
  try {
    const response = await api.post('/user/admin/singUp', data);
    return response.data;
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

// Signin Function
export const signInAdmin = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post('/user/admin/signIn', data);

    // Set cookies for user and token (consider different cookies for tutor and student)
    setCookie('admin', JSON.stringify(response?.data?.userData?.user)); // 'admin'
    setCookie('sp-token', response?.data?.userData?.token);

    return response.data;
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

// Change Password Function
export const changeAdminPassword = async (data: {
  passKey: string;
  currentPass: string;
  password: string;
  passConfirm: string;
}) => {
  try {
    const response = await api.patch('/user/admin/change-pass', data);
    return response.data;
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

export const adminGetUsers = async () => {
  try {
    const response = await api.get('/user/admin/user');
    return response.data;
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

export const adminGetUser = async (type: string, id: string) => {
  try {
    const response = await api.get(`user/admin/user?type=${type}&id=${id}`);
    return response.data;
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

export const changeUserRole = async (data: {
  currentRole: string;
  id: string;
  role: string;
}) => {
  try {
    const response = await api.patch(`/user/admin/change-role`, data);
    return response.data;
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

export const getExistingCategories = async () => {
  try {
    const response = await api.get(`/user/admin/categories`);
    return response.data;
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

// Types for Categories
export type Category = {
  department: string;
  subjects: string[];
  _id?: string;
};

// Response type for setAdminCategories
export type SetCategoriesResponse = {
  success: boolean;
  message?: string;
  data?: Category[];
  error?: boolean;
};

// API function with TypeScript typing
export const setAdminCategories = async (
  data: any
): Promise<SetCategoriesResponse> => {
  try {
    const response = await api.post<SetCategoriesResponse>(
      `user/admin/set-category`,
      data
    );
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getAllLessons = async (type?: string) => {
  try {
    const response = await api.get(
      `/user/admin/lessons?sort=createdAt&&page=1&limit=10${
        type ? `&type=${type}` : ''
      }`
    );
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getAllSupports = async () => {
  try {
    const response = await api.get(
      `/user/admin/surpots?sort=createdAt&&page=1&limit=10`
    );
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getAllReport = async () => {
  try {
    const response = await api.get(
      `/user/admin/reports?sort=createdAt&&page=1&limit=10`
    );
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};
export const getReportById = async (id: string) => {
  try {
    const response = await api.get(`/user/admin/reports/${id}`);
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getSupportById = async (id: string) => {
  try {
    const response = await api.get(`/user/admin/surpots/${id}`);
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const updateLessonStatus = async ({
  id, // Lesson Id
  status, // Completed-today
}: {
  id: string;
  status: string;
}) => {
  try {
    const response = await api.patch(`/user/admin/update-lesson`, {
      id,
      status,
    });
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getAllServices = async (
  type: string,
  page: string,
  limit: string
) => {
  try {

    let url = '';
    if (type === 'Standardized_Test') {
      url = '/user/admin/get/tests';
    }else if(type === "Admission_processing"){
        url = '/user/admin/get/adminssion';
    }else if(type === "Visa_Counselling"){
        url = '/user/admin/get/visa';
    }else if(type === "Tutorial_Services"){
        url = '/user/admin/get/tutorial';
    }else if(type === "Teachers_Training"){
        url = '/user/admin/get/teaching';
    }else if(type === "Travels_Management"){
        url = '/user/admin/get/travels';
    }
    // const response = await api.get(
    //   `/user/admin/services?serviceType=${
    //     type || 'Admission_processing'
    //   }&page=${page}&limit=${limit}`
    // );
    const response = await api.get(url, {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};

export const getAllCandidate = async (
  type: string,
  page: string,
  limit: string
) => {
  try {
    const response = await api.get(
      `/user/admin/getAllStarted?CandidateType=${
        type || 'Professionals'
      }&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return {
      success: false,
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred',
      data: error.response?.data,
    };
  }
};
