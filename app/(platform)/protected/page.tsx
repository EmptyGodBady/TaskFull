import { auth, currentUser } from "@clerk/nextjs/server";

export default async function ProtectedPage() {
  const user = await currentUser();
  const { userId } = await auth();

  return (
    <div>
      User: {user?.firstName}
      UserId: {userId}
    </div>
  );
}
