"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function AddComment(values: any, commentId: string) {
  const session = await auth();
  const userEmail = session?.user?.email as string;

  revalidatePath(`/${commentId}`);

  return prisma.comment.create({
    data: {
      ...values,
      messageId: commentId,
      userEmail,
    },
  });
}
