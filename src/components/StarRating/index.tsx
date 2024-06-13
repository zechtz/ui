import { useState, useEffect } from "react";
import { HiStar } from "react-icons/hi";

type Props = {
  rating: number;
  maxStars: number;
  title?: string;
  onRatingSet: (rating: number) => void;
};

const StarRating = ({
  rating: initialRating,
  maxStars = 5,
  title = "How Would You Rate Our App Experience?",
  onRatingSet: onRatingSet,
}: Props) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  return (
    <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="bg-blue-500 p-8 text-center">
        <div className="inline-block rounded-full bg-white p-2">
          <HiStar className="h-12 w-12 text-blue-500" />
        </div>
      </div>
      <div className="px-8 py-6">
        <h2 className="text-center text-lg font-semibold text-gray-700">
          {title}
        </h2>
        <div className="mt-4 flex justify-center">
          {[...Array(maxStars)].map((_, i) => (
            <HiStar
              key={i}
              className={`h-6 w-6 cursor-pointer ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(i + 1)}
              aria-label={`Rate ${i + 1} stars`}
            />
          ))}
        </div>
        <button
          onClick={() => onRatingSet(rating)}
          className="mt-6 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StarRating;
