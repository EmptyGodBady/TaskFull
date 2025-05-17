"use client";
import { Button } from "@/components/ui/button";
import { create, State } from "@/actions/create-board";
import { useActionState } from "react";

export default function Form() {
  const initialState: State = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useActionState(create, initialState);

  return (
    <form action={dispatch}>
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
