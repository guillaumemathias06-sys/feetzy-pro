import { NextResponse } from "next/server"; import { prisma } from "@/lib/prisma"; import { auth } from "@/lib/auth"; import { slugify } from "@/lib/utils";
export async function POST(req:Request){
  const session=await auth(); const user=session?.user as any; if(!user || (user.role!=="PARTNER" && user.role!=="ADMIN")) return NextResponse.json({error:"Unauthorized"},{status:401});
  const data=await req.formData(); const title=(data.get("title")||"").toString(); const slug=slugify(title);
  await prisma.experience.create({ data:{
    title, slug, short:(data.get("short")||"").toString(), description:(data.get("description")||"").toString(),
    category:(data.get("category")||"Autres").toString(), city:(data.get("city")||"").toString(), image:(data.get("image")||null)?.toString()||null,
    price:(data.get("price")||null)?.toString()||null, duration:(data.get("duration")||null)?.toString()||null, level:(data.get("level")||null)?.toString()||null,
    status:"DRAFT", ownerId:user.id
  }});
  return NextResponse.redirect(new URL("/partner", req.url));
}
