import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type { IProduct, IProductsQuery } from "../interfaces/IProduct";
import { productService } from "../services/productService";
export default function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);
  const limit = 24;
  const [viewedProducts, setViewedProducts] = useState<number>(24);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const query: IProductsQuery = {
          skip,
          limit,
        };
        const res = await productService.getAll(query);
        setProducts(res.products);
        setTotal(res.total);
        setSkip(res.skip);
        setViewedProducts(res.skip + res.limit);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setIsError(error.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    fetchProducts();
  }, [skip]);

  return {
    products,
    isLoading,
    isError,
    isModalOpen,
    setIsModalOpen,
    total,
    skip,
    limit,
    setSkip,
    viewedProducts,
    setViewedProducts,
  };
}
