import { Button } from "@/components/ui/button";
import { BiComment, BiSolidUpvote } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/auth";
import { formatDistanceToNow } from "date-fns"; // Optional, for formatting dates nicely

export default async function SingleCard({ item }: any) {
  const session = await auth();

  return (
    <div className="w-full p-3 ">
      {/* name and created at */}
      <div className="flex items-center justify-between">
        <div className="flex items-center sm:gap-3 gap-2">
          <Avatar className="w-6 h-6 sm:w-10 sm:h-10">
            <AvatarImage
              src={session?.user?.image || "/default-avatar.png"}
              alt={session?.user?.name as string}
            />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <h2 className="sm:text-lg font-medium">{session?.user?.name}</h2>
        </div>
        <h1 className="text-xs text-muted-foreground">
          Created{" "}
          {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
        </h1>
      </div>

      {/* Title description and upvote button */}
      <div className="flex items-center justify-between gap-2">
        <div className=" mt-3 ml-3">
          <h1 className="sm:text-xl text-lg font-bold">{item.title}</h1>
          <p className="text-muted-foreground sm:text-md text-sm">
            {item.description}
          </p>
        </div>

        <div className="p-3 border rounded-lg flex gap-1 cursor-pointer">
          <BiSolidUpvote className="text-xl" />
          <h1>0</h1>
        </div>
      </div>
    </div>
  );
}
