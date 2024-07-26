"use client";
import { useEffect, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { CreateUpvote, Fetchupvotes, UpdateUpvote } from "./(actions)/upvote";
import { useSession } from "next-auth/react";

export default function Upvote({ messageId }: { messageId: string }) {
  const [upvote, setUpvote] = useState(0);
  const [voted, setVoted] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const votecount = async () => {
      if (session && session.user?.email) {
        const data = await Fetchupvotes(messageId, session.user?.email);
        if (data) {
          setUpvote(data.upvote);
          setVoted(true);
        } else {
          setUpvote(0);
          setVoted(false);
        }
      }
    };
    votecount();
  }, [messageId, session]);

  const handleUpvote = async () => {
    if (!session) {
      return alert("Please sign in to upvote");
    } else if (session.user?.email) {
      const data = await Fetchupvotes(messageId, session.user.email);
      if (data && data.upvote > 0 && data?.userEmail === session.user.email) {
        await UpdateUpvote(data.id, session.user.email, messageId, upvote - 1);
        setUpvote(upvote - 1);
      } else {
        await CreateUpvote(messageId, upvote + 1);
        setUpvote(1);
      }
      setVoted(true);
    }
  };

  return (
    <div
      className="p-3 border rounded-lg flex gap-1 cursor-pointer w-fit"
      onClick={handleUpvote}
    >
      <BiSolidUpvote className="text-xl" />
      <h1>{upvote}</h1>
    </div>
  );
}
