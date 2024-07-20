"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createProject(values: any) {
  const session = await auth();
  const userEmail = session?.user?.email;

  revalidatePath("/");
  return prisma.project.create({
    data: {
      ...values,
      userEmail,
    },
  });
}
