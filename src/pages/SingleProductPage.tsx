import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productService } from "../services/productService";
import type { IProduct } from "../interfaces/IProduct";
import Preloader from "../components/Preloader";

export default function SingleProductPage() {
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

  if (loading) return <Preloader />;
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <p className="text-gray-600 mt-4">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8">
          <div>
            <div className="rounded-xl overflow-hidden border mb-4">
              <img
                src={product.thumbnail}
                alt="Essence Mascara Lash Princess"
                className="w-full h-96 object-contain bg-gray-50"
              />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="flex gap-3">
                {product.images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <span className="w-fit px-4 py-1 rounded-full bg-indigo-600 text-white text-xs uppercase tracking-wide">
              Beauty
            </span>

            <h1 className="text-3xl font-bold text-gray-900">Essence Mascara Lash Princess</h1>

            <div className="text-sm text-gray-500">
              Brand: <span className="font-medium text-gray-800">Essence</span> • SKU:
              <span className="font-medium text-gray-800">RCH45Q1A</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-sm text-gray-600">(4.94)</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">$9.99</span>
              <span className="text-sm text-green-600 font-medium">-7.17% discount</span>
            </div>

            <div className="text-sm">
              <span className="font-medium text-red-600">Low stock</span> —
              <span className="text-gray-600">Only 5 left</span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              The Essence Mascara Lash Princess is a popular mascara known for its volumizing and
              lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free
              formula.
            </p>

            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
                Add to cart
              </button>
              <button className="flex-1 border border-indigo-600 text-indigo-600 py-3 rounded-xl font-medium hover:bg-indigo-50 transition">
                Buy now
              </button>
            </div>

            <div className="border-t pt-4 text-sm text-gray-500">
              <p>🚚 Shipping: Ships in 1 month</p>
              <p>🛡 Warranty: 1 month warranty</p>
              <p>↩️ Return: 30 days return policy</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">John Doe</span>
                <span className="text-yellow-500">★★☆☆☆</span>
              </div>
              <p className="text-gray-600 mt-2">Very unhappy with my purchase!</p>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Nolan Gonzalez</span>
                <span className="text-yellow-500">★★☆☆☆</span>
              </div>
              <p className="text-gray-600 mt-2">Not as described!</p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Scarlett Wright</span>
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="text-gray-600 mt-2">Very satisfied!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
