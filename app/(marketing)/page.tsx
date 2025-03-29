import Stack from "@/components/stack";
import TButton from "@/components/tButton";
import Text from "@/components/text";

export default async function MarketingPage() {
  if (typeof window !== "undefined") return null;

  return (
    <Stack className="w-160 px-3 items-center bg-(--base-bg-color) ">
      <Text className="font-bold text-[60px] z-10">
        Try{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-blue-300 text-transparent bg-clip-text">
          Trello 2.0
        </span>{" "}
        for <span className="text-green-500">free</span>
      </Text>
      <Text className="text-center mt-4">
        Welcome to Trello 2.0, the ultimate project management tool designed to
        streamline your workflow and boost team collaboration. With an intuitive
        interface, enhanced automation, and powerful integrations, Trello 2.0
        helps you stay organized, meet deadlines, and achieve your goals
        effortlessly.
      </Text>
      <TButton className="mt-8">Get Started</TButton>
    </Stack>
  );
}
