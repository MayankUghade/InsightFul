import prisma from "@/lib/db";

export async function FetchMessages(projectName: string) {
  return await prisma.project.findUnique({
    where: {
      name: projectName,
    },
    include: {
      messages: {
        include: {
          user: true,
        },
      },
    },
  });
}
