import { NextResponse } from "next/server"; import { prisma } from "@/lib/prisma"; import { auth } from "@/lib/auth";
export async function POST(req:Request){
  const session=await auth(); const user=session?.user as any; if(!user) return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  const data=await req.formData(); const experienceId=data.get("experienceId")!.toString(); const timeSlotId=data.get("timeSlotId")?.toString();
  if(timeSlotId){ const ts=await prisma.timeSlot.findUnique({ where:{ id:timeSlotId } }); if(!ts) return NextResponse.json({error:"Not found"},{status:404}); if(ts.booked>=ts.capacity) return NextResponse.json({error:"Full"},{status:400}); await prisma.timeSlot.update({ where:{ id:ts.id }, data:{ booked:{ increment:1 } } }); }
  await prisma.booking.create({ data:{ userId:user.id, experienceId, timeSlotId: timeSlotId||null } });
  return NextResponse.redirect(new URL("/dashboard", req.url));
}
