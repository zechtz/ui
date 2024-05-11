import { useState, useEffect } from "react";
import { HiStar } from "react-icons/hi";

type Props = {
  rating: number;
  maxStars: number;
  title?: string;
  onSetRating: (rating: number) => void;
};

const StarRating = ({
  rating: initialRating,
  maxStars = 5,
  title = "How Would You Rate Our App Experience?",
  onSetRating,
}: Props) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  return (
    <div className="bg-white rounded-lg max-w-xs mx-auto overflow-hidden shadow-lg">
      <div className="bg-blue-500 text-center p-8">
        <div className="p-2 inline-block bg-white rounded-full">
          <HiStar className="h-12 w-12 text-blue-500" />
        </div>
      </div>
      <div className="px-8 py-6">
        <h2 className="text-center text-gray-700 text-lg font-semibold">
          {title}
        </h2>
        <div className="flex justify-center mt-4">
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
          onClick={() => onSetRating(rating)}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StarRating;
