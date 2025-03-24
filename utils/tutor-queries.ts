/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import api from './api';


export const getTutorOverview = async () => {
  try {
    const response = await api.get('/user/tutor/overview');
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

export const getTutorPersonalDetail = async () => {
  try {
    const response = await api.get('/user/tutor/me');
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

export const tutorCreateResource = async (formData: {
  department: string;
  subject: string;
  descrption: string;
  link: string;
}) => {
  try {

    const response = await api.post('/user/tutor/add-resources', formData);
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

export const tutorGetCategories = async () => {
  try {
    const response = await api.get('/user/student/categories');
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

export const tutorGetResources = async ({
  page,
  limit,
  sort,
  archived,
  fields
}: {
  page: string;
  limit: string;
  sort?: string;
  archived?: boolean;
  fields?:string
}) => {
  try {
    if (archived) {
      return null;
    }
    const response = await api.get(
      `/user/tutor/resources?page=${page}&limit=${limit}&sort=${sort}&${fields ? "fields=department,descrption" :""}`
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

export const tutorAddSubject = async (formData: {
    name: string,
    subject: string,
    hourlyRate: string,
    sessionType: string,
    level: string,
    sessionPeriod:string,
    availabilty: string[],
  }) => {
    try {

      const response = await api.post('/user/tutor/add-dept', formData);
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


  export const tutorDeleteResource = async (resourceId:string) => {
    try {
      const response = await api.delete(`/user/tutor/rem-dept/${resourceId}`);
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


  export const tutorGetBooking = async ({
    type,
    page,
    limit,
    sort
  }:{
    type:string,
    page:string,
    limit:string
    sort?:string
  }) => {
    try {
      const response = await api.get(`/user/tutor/booking?type=${type}&page=${page}&limit=${limit}&sort=${sort}`);
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

  export const tutorAcceptBooking = async (requestId:string) => {
    try {
      const response = await api.post(`/user/tutor/accept-req/${requestId}`);
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

  export const tutorSendMessage = async (formdata:any) => {
    try {
      const response = await api.post(`/user/tutor/send`,formdata);
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



  export const tutorRejectBooking = async (requestId:string) => {
    try {
      const response = await api.post(`/user/tutor/reject-req/${requestId}`);
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


  export const tutorApproveStartSession = async (requestId:string) => {
    try {
      const response = await api.post(`/user/tutor/start/session/${requestId}`);
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

  export const tutorRemoveDepartment = async (departmentID:string) => {
    try {
      const response = await api.delete(`/user/tutor/rem-dept/${departmentID}`);
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

  export const fetchBanks = async () => {
    try {
      const response = await api.get(`/user/tutor/listbank`);
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

  export const validateAccount = async ({
    accountNumber, bankCode
  }:{
    accountNumber:string,
    bankCode:string
  }) => {
    try {
      const response = await api.post(`/user/tutor/get-acc-name`,{
        accountNumber, bankCode
      });
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
  }

  export const tutorSubmitBankDetail = async ({
    accountNumber, bankCode,accountName
  }:{
    accountNumber:string,
    bankCode:string
    accountName:string
  }) => {
    try {
      const response = await api.post(`/user/tutor/add-acc-details`,{
        accountNumber, bankCode, accountName
      });
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
  }


  export const getTutorTransactionHistory = async () => {
    try {
      const response = await api.get('/user/tutor/trnx');
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


  export const tutorSubmitReport =async (formData: {
    studentId: string;
    requestId: string;
    reason: string;
  }) => {
    try {
      const response = await api.post('/user/tutor/report', formData);
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


  export const tutorUpdateProfile = async (formData: any) => {
    try {
      const response = await api.patch('/user/tutor/UpdateMe', formData);
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


  export const tutorVerfication = async (formData: any) => {
    try {
      const response = await api.post('/user/tutor/verify', formData);
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
