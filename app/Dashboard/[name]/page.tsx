import { Fetchsingleproject } from "../(actions)/fetchsingleproject";
import Card from "./card";
import DiscussionCard from "./DiscussCard";
import { auth } from "@/lib/auth";

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = params;
  const data = await Fetchsingleproject(name);

  const session = await auth();

  if (!data) return <div>Project not found</div>;

  if (!session) return <div>SignUp to access this page</div>;

  return (
    <div className="grid lg:grid-cols-[30%_70%] gap-4 p-5 lg:container">
      <Card
        id={data.id}
        userEmail={data.userEmail}
        name={data.name as string}
        createdAt={data.createdAt}
        messagescount={data.messages.length}
      />
      <div>
        <h1 className="text-xl mb-2 text-center">
          All this messages on this project
        </h1>
        {data.messages.length > 0 ? (
          data.messages.map((item) => (
            <DiscussionCard
              key={item.id}
              item={item as any}
              projectName={name}
            />
          ))
        ) : (
          <div>No messages available.</div>
        )}
      </div>
    </div>
  );
}
