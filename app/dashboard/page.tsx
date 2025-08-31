import { auth } from "@/lib/auth"; import { prisma } from "@/lib/prisma"; import Link from "next/link";
export default async function Page(){
  const session=await auth(); const user=session?.user as any; const areaId=user?.areaId||null;
  const recs=await prisma.experience.findMany({ where:{ status:"PUBLISHED", areaId }, orderBy:{ createdAt:"desc" }, take:10, include:{ timeSlots:true } });
  return (<section className="container py-10">
    <h1 className="text-3xl font-extrabold mb-6">Mes suggestions de la semaine</h1>
    {recs.length===0? <p className="text-slate-600">Aucune suggestion (changez de zone bientôt).</p> :
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recs.map(e=> (
          <div key={e.id} className="card overflow-hidden">
            <img src={e.image||"/og.png"} className="w-full h-32 object-cover"/>
            <div className="p-4 space-y-2">
              <span className="badge">{e.category}</span>
              <h3 className="font-semibold">{e.title}</h3>
              <div className="text-sm text-slate-700">{e.city} • {e.price} • {e.duration}</div>
              <div className="flex gap-2">
                <form action="/api/choose" method="post"><input type="hidden" name="experienceId" value={e.id}/><button className="btn" type="submit">Valider</button></form>
                <Link className="btn-primary" href={`/experiences/${e.slug}`}>Réserver</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    }
  </section>);
}
