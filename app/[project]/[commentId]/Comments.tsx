import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AllComments } from "./(actions)/fetchcomment";
import CommentForm from "./CommentForm";
import { HiMiniUserCircle } from "react-icons/hi2";
import { formatDistanceToNow } from "date-fns";

export default async function Comments({ commentId }: { commentId: string }) {
  const data = await AllComments(commentId);
  console.log(data);
  return (
    <div className="w-full p-2">
      <CommentForm commentId={commentId} />
      <div className="mt-5 flex flex-col gap-8">
        {data.reverse().map((comment: any) => (
          <div key={comment.id} className="p-3">
            <h1 className="text-lg font-semibold">{comment.content}</h1>
            <div className="flex items-center justify-between gap-5">
              {comment.userEmail ? (
                <div className="flex items-center mt-2">
                  <Avatar className="w-7 h-7">
                    <AvatarImage src={comment.user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <h1 className=" ml-2 text-muted-foreground">
                    {comment.user.name}
                  </h1>
                </div>
              ) : (
                <div className="flex gap-2 items-center mt-2">
                  <HiMiniUserCircle className="text-3xl" />
                  <h1 className=" text-muted-foreground">Anonymous</h1>
                </div>
              )}
              <h1 className="text-sm text-muted-foreground mt-2">
                Created{" "}
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                })}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
