import { NextResponse } from "next/server"; import { prisma } from "@/lib/prisma"; import { auth } from "@/lib/auth";
export async function POST(req:Request){
  const s=await auth(); const u=s?.user as any; if(!u || u.role!=="ADMIN") return NextResponse.json({error:"Unauthorized"},{status:401});
  const d=await req.formData(); const id=d.get("id")!.toString(); await prisma.experience.update({ where:{ id }, data:{ status:"ARCHIVED" } });
  return NextResponse.redirect(new URL("/admin", req.url));
}
