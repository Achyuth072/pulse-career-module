"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function saveResumeContext(formData: FormData) {
  const text = formData.get("resumeText") as string;

  if (!text) {
    throw new Error("No text provided");
  }

  // Save the raw text directly to the DB
  await db.userProfile.upsert({
    where: { id: "user-main" },
    update: { resumeText: text },
    create: { id: "user-main", resumeText: text },
  });

  revalidatePath("/");
  return { success: true };
}
