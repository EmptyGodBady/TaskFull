"use server";

import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
const handler = async (data: InputType): Promise<ReturnType> => {
  const authResult = await auth();
  const { userId } = authResult;

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const { title } = data;

  let board;
  try {
    board = await db.board.create({
      data: { title },
    });
  } catch (error) {
    console.error("Failed to create board:", error);
    return { error: "Failed to create board" };
  }
  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
