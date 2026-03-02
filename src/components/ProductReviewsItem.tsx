import type { IReview } from "../interfaces/IProduct";

interface ProductReviewsItemProps {
  review: IReview;
}
export default function ProductReviewsItem({ review }: ProductReviewsItemProps) {
  function reviewStars() {
    const rating = review.rating;
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "½"}
        {"☆".repeat(emptyStars)}
      </>
    );
  }
  return (
    <div className="border-b py-4">
      <div className="flex items-center justify-between">
        <span className="font-medium">{review.reviewerName}</span>
        <span className="text-yellow-500">{reviewStars()}</span>
      </div>
      <p className="text-gray-600 mt-2">{review.comment}</p>
    </div>
  );
}
