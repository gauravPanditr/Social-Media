import request from '../utilits/apiClient';
import { Signup } from '../types/authtypes';

export const signUpUser = async (data: Signup) => {
  return await request<Signup, Signup>('post', '/api/users/register', data);
};
