import { NextResponse } from "next/server"; import { prisma } from "@/lib/prisma"; import { auth } from "@/lib/auth";
export async function POST(req:Request){
  const s=await auth(); const u=s?.user as any; if(!u || u.role!=="ADMIN") return NextResponse.json({error:"Unauthorized"},{status:401});
  const d=await req.formData(); const id=d.get("id")!.toString(); const areaSlug=d.get("areaSlug")!.toString(); const area=await prisma.area.findUnique({ where:{ slug:areaSlug } });
  await prisma.experience.update({ where:{ id }, data:{ status:"PUBLISHED", areaId: area?.id } });
  return NextResponse.redirect(new URL("/admin", req.url));
}
