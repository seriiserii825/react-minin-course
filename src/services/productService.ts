import { axiosInstance } from "../axios/axiosInstance";
import type { IProduct, IProductsQuery } from "../interfaces/IProduct";
import type { IProductResponse } from "../interfaces/IProductResponse";

export const productService = {
  getAll: async (query: IProductsQuery) => {
    const queryString = new URLSearchParams();
    if (query.limit) queryString.append("limit", query.limit.toString());
    if (query.skip) queryString.append("skip", query.skip.toString());
    const url = `/products?${queryString.toString()}`;
    const { data } = await axiosInstance.get<IProductResponse>(url);
    return data;
  },
  getOne: async (id: string) => {
    const { data } = await axiosInstance.get<IProduct>(`/products/${id}`);
    return data;
  },
};
