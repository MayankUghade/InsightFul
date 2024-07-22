"use server";

import prisma from "@/lib/db";

export async function FetchComment(commentId: string) {
  return await prisma.message.findUnique({
    where: {
      id: commentId,
    },
  });
}

export async function AllComments(messageId: string) {
  return prisma.comment.findMany({
    where: {
      messageId,
    },
    include: {
      user: true,
    },
  });
}
