"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { string } from "zod";

export async function CreateMessage(values: any, projectname: string) {
  const session = await auth();
  const userEmail = session?.user?.email;

  revalidatePath(`/${projectname}`);
  return await prisma.message.create({
    data: {
      ...values,
      projectname,
      userEmail,
    },
  });
}
