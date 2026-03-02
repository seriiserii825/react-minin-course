import NotFoundProduct from "../components/NotFoundProduct";
import Preloader from "../components/Preloader";
import ProductContent from "../components/ProductContent";
import ProductSlider from "../components/ProductSlider";
import useSingleProduct from "../hooks/useSingleProduct";

export default function SingleProductPage() {
  const { product, loading } = useSingleProduct();
  if (loading) return <Preloader />;
  if (!product) {
    return <NotFoundProduct />;
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8">
          <ProductSlider images={product.images} />

          <ProductContent product={product} />
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
