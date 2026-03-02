import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type { IProduct } from "../interfaces/IProduct";
import { productService } from "../services/productService";
export default function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const [viewedProducts, setViewedProducts] = useState<number>(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setViewedProducts(limit);
  }, [limit]);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await productService.getAll();
      setProducts(res.products);
      setTotal(res.total);
      setSkip(res.skip);
      setLimit(res.limit);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsError(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }
  return {
    products,
    isLoading,
    isError,
    isModalOpen,
    setIsModalOpen,
    total,
    skip,
    limit,
    viewedProducts,
    setViewedProducts,
  };
}
