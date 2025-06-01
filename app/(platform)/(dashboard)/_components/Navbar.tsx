import Flex from "@/components/flex";
import Image from "next/image";
import TrelloLogo from "@/components/trello2-logo.png";
import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-Sidebar";
import Text from "@/components/text";
import FormPopover from "@/components/form/form-popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex className="justify-between  p-2 w-full border-b shadow-sm h-14">
      <Flex className="gap-x-4 ">
        <MobileSidebar />
        <Link href="/">
          <Image
            className="hidden md:flex"
            src={TrelloLogo.src}
            alt="trello2-logo"
            width={30}
            height={60}
          />
        </Link>
        <Link href="/">
          <Text className="pt-1 font-bold bg-gradient-to-r from-indigo-500 to-blue-300 text-transparent bg-clip-text text-xl hidden md:block">
            Trello 2.0
          </Text>
        </Link>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button className="hidden md:block">Create</Button>
        </FormPopover>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button className="block md:hidden ml-0">
            <Plus />
          </Button>
        </FormPopover>
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
