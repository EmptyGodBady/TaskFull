"use client";

import { useAuth, UserButton, useUser } from "@clerk/nextjs";

export default function ProtectedPage() {
  const { userId } = useAuth();
  const { user } = useUser();
  return (
    <div>
      User: {user?.firstName}
      UserId: {userId}
      <UserButton></UserButton>
    </div>
  );
}
