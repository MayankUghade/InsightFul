import { Button } from "@/components/ui/button";
import { BiComment, BiSolidUpvote } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

export default async function DiscussionCard() {
  return (
    <div className="w-full p-3 border rounded-lg mb-3">
      {/* name and created at */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ImProfile className="text-lg" />
          <h2 className="text-lg font-medium">John Doe</h2>
        </div>

        <h1>
          Created at:{" "}
          <span className="text-muted-foreground">20 july 2024</span>
        </h1>
      </div>

      {/* Title description and upvote button */}
      <div className="flex items-center justify-between gap-2">
        <div className="mt-5 ml-3">
          <h1 className="text-xl font-bold">Title 123kA4</h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
            totam, atque officiis quibusdam ducimus alias dolores eos animi
            culpa, autem corporis. Rerum similique exercitationem hic deleniti
            assumenda magnam qui?
          </p>
        </div>

        <div className="p-3 border rounded-lg flex gap-1 cursor-pointer">
          <BiSolidUpvote className="text-xl" />
          <h1>0</h1>
        </div>
      </div>

      <Button className="mt-3 ml-3 flex items-center gap-2">
        <BiComment />
        <h1>Comment</h1>
      </Button>
    </div>
  );
}
