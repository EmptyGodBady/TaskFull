import Flex from "@/components/flex";
import TrelloLogo from "./trello2-logo.png";
import Image from "next/image";
import Stack from "@/components/stack";
import Text from "@/components/text";
import TButton from "@/components/tButton";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessKey = process.env.NEXT_PUBLIC_ACCESSKEY;

  if (!accessKey) {
    throw new Error("Missing Unsplash access key");
  }

  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=1&query=nature`
  );

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status}`);
  }

  const data = await response.json();
  if (!Array.isArray(data) || !data[0]?.urls) {
    console.error("Unexpected API response:", data);
    return null;
  }

  const bgImage = data[0].urls.full;
  return (
    <Stack
      className={`h-full ${bgImage ? `bg-cover bg-center` : ""}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <header className=" bg-neutral-100 flex justify-between py-1.5 px-3">
        <Flex className="cursor-pointer items-center gap-2 ">
          <Image
            src={TrelloLogo.src}
            alt="trello2-logo"
            width={30}
            height={60}
          />
          <Text className="font-bold bg-gradient-to-r from-indigo-500 to-blue-300 text-transparent bg-clip-text text-xl">
            Trello 2.0
          </Text>
        </Flex>
        <TButton>Log in</TButton>
      </header>
      <main className=" h-full flex justify-center items-center ">
        {children}
      </main>
      <footer className="bg-neutral-200 fixed bottom-0 flex justify-between py-1.5 px-3 border w-full">
        <Flex className=" items-center gap-2 ">
          <Image
            src={TrelloLogo.src}
            alt="trello2-logo"
            width={30}
            height={60}
          />
          <Text className="font-bold bg-gradient-to-r from-indigo-500 to-blue-300 text-transparent bg-clip-text text-xl">
            Trello 2.0
          </Text>
        </Flex>
      </footer>
    </Stack>
  );
}
