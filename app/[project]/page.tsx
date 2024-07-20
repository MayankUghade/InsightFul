import Discussions from "./discussions";
import CreateDiscussion from "./form";

export default function Page({ params }: { params: { project: string } }) {
  const { project } = params;
  const formattedProject = project.replace(/-/g, " ");

  return (
    <div className="sm:p-5 p-2 lg:container">
      <h1 className="text-xl font-bold mb-4">{formattedProject}</h1>
      <div className="grid grid-cols-[30%_70%] gap-4">
        <CreateDiscussion />
        <Discussions projectName={formattedProject} />
      </div>
    </div>
  );
}
