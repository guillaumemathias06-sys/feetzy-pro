"use server";
import { signIn as nextSignIn } from "@/lib/auth"; import { prisma } from "@/lib/prisma"; import bcrypt from "bcrypt"; import { redirect } from "next/navigation";
export async function signIn({email,password}:{email:string,password:string}){
  await nextSignIn("credentials",{ redirectTo:"/dashboard", email, password });
}
export async function signUp({email,password,name,areaSlug}:{email:string,password:string,name:string,areaSlug:string}){
  const area=await prisma.area.findUnique({ where:{ slug: areaSlug } });
  const hash=await bcrypt.hash(password,10);
  await prisma.user.create({ data:{ email:email.toLowerCase(), password:hash, name, areaId:area?.id } });
  redirect("/auth/sign-in");
}
