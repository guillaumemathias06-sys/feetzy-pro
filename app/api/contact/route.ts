import { NextResponse } from "next/server"; import { Resend } from "resend";
const resend=new Resend(process.env.RESEND_API_KEY);
export async function POST(req:Request){
  const data=await req.formData();
  const name=(data.get("name")||"").toString(); const email=(data.get("email")||"").toString(); const message=(data.get("message")||"").toString();
  const html=`<p><strong>${name}</strong> (${email})</p><p>${message.replace(/\n/g,"<br/>")}</p>`;
  const to=process.env.FEETZY_ADMIN_EMAIL!; if(!to) return NextResponse.json({ok:false,error:"Missing FEETZY_ADMIN_EMAIL"},{status:500});
  if(process.env.RESEND_API_KEY){ await resend.emails.send({from:process.env.RESEND_FROM||"Feetzy <noreply@feetzy.app>",to,subject:"Contact Feetzy",html}); }
  return NextResponse.redirect(new URL("/contact", req.url));
}
