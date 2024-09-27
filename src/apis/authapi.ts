// apis/authApi.ts
import request from '../utilits/apiClient'; // Import your custom Axios instance
import { Signup } from '../types/authtypes'; // Type for Signup data

// Define the function for signing up a user
export const signUpUser = async (data: Signup) => {
   console.log("hello");
   
  // Correctly call the request function with method and URL as separate arguments
  const response = await request.post<{ _id: string }>('/users/register', data);
   console.log(response);
   
  return response.data; // Return the response data containing the user ID
};
