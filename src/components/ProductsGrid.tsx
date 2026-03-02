import type { IProduct } from "../interfaces/IProduct";
import Product from "./Product";

interface IProductsProps {
  products: IProduct[];
  createProduct: () => void;
}

export default function ProductsGrid({ products, createProduct }: IProductsProps) {
  return (
    <>
      <header className="flex justify-between items-center mb-12 gap-4">
        <h2 className="text-4xl text-white font-bold text-center">Products</h2>
        <div className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full">
          {products.length}
        </div>
        <button className="btn btn-success ml-auto" onClick={() => createProduct()}>
          Create new product
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
