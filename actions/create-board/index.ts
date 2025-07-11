"use server";

import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

const handler = async (data: InputType): Promise<ReturnType> => {
  const authResult = await auth();
  const { userId, orgId } = authResult;

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split("|");

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageLinkHTML ||
    !imageUserName
  ) {
    return { error: "Missing fields. Failed to create board." };
  }

  let board;
  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName,
      },
    });
  } catch (error) {
    console.error("Failed to create board:", error);
    return { error: "Failed to create board" };
  }
  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
