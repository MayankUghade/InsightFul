"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function EditProject(
  id: string,
  values: any,
  name: string
) {
  revalidatePath("/");
  revalidatePath(`/Dashboard/${name}`);
  await prisma.project.update({
    where: {
      id,
    },
    data: {
      ...values,
    },
  });
}
