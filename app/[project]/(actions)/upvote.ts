"use server";

import prisma from "@/lib/db";
import { auth } from "@/lib/auth";

export async function CreateUpvote(messageId: string, upvote: number) {
  const session = await auth();
  const userEmail = session?.user?.email ?? null;
  await prisma.upvote.create({
    data: {
      userEmail,
      messageId,
      upvote,
    },
  });
}

export async function Fetchupvotes(messageId: string, userEmail: string) {
  return await prisma.upvote.findFirst({
    where: {
      messageId,
      userEmail,
    },
  });
}

export async function UpdateUpvote(
  id: string,
  userEmail: string,
  messageId: string,
  upvote: number
) {
  await prisma.upvote.update({
    where: {
      id,
      userEmail,
      messageId,
    },
    data: {
      upvote,
    },
  });
}
