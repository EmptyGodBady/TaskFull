import { CSSProperties, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export default function Stack({ children, className, style }: Props) {
  return (
    <div className={`flex flex-col ${className || ""}`} style={style}>
      {children}
    </div>
  );
}
