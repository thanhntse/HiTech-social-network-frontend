import axios from 'axios';
import helpers from '../helpers';

const baseURL = 'https://localhost:7093/';
const token = helpers.cookie_get('AT');
const onRequestSuccess = (config: any) => {
  config.headers['Authorization'] = `Bearer ${helpers.cookie_get('AT')}`;
  return config;
};
const onRequestError = (error: any) => {
  return Promise.reject(error);
};
const onResponseSuccess = (response: any) => {
  return response.data;
};
const onResponseError = (error: any) => {
  if (error.response) {
    if (error.response.status === 401) {
    }
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error);
};
axios.interceptors.request.use(onRequestSuccess, onRequestError);
axios.interceptors.response.use(onResponseSuccess, onResponseError);
axios.defaults.baseURL = baseURL;

var BaseRequest = {
  Get: async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log('err', err);
    }
  },
  Post: async (url: string, data?: any) => {
    try {
      const response = await axios.post<any>(url, data);
      return response.data;
    } catch (err) {
      console.log('err', err);
    }
  },
  Put: async (url: string, data: any) => {
    try {
      const response = await axios.put<any>(url, data);
      return response.data;
    } catch (err) {
      console.log('err', err);
    }
  },
  Delete: async (url: string) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (err) {
      console.log('err', err);
    }
  },
  UploadStockPhoto: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(
        'api/Image/upload-customize-photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            client: 'tfu_admin',
            ...(token ? { Authorization: `Bearer ${token}` } : {}) // Chỉ thêm Authorization nếu có token
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error uploading stock photo:', error);
      throw error; // Bắn lỗi ra ngoài để xử lý tại nơi sử dụng
    }
  }
};

export default BaseRequest;
