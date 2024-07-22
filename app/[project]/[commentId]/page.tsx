import DiscussionCard from "../DiscussionCard";
import { FetchComment } from "./(actions)/fetchcomment";
import Comments from "./Comments";
import SingleCard from "./SingleCommentCard";

export default async function page({
  params,
}: {
  params: { commentId: string };
}) {
  const { commentId } = params;
  const commentData = await FetchComment(commentId);
  return (
    <div className="lg:container sm:mt-8 p-3">
      <div className="grid lg:grid-cols-[35%_60%] gap-4">
        <SingleCard item={commentData} />
        <Comments commentId={commentId} />
      </div>
    </div>
  );
}
