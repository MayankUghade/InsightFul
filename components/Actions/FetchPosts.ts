"use session";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

export async function Fetchposts() {
  const session = await auth();
  const userEmail = session?.user?.email as string;

  return await prisma.project.findMany({
    where: {
      userEmail,
    },
    include: {
      messages: true,
    },
  });
}

export async function Allmessages(id: string) {
  return await prisma.project.findMany({
    where: {
      id,
    },
    include: {
      messages: true,
    },
  });
}
