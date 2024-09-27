
import request from '../utilits/apiClient'; 
import { Signup } from '../types/authtypes'; 

export const signUpUser = async (data: Signup) => {
   console.log("hello");
   
 
  const response = await request.post<{ _id: string }>('/users/register', data);
   console.log(response);
   
  return response.data; 
};
