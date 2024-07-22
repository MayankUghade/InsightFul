import { Button } from "@/components/ui/button";
import { BiComment, BiSolidUpvote } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/auth";
import { formatDistanceToNow } from "date-fns"; // Optional, for formatting dates nicely
import Link from "next/link";

interface DiscussionCardProps {
  item: {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    user: any;
  };
  projectName: string;
}

export default async function DiscussionCard({
  item,
  projectName,
}: DiscussionCardProps) {
  const session = await auth();

  const user = item.user || { name: "Anonymous", image: "/default-avatar.png" };

  return (
    <div className="w-full p-3 border rounded-lg mb-3">
      {/* name and created at */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-medium">{user.name}</h2>
        </div>
        <h1 className="text-sm">
          Created at:{" "}
          {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
        </h1>
      </div>

      {/* Title description and upvote button */}
      <div className="flex items-center justify-between gap-2">
        <div className="mt-5 ml-3">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <p className="text-muted-foreground">{item.description}</p>
        </div>

        <div className="p-3 border rounded-lg flex gap-1 cursor-pointer">
          <BiSolidUpvote className="text-xl" />
          <h1>0</h1>
        </div>
      </div>

      <Link href={`/${projectName}/${item.id}`}>
        <Button className="mt-3 ml-3 flex items-center gap-2">
          <BiComment />
          <h1>Comment</h1>
        </Button>
      </Link>
    </div>
  );
}
