import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.response?.statusText || "Server error";

      // 🔥 всегда бросаем нормальную Error
      return Promise.reject(new Error(message));
    }

    return Promise.reject(error);
  },
);
