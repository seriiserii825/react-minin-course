import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import type { IProduct } from "../interfaces/IProduct";
import { productService } from "../services/productService";
import { useFavorites } from "../store/useFavoritesStorage";
import ProductsGrid from "../components/ProductsGrid";

export default function FavoritesPage() {
  const favorites = useFavorites();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);

  const displayedProducts = products.filter((p) => favorites.includes(p.id));

  useEffect(() => {
    if (favorites.length === 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    Promise.all(favorites.map((id) => productService.getOne(String(id))))
      .then((results) => setProducts(results))
      .catch(() => setIsError("Failed to load favorite products."))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Preloader />;
  if (isError) return <p className="text-white text-center font-bold">{isError}</p>;

  return (
    <div className="pb-24">
      <h1 className="text-white text-center font-bold text-4xl">Favorites Page</h1>
      <ProductsGrid
        products={displayedProducts}
        total={products.length}
        viewedProducts={products.length}
      />
    </div>
  );
}
