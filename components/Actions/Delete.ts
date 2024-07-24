"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function Delete(id: string, name: string) {
  revalidatePath("/");
  revalidatePath(`/Dashboard/${name}`);
  revalidatePath(`/${name}`);
  await prisma.project.delete({
    where: {
      id,
    },
  });
}
