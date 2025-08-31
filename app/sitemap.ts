import type { MetadataRoute } from "next"; import { prisma } from "@/lib/prisma";
export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  const base="https://feetzy.app"; const exps=await prisma.experience.findMany({ where:{ status:"PUBLISHED" } });
  return ["","/experiences","/faq","/contact","/pricing","/legal"].map(p=>({url:base+p,lastModified:new Date(),changeFrequency:"daily",priority:p===""?1:.7}))
    .concat(exps.map(e=>({url:`${base}/experiences/${e.slug}`,lastModified:e.createdAt,changeFrequency:"weekly",priority:.6})));
}
