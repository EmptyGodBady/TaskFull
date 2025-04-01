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
      className={`bg-gradient-to-r from-indigo-500 to-blue-300 text-white px-4 py-2 rounded hover:cursor-pointer ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}
