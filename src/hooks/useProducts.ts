import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type { IProduct } from "../interfaces/IProduct";
import { productService } from "../services/productService";
export default function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await productService.getAll();
      setProducts(res.products);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsError(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }
  return { products, isLoading, isError, isModalOpen, setIsModalOpen };
}
