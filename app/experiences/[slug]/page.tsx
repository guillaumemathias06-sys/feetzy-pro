import { prisma } from "@/lib/prisma"; import { notFound } from "next/navigation"; import Link from "next/link";
export default async function Page({ params }:{ params:{ slug:string } }){
  const exp=await prisma.experience.findUnique({ where:{ slug: params.slug }, include:{ timeSlots:true } });
  if(!exp || exp.status==="ARCHIVED") notFound();
  return (<section className="container py-10">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card overflow-hidden"><img src={exp.image||"/og.png"} alt={exp.title} className="w-full h-72 object-cover"/></div>
      <div className="space-y-4">
        <span className="badge">{exp.category}</span>
        <h1 className="text-3xl font-extrabold">{exp.title}</h1>
        <p className="text-slate-700">{exp.short}</p>
        <div className="card p-4">
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
            <li><strong>Ville:</strong> {exp.city}</li>
            <li><strong>Durée:</strong> {exp.duration}</li>
            <li><strong>Prix:</strong> {exp.price}</li>
            <li><strong>Niveau:</strong> {exp.level||"Tous niveaux"}</li>
          </ul>
        </div>
        <div className="prose max-w-none"><h3>À propos</h3><p>{exp.description}</p></div>
        <div className="text-xs text-slate-500">Tarification : certains événements premium peuvent comporter un complément affiché avant validation.</div>
        <div className="card p-4 space-y-3">
          <h3 className="font-semibold">Créneaux disponibles</h3>
          {exp.timeSlots.length===0? <div className="text-slate-600 text-sm">Pas de créneau pour le moment.</div> :
            exp.timeSlots.map(ts=>(
              <form action={`/api/bookings`} method="post" key={ts.id} className="flex items-center justify-between">
                <input type="hidden" name="experienceId" value={exp.id}/>
                <input type="hidden" name="timeSlotId" value={ts.id}/>
                <div className="text-sm">{new Date(ts.start).toLocaleString("fr-FR")} → {new Date(ts.end).toLocaleTimeString("fr-FR")} • {ts.booked}/{ts.capacity}</div>
                <button className="btn-primary" type="submit">Réserver</button>
              </form>
            ))
          }
        </div>
        <Link href="/experiences" className="underline text-slate-700">← Retour</Link>
      </div>
    </div>
  </section>);
}
