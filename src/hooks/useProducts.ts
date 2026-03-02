import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type { IProduct, IProductsQuery } from "../interfaces/IProduct";
import { productService } from "../services/productService";
import { useSearch, useSetSearch } from "../storage/useProductsStorage";
import { useDebounce } from "./useDebounce";
export default function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);
  const limit = 24;
  const [viewedProducts, setViewedProducts] = useState<number>(24);

  const search = useSearch();
  const setSearch = useSetSearch();

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const query: IProductsQuery = {
          skip,
          limit,
          sortBy: "price",
          order: "desc",
        };
        const res = await productService.getAll(query);
        setProducts(res.products);
        setTotal(res.total);
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
    if (debouncedSearch === "") {
      fetchProducts();
    }
  }, [skip, debouncedSearch]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await productService.search(debouncedSearch);
        setProducts(res.products);
        setTotal(res.total);
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
    if (debouncedSearch) fetchProducts();
  }, [debouncedSearch]);

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
    search,
    setSearch,
  };
}
