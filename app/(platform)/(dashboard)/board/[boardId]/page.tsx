import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import ListContainer from "./_components/list-container";
import BoardNavbar from "./_components/board-navbar";

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>;
}

export default async function BoardIdPage({ params }: BoardIdPageProps) {
  const { orgId } = await auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const { boardId } = await params;

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }

  const lists = await db.list.findMany({
    where: {
      boardId: boardId,
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div
      className="relative h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/10" />
      <main className="relative pt-18 h-full p-4 overflow-x-auto ">
        <ListContainer boardId={boardId} data={lists} />
      </main>
    </div>
  );
}
