import Discussions from "./discussions";
import CreateDiscussion from "./form";

export default function Page({ params }: { params: { project: string } }) {
  const { project } = params;

  return (
    <div className="sm:p-5 p-2 lg:container">
      <h1 className="text-xl font-bold mb-4 p-2">{project}</h1>
      <div className="grid lg:grid-cols-[30%_70%] gap-4 p-2">
        <CreateDiscussion projectname={project} />
        <Discussions projectName={project} />
      </div>
    </div>
  );
}
