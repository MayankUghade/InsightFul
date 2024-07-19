import { auth } from "@/lib/auth";
import Image from "next/image";
import { Button } from "../ui/button";
import CreateProject from "./CreateProject";
export default async function Dashboard() {
  const session = await auth();
  return (
    <div className="p-5 lg:container">
      <h1 className="mt-3 text-center font-bold text-4xl">
        Welcome to InsightFul <span>{session?.user?.name}</span>
      </h1>

      <h1 className="mt-5 ml-3 font-semibold text-xl text-muted-foreground">
        Your projects:
      </h1>

      <div className="mt-5 p-3 w-full flex items-center justify-center">
        <div className="w-[500px] h-[300px] rounded-lg border border-dashed p-5 flex gap-1 flex-col items-center">
          <Image src="/empty.svg" alt="empty image" width={180} height={180} />
          <h1>You have created any projects yet!</h1>
          <h1 className="text-sm text-muted-foreground">
            create a new project to get strated
          </h1>
          <CreateProject />
        </div>
      </div>
    </div>
  );
}
