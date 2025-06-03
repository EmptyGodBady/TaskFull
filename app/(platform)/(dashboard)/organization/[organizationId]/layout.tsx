import { auth } from "@clerk/nextjs/server";
import OrgControl from "./_components/org-control";
import { startCase } from "lodash";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ organizationId: string }>;
}): Promise<Metadata> {
  const { orgSlug } = await auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

export default async function OrganizationIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ organizationId: string }>;
}) {
  const { organizationId } = await params;

  return (
    <div className=" w-full">
      <OrgControl />
      {children}
    </div>
  );
}
