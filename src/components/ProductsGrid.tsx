import type { IProduct } from "../interfaces/IProduct";
import Product from "./Product";

interface IProductsProps {
  products: IProduct[];
  total: number;
  viewedProducts: number;
  createProduct: () => void;
}

export default function ProductsGrid({
  products,
  createProduct,
  total,
  viewedProducts,
}: IProductsProps) {
  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl text-white font-bold">Products</h2>
          <span className="bg-white/25 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {viewedProducts}/{total}
          </span>
        </div>

        <button className="px-6 text-white font-bold" onClick={() => createProduct()}>
          + Create new product
        </button>
      </header>
      <div className="grid grid-cols-4 gap-2 mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
