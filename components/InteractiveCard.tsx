"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsUpIcon } from "lucide-react";

interface DataItem {
  user: string;
  profile: string;
  title: string;
  description: string;
}

interface ComponentProps {
  data: DataItem[];
}

export default function Component({ data }: ComponentProps) {
  return (
    <div className="p-5 rounded-lg bg-gray-900">
      {data.map((item, index) => {
        const [isUpvoted, setIsUpvoted] = useState(false);

        return (
          <Card key={index} className="max-w-full p-5 flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div
                className={`ml-auto cursor-pointer ${
                  isUpvoted ? "text-red-500" : ""
                }`}
                onClick={() => setIsUpvoted(!isUpvoted)}
              >
                <ThumbsUpIcon className="w-5 h-5" />
                <span className="sr-only">Upvote</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
