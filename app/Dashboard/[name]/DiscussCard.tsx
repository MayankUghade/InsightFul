import { Button } from "@/components/ui/button";
import { BiComment } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import Upvote from "@/app/[project]/upvote";
import { CreateTags } from "./createtags";
import { MessageStatus } from "@prisma/client";

interface DiscussionCardProps {
  item: {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    user: any;
    status: string;
  };
  projectName: string;
}

export default async function DiscussionCard({
  item,
  projectName,
}: DiscussionCardProps) {
  const user = item.user || { name: "Anonymous", image: "/default-avatar.png" };

  return (
    <div className="w-full p-3 border rounded-lg mb-3">
      {/* name and created at */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <h2 className="text-sm font-medium sm:text-lg">{user.name}</h2>
        </div>

        <CreateTags
          id={item.id}
          projectName={projectName}
          currentstatus={item.status as MessageStatus}
        />
      </div>

      {/* Title description and upvote button */}
      <div className="flex items-center justify-between gap-2">
        <div className="mt-3 ml-3">
          <h1 className="text-xl font-bold sm:text-lg">{item.title}</h1>
          <p className="text-muted-foreground sm:text-sm">{item.description}</p>
        </div>

        <Upvote messageId={item.id} />
      </div>

      <div className="flex items-center justify-between">
        <Link href={`/${projectName}/${item.id}`}>
          <Button className="mt-3 ml-3 flex items-center gap-2">
            <BiComment />
            <h1 className="sm:text-sm">Comment</h1>
          </Button>
        </Link>

        <h1 className="text-sm sm:text-xs">
          Created:{" "}
          {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
        </h1>
      </div>
    </div>
  );
}
