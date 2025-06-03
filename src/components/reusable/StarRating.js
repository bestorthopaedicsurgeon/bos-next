import Image from "next/image";
import React from "react";

const StarRating = ({ stars }) => {
  const totalStars = 5;
  const filledStar = "/icons/star.png"; // Replace with actual path
  const unfilledStar = "/icons/unfilledStar.png"; // Replace with actual path
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, i) => (
        <Image
          key={i}
          src={i < stars ? filledStar : unfilledStar}
          alt={i < stars ? "Filled star" : "Unfilled star"}
          width={24}
          height={24}
        />
      ))}
    </div>
  );
};

export default StarRating;
