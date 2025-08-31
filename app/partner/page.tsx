import { prisma } from "@/lib/prisma"; import { auth } from "@/lib/auth";
export default async function Page(){
  const session=await auth(); const user=session?.user as any;
  const my=await prisma.experience.findMany({ where:{ ownerId:user.id }, include:{ timeSlots:true } });
  return (<section className="container py-10">
    <h1 className="text-3xl font-extrabold mb-2">Espace partenaire</h1>
    <p className="text-slate-600 mb-6 text-sm">Modèle tarifaire: Starter 0€/mois + 10% • Pro 49€/mois + 5% • Entreprise sur devis (<a className="underline" href="/pricing#partenaires">détails</a>).</p>
    <form action="/api/experiences" method="post" className="card p-4 grid md:grid-cols-2 gap-3 mb-8">
      <input name="title" placeholder="Titre" required/>
      <input name="category" placeholder="Catégorie (Padel, Tennis…)" required/>
      <input name="city" placeholder="Ville" required/>
      <input name="price" placeholder="Prix (ex: 25€)" />
      <input name="duration" placeholder="Durée (ex: 1h30)" />
      <input name="level" placeholder="Niveau (Tous niveaux…)" />
      <input name="image" placeholder="Image URL" />
      <textarea name="short" placeholder="Pitch court" className="md:col-span-2" required></textarea>
      <textarea name="description" placeholder="Description complète" className="md:col-span-2" required></textarea>
      <button className="btn-primary md:col-span-2" type="submit">Créer l’expérience</button>
    </form>
    <h2 className="text-xl font-bold mb-3">Mes expériences</h2>
    <div className="grid gap-4">
      {my.map(e=> (
        <div key={e.id} className="card p-4">
          <div className="font-semibold">{e.title} <span className="badge ml-2">{e.category}</span></div>
          <div className="text-sm text-slate-600 mb-2">{e.city} • {e.price} • {e.duration}</div>
          <form action="/api/timeslots" method="post" className="grid sm:grid-cols-5 gap-2">
            <input type="hidden" name="experienceId" value={e.id}/>
            <input name="date" type="date" required/>
            <input name="start" type="time" required/>
            <input name="end" type="time" required/>
            <input name="capacity" type="number" placeholder="Capacité" defaultValue={8} required/>
            <button className="btn-primary">Ajouter créneau</button>
          </form>
          <ul className="mt-3 text-sm">
            {e.timeSlots.map(ts => <li key={ts.id}>{new Date(ts.start).toLocaleString("fr-FR")} → {new Date(ts.end).toLocaleTimeString("fr-FR")} • {ts.booked}/{ts.capacity}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>);
}
