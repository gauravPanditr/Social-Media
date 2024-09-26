// utilits/apiClient.ts
import axios from 'axios';

// Create an Axios instance
const request = axios.create({
  baseURL: 'http://localhost:5000/api', // Set the base URL for your API
  headers: {
    'Content-Type': 'application/json', // Set the default content type
  },
});

// Export the request instance
export default request;
