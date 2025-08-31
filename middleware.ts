import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const path=req.nextUrl.pathname;
  const role=(req.auth?.user as any)?.role as string|undefined;
  if(path.startsWith("/admin") && role!=="ADMIN") return NextResponse.redirect(new URL("/auth/sign-in?e=admin", req.url));
  if(path.startsWith("/partner") && role!=="PARTNER" && role!=="ADMIN") return NextResponse.redirect(new URL("/auth/sign-in?e=partner", req.url));
  if(path.startsWith("/dashboard") && !role) return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  return NextResponse.next();
});
export const config={ matcher:["/dashboard/:path*","/partner/:path*","/admin/:path*"] };
