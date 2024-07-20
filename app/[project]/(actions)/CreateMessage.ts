"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
export async function CreateMessage(values: any) {
  const session = await auth();
  const userEmail = session?.user?.email;

  return prisma.message.create({
    data: {
      ...values,
      userEmail,
    },
  });
}
