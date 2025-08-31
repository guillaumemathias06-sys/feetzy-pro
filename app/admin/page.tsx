import { prisma } from "@/lib/prisma";
export default async function Page(){
  const pending=await prisma.experience.findMany({ where:{ status:"DRAFT" }, include:{ owner:true } });
  const published=await prisma.experience.findMany({ where:{ status:"PUBLISHED" }, include:{ owner:true }, orderBy:{ createdAt:"desc" } });
  return (<section className="container py-10">
    <h1 className="text-3xl font-extrabold mb-6">Admin</h1>
    <h2 className="text-xl font-bold mb-2">En attente</h2>
    <div className="grid gap-3 mb-8">
      {pending.length===0? <p className="text-slate-600">Rien à valider.</p> :
        pending.map(e=> (
          <form key={e.id} action="/api/admin/publish" method="post" className="card p-4 grid md:grid-cols-6 gap-2">
            <input type="hidden" name="id" value={e.id}/>
            <div className="md:col-span-2"><div className="font-semibold">{e.title}</div><div className="text-sm">{e.category} • {e.city}</div></div>
            <div className="md:col-span-2 text-sm text-slate-600">{e.short}</div>
            <select name="areaSlug" className="md:col-span-1">
              <option value="nice">Nice</option><option value="alpes-maritimes">Alpes-Maritimes</option><option value="provence-alpes-cote-d-azur">Région Sud</option><option value="france">France</option>
            </select>
            <button className="btn-primary">Publier</button>
          </form>
        ))
      }
    </div>
    <h2 className="text-xl font-bold mb-2">Publié</h2>
    <div className="grid gap-3">
      {published.map(e=> (
        <div key={e.id} className="card p-4 grid md:grid-cols-6 gap-2">
          <div className="md:col-span-2"><div className="font-semibold">{e.title}</div><div className="text-sm">{e.category} • {e.city}</div></div>
          <div className="md:col-span-2 text-sm text-slate-600">{e.short}</div>
          <div className="text-sm">Par: {e.owner?.email}</div>
          <form action="/api/admin/archive" method="post"><input type="hidden" name="id" value={e.id}/><button className="btn">Archiver</button></form>
        </div>
      ))}
    </div>
  </section>);
}
