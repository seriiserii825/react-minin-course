import { useSetMiniCartProducts } from "@/store/useMiniCartStorage";
import type { IProduct } from "../interfaces/IProduct";
import formatPrice from "../utils/formatPrice";

interface IProductContentProps {
  product: IProduct;
}

export default function ProductContent({ product }: IProductContentProps) {
  const setProductsToMiniCart = useSetMiniCartProducts();

  return (
    <div className="flex flex-col gap-5">
      <span className="w-fit px-4 py-1 rounded-full bg-indigo-600 text-white text-xs uppercase tracking-wide">
        {product.category}
      </span>

      <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

      <div className="text-sm text-gray-500">
        Brand: <span className="font-medium text-gray-800">{product.brand}</span> • SKU:
        <span className="font-medium text-gray-800">{product.sku}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-lg">★★★★★</span>
        <span className="text-sm text-gray-600">({product.rating})</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
        {product.discountPercentage > 0 && (
          <span className="text-sm text-green-600 font-medium">
            -{product.discountPercentage}% discount
          </span>
        )}
      </div>

      <div className="text-sm">
        {product.stock > 3 ? (
          <span className="text-gray-600">Only {product.stock} left</span>
        ) : (
          <span className="font-medium text-red-600">Low stock —</span>
        )}
      </div>

      <p className="text-gray-700 leading-relaxed">{product.description}</p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setProductsToMiniCart(product)}
          className="flex-1 cursor-pointer bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
          Add to cart
        </button>
      </div>

      <div className="flex flex-col gap-2 border-t pt-4 text-sm text-gray-500">
        <p>🚚 Shipping: Ships in 1 month</p>
        <p>🛡 Warranty: 1 month warranty</p>
        <p>↩️ Return: 30 days return policy</p>
      </div>
    </div>
  );
}
