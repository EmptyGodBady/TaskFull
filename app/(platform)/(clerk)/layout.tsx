import Flex from "@/components/flex";

export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Flex className="h-full justify-center items-center">{children}</Flex>;
}
