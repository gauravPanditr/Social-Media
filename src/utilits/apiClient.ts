import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
});
const request = async <T,D>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await apiClient.request<T>({
      method,
      url,
      data,
      ...config, 
    });
    return response;
  } catch (error) {
    
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    } else {
      throw 'An unexpected error occurred';
    }
  }
};

export default request;
