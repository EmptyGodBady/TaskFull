// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/sign-in(.*)", "/sign-up(.*)"];
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId, redirectToSignIn } = await auth();

  const isPublic = isPublicRoute(req);

  if (userId && isPublic) {
    const baseUrl = req.nextUrl.origin;

    const redirectPath = orgId ? `/organization/${orgId}` : "/select-org";

    return NextResponse.redirect(new URL(redirectPath, baseUrl));
  }
  if (!userId && !isPublic) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
  if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection);
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
