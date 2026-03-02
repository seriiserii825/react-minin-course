import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import type { IProduct } from "../interfaces/IProduct";
import { productService } from "../services/productService";
import { useFavorites } from "../storage/useFavoritesStorage";
import ProductsGrid from "../components/ProductsGrid";

export default function FavoritesPage() {
  const favorites = useFavorites();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);

  async function fetchFavoriteProducts(productId: number) {
    setIsLoading(true);
    try {
      const res = await productService.getOne(String(productId));
      setProducts((prev) => [...prev, res]);
    } catch (error) {
      console.error("Error fetching product:", error);
      setIsError("Failed to load favorite products.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    favorites.forEach(async (productId) => {
      await fetchFavoriteProducts(productId);
    });
  }, []);

  if (isLoading) return <Preloader />;
  if (isError) return <p className="text-white text-center font-bold">{isError}</p>;

  return (
    <>
      <h1 className="text-white text-center font-bold text-4xl">Favorites Page</h1>
      <ProductsGrid products={products} total={products.length} viewedProducts={products.length} />
    </>
  );
}
