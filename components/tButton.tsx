"use client";

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export default function TButton({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}
