import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProduct } from "../interfaces/IProduct";
import { productService } from "../services/productService";

export default function useSingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchProduct() {
    if (!id) return;
    setLoading(true);
    try {
      const res = await productService.getOne(id);
      setProduct(res);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error("Error fetching product:", error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return { product, loading };
}
