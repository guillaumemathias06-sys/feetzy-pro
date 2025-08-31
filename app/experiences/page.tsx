import Link from "next/link"; import { prisma } from "@/lib/prisma";
export default async function Page(){
  const exps=await prisma.experience.findMany({ where:{ status:"PUBLISHED" }, orderBy:{ createdAt:"desc" } });
  return (<section className="container py-10">
    <h1 className="text-3xl font-extrabold mb-6">Toutes les expériences</h1>
    {exps.length===0? <p className="text-slate-600">Aucune expérience publiée.</p>:
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exps.map(e=>(
          <Link key={e.id} href={`/experiences/${e.slug}`} className="card overflow-hidden hover:shadow-md">
            <img src={e.image||"/og.png"} alt={e.title} className="w-full h-40 object-cover"/>
            <div className="p-4 space-y-1">
              <span className="badge">{e.category}</span>
              <h3 className="font-semibold">{e.title}</h3>
              <div className="text-sm text-slate-700">{e.city} • {e.price} • {e.duration}</div>
            </div>
          </Link>
        ))}
      </div>}
  </section>);
}
