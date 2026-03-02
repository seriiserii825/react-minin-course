import { axiosInstance } from "../axios/axiosInstance";
import type { IProductResponse } from "../interfaces/IProductResponse";

export const productService = {
  getAll: async () => {
    const { data } = await axiosInstance.get<IProductResponse>(`/products?limit=12`);
    return data;
  },
  getOne: async (id: string) => {
    const { data } = await axiosInstance.get(`/products/${id}`);
    return data;
  },
};
