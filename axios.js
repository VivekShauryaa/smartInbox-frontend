
import axios from "axios";

export const contextRequest = axios.create({
  // baseURL: "http://localhost:8101/api",
  baseURL: "https://smartinbox-backend.onrender.com/api",
  withCredentials: true,
});
