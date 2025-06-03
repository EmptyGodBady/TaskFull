import { ReactNode } from "react";

interface BoardLayoutProps {
  children: ReactNode;
}

export default function BoardIdLayout({ children }: BoardLayoutProps) {
  return <>{children}</>;
}
