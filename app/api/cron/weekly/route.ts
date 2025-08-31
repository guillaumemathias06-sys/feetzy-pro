import { NextResponse } from "next/server"; import { prisma } from "@/lib/prisma"; import { Resend } from "resend";
export async function POST(){
  const resend=new Resend(process.env.RESEND_API_KEY);
  const users=await prisma.user.findMany({ where:{ role:"CLIENT" }, include:{ area:true } });
  for(const u of users){
    const exps=await prisma.experience.findMany({ where:{ status:"PUBLISHED", areaId:u.areaId }, take:6 });
    if(!exps.length) continue;
    const html = `<h2>Vos expériences de la semaine</h2>` + exps.map(e=>`<p><strong>${e.title}</strong> – ${e.city} – ${e.price}</p>`).join("");
    if(process.env.RESEND_API_KEY){ await resend.emails.send({ from:process.env.RESEND_FROM||"Feetzy <noreply@feetzy.app>", to:u.email, subject:"Feetzy – Sélection de la semaine", html }); }
  }
  return NextResponse.json({ ok:true });
}
