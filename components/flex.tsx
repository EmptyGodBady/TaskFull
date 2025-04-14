import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
type Props = PropsWithChildren<{
  className?: string;
}> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default function Flex({ children, className, ...rest }: Props) {
  return (
    <div className={`flex ${className}`} {...rest}>
      {children}
    </div>
  );
}
