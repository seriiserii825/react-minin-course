import NotFoundProduct from "../components/NotFoundProduct";
import Preloader from "../components/Preloader";
import ProductContent from "../components/ProductContent";
import ProductReviews from "../components/ProductReviews";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8">
        <ProductSlider images={product.images} />
        <ProductContent product={product} />
      </div>

      <ProductReviews reviews={product.reviews} />
    </div>
  );
}
