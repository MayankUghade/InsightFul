"use server";

import prisma from "@/lib/db";
import { MessageStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function Fetchsingleproject(name: string) {
  return await prisma.project.findUnique({
    where: {
      name,
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

export default async function Updatetags(
  id: string,
  status: MessageStatus,
  projectName: string
) {
  revalidatePath(`/Dashboard/${projectName}`);
  revalidatePath(`/${projectName}`);
  await prisma.message.update({
    where: {
      id,
      projectname: projectName,
    },
    data: {
      status,
    },
  });
}
