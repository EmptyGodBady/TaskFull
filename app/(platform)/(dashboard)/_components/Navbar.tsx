import Flex from "@/components/flex";
import Image from "next/image";
import TrelloLogo from "@/components/trello2-logo.png";
import TButton from "@/components/tButton";
import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-Sidebar";
import Text from "@/components/text";

export default function Navbar() {
  return (
    <Flex className="justify-between p-2 w-full border-b shadow-sm">
      <Flex className="gap-x-4 ">
        <MobileSidebar />
        <Image
          className="hidden md:flex"
          src={TrelloLogo.src}
          alt="trello2-logo"
          width={30}
          height={60}
        />
        <Text className="pt-1 font-bold bg-gradient-to-r from-indigo-500 to-blue-300 text-transparent bg-clip-text text-xl hidden md:block">
          Trello 2.0
        </Text>
        <TButton className="hidden md:block">Create</TButton>
        <TButton className="block md:hidden ml-0">
          <Plus />
        </TButton>
      </Flex>
      <Flex className="gap-x-4">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </Flex>
    </Flex>
  );
}
