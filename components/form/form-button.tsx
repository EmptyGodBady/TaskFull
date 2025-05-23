"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
interface FormButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}
export default function FormButton({
  children,
  className,
  variant,
  disabled,
}: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending || disabled}
      className={cn(className)}
      type="submit"
      variant={variant}
      size="sm"
    >
      {children}
    </Button>
  );
}
