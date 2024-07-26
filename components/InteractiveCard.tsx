"use client";

import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";

interface CardProps {
  upvotes: number;
  title: string;
  description: string;
}

export default function Card({ title, upvotes, description }: CardProps) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [number, setNumber] = useState(upvotes);

  const handleUpvote = () => {
    setIsUpvoted((prev) => !prev);
    setNumber((prev) => prev + (isUpvoted ? -1 : 1));
  };

  return (
    <div className="p-5 rounded-lg dark:bg-gray-900 bg-gray-200  border flex">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div
        className={`ml-auto cursor-pointer p-2 border rounded-lg h-fit ${
          isUpvoted ? "bg-red-500 text-white" : ""
        }`}
        onClick={handleUpvote}
      >
        <div className="flex items-center gap-2">
          <FaChevronUp />
          <h1>{number}</h1>
        </div>
      </div>
    </div>
  );
}
