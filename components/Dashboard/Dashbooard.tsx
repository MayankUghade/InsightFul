import { auth } from "@/lib/auth";
import Image from "next/image";
import { Button } from "../ui/button";
import CreateProject from "./CreateProject";
import Card from "./ProjectCard";
import { Fetchposts } from "../Actions/FetchPosts";
import { Project } from "@prisma/client";

export default async function Dashboard() {
  const session = await auth();
  const data = await Fetchposts();

  return (
    <div className="p-5 lg:container">
      <h1 className="mt-3 text-center font-bold sm:text-4xl text-2xl">
        Welcome to InsightFul{" "}
        <span className="text-gradient-pink-purple">{session?.user?.name}</span>
      </h1>

      <div className="flex items-center justify-between">
        <h1 className="mt-5 ml-3 font-semibold text-xl text-muted-foreground">
          Your projects:
        </h1>
        <CreateProject />
      </div>

      <div className="mt-5 p-3 w-full flex flex-wrap items-center justify-center gap-3">
        {data.length > 0 ? (
          data.map((item: Project) => (
            <Card
              key={item.id}
              id={item.id}
              userEmail={item.userEmail}
              name={item.name}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <div className="p-5 flex gap-1 flex-col items-center">
            <Image
              src="/empty.svg"
              alt="empty image"
              width={350}
              height={250}
            />
            <h1 className="text-2xl font-bold">
              You haven't created any projects yet!
            </h1>
            <h1 className="text-sm text-muted-foreground">
              Create a new project to get started
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
