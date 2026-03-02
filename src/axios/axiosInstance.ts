import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://dummyjson.com`,
  headers: {
    contentType: "application/json",
  },
});
