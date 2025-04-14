import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
  className?: string;
  fz?: number;
}>;
export default function Text({ children, className }: Props) {
  return <p className={` ${className}`}>{children}</p>;
}
