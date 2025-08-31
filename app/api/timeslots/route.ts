import { NextResponse } from "next/server"; import { prisma } from "@/lib/prisma"; import { auth } from "@/lib/auth";
export async function POST(req:Request){
  const session=await auth(); const user=session?.user as any;
  if(!user || (user.role!=="PARTNER" && user.role!=="ADMIN")) return NextResponse.json({error:"Unauthorized"},{status:401});
  const d=await req.formData();
  const id=d.get("experienceId")!.toString(); const date=d.get("date")!.toString(); const start=d.get("start")!.toString(); const end=d.get("end")!.toString();
  const capacity=parseInt((d.get("capacity")||"8").toString(),10);
  await prisma.timeSlot.create({ data:{ experienceId:id, start:new Date(`${date}T${start}:00`), end:new Date(`${date}T${end}:00`), capacity } });
  return NextResponse.redirect(new URL("/partner", req.url));
}
