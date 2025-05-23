import { deleteBoard } from "@/actions/delete-board";
import FormDelete from "./form-delete";
interface BoardProps {
  title: string;
  id: string;
}

export default function Board({ title, id }: BoardProps) {
  const deleteBoardWith = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWith} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
}
