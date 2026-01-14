import axios from "axios";
import { useEffect, useState } from "react";

interface ReviewsProps {
  propertyId: string;
}

export default function Reviews({ propertyId }: ReviewsProps) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="border-b py-2">
            <p className="font-semibold">{review.user}</p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}
