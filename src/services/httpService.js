import axios from "axios";
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response && error.response >= 400 && error.response < 500;
  
    if (!expectedError) {
      console.log("Logging the error", error);
      toast.error("Unexpected error occurred");
    }
    return Promise.reject(error);
  });

  export default {
      get: axios.get,
      post:axios.post,
      put:axios.put,
      delete:axios.delete
  }
  