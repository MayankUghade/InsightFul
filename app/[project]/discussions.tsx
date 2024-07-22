import Image from "next/image";
import DiscussionCard from "./DiscussionCard";
import { FetchMessages } from "./(actions)/fetch-messages";

interface ProjectNameProps {
  projectName: string;
}

export default async function Discussions({ projectName }: ProjectNameProps) {
  const data = await FetchMessages(projectName);
  const message = data?.message || [];

  return (
    <div className="w-full h-full lg:mt-1 mt-10">
      {message.length > 0 ? (
        message
          .reverse()
          .map((item: any) => (
            <DiscussionCard
              key={item.id}
              item={item}
              projectName={projectName}
            />
          ))
      ) : (
        <div className="flex items-center flex-col mt-5">
          <Image src="/no.svg" alt="no discussions" width={400} height={400} />
          <h1 className="text-3xl font-bold mt-2">
            No discussions created yet
          </h1>
          <p className="text-muted-foreground">
            Fill the form to create discussions
          </p>
        </div>
      )}
    </div>
  );
}
