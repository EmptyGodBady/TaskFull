"use server";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";
export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });

  redirect("/organization/org_2vi7eytpMK790VrhZlmExmdVFyn");
}
