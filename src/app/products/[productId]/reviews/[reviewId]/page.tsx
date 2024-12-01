export default function ReviewsDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
