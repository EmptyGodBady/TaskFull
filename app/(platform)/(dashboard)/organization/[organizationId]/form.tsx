"use client";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board/index";
import { FormInput } from "@/components/form/form-input";
import FormButton from "@/components/form/form-button";
export default function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "success");
    },
    onError: (error) => {
      console.log(error, "error");
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    console.log({ title });
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} id="title" label="Board Title" />
      </div>
      <FormButton>Create</FormButton>
    </form>
  );
}
