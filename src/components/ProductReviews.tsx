import type { IReview } from "../interfaces/IProduct";
import ProductReviewsItem from "./ProductReviewsItem";

interface IProductReviewsProps {
  reviews: IReview[];
}
export default function ProductReviews({ reviews }: IProductReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
      </div>
    );
  }
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      {reviews.map((review, index) => (
        <ProductReviewsItem review={review} key={index} />
      ))}
    </div>
  );
}
