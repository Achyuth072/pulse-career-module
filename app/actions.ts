"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addJob } from "@/lib/data";

export async function createJob(formData: FormData) {
  const rawFormData = {
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    status: formData.get("status") as string,
  };

  // We only pass the raw data now.
  // The DB handles the ID and Date generation.
  await addJob({
    companyName: rawFormData.company,
    role: rawFormData.role,
    status: rawFormData.status,
    aiAnalysis: "Pending AI Analysis...", // Placeholder for now
  });

  revalidatePath("/");
  redirect("/");
}
