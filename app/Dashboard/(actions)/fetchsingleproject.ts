"use server";

import prisma from "@/lib/db";
import { MessageStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function Fetchsingleproject(name: string) {
  try {
    const project = await prisma.project.findUnique({
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

    if (!project) {
      throw new Error(`Project with name ${name} not found`);
    }

    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw new Error("Error fetching project");
  }
}

export default async function Updatetags(
  id: string,
  status: MessageStatus,
  projectName: string
) {
  try {
    revalidatePath(`/Dashboard/${projectName}`);
    revalidatePath(`/${projectName}`);

    await prisma.message.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  } catch (error) {
    console.error("Error updating message tags:", error);
    throw new Error("Error updating message tags");
  }
}
