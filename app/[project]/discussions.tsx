import Image from "next/image";
import DiscussionCard from "./DiscussionCard";
import { FetchMessages } from "./(actions)/fetch-messages";

interface ProjectNameProps {
  projectName: string;
}

export default async function Discussions({ projectName }: ProjectNameProps) {
  const data = await FetchMessages(projectName);
  return (
    <div className="w-full h-full">
      <div className="flex items-center flex-col mt-5">
        <Image src="/no.svg" alt="no discussions" width={400} height={400} />
        <h1 className="text-3xl font-bold mt-2">No discussions created yet</h1>
        <p className="text-muted-foreground">
          Fil the form to create discussions
        </p>
      </div>
    </div>
  );
}
