"use client";
import Flex from "@/components/flex";
import TrelloLogo from "@/components/trello2-logo.png";
import Image from "next/image";
import Stack from "@/components/stack";
import Text from "@/components/text";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessKey = process.env.NEXT_PUBLIC_ACCESSKEY;
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!accessKey) {
      console.error("Missing Unsplash access key");
      return;
    }

    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${accessKey}&color=green&count=1&query=nature&orientation=landscape&content_filter=high`
        );

        if (!response.ok) {
          throw new Error(`Unsplash API error: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data) && data[0]?.urls) {
          setBgImage(data[0].urls.full);
          setIsLoaded(true);
        } else {
          console.error("Unexpected API response:", data);
        }
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    };

    fetchImage();
  }, [accessKey]);
  if (!bgImage) return null;
  return (
    <Stack
      className={`h-full ${bgImage ? `bg-cover bg-center` : ""}`}
      style={{ backgroundImage: isLoaded ? `url(${bgImage})` : undefined }}
    >
      <header className=" bg-neutral-100 flex justify-between py-1.5 px-3 border-b">
        <Flex className="cursor-pointer items-center gap-2 ">
          <Image
            src={TrelloLogo.src}
            alt="trello2-logo"
            width={30}
            height={60}
          />
          <Text className="font-bold bg-gradient-to-r from-indigo-500 to-blue-300 text-transparent bg-clip-text text-xl">
            TaskFull
          </Text>
        </Flex>
        <Link href="/sign-in">
          <Button className="pt-1 text-xl ">Log in</Button>
        </Link>
      </header>
      <main className=" h-full flex justify-center items-center ">
        {children}
      </main>
      <footer className=" fixed bottom-0 flex justify-between py-1.5 px-3 w-full">
        <Flex className=" items-center gap-2 ">
          <Image
            src={TrelloLogo.src}
            alt="trello2-logo"
            width={20}
            height={40}
          />
          <Text className="font-bold bg-gradient-to-r from-indigo-500 to-blue-300 text-transparent bg-clip-text text-md">
            TaskFull
          </Text>
        </Flex>
      </footer>
    </Stack>
  );
}
