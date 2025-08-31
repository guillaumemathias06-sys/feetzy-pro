import Link from "next/link";

export default function Home(){
  return (<>
    <section className="container py-12 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <span className="badge">Nouveau • Nice</span>
        <h1 className="text-4xl md:text-5xl font-extrabold">Feetzy – Le meilleur du sport près de chez vous</h1>
        <p className="text-lg text-slate-700">Chaque semaine, recevez une sélection d'expériences sportives locales et réservez en 2 clics.</p>
        <div className="flex gap-3">
          <Link href="/auth/sign-up" className="btn-primary">Créer un compte</Link>
          <Link href="/experiences" className="btn">Voir le catalogue</Link>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-6 text-sm">
          <div className="card p-4"><div className="font-semibold mb-1">Proximité</div><div className="text-slate-600">D’abord Nice, puis 06, Sud, France.</div></div>
          <div className="card p-4"><div className="font-semibold mb-1">Simplicité</div><div className="text-slate-600">Choix, validation, réservation.</div></div>
          <div className="card p-4"><div className="font-semibold mb-1">Partenaires</div><div className="text-slate-600">Clubs & organisateurs vérifiés.</div></div>
        </div>
      </div>
      <div className="card p-6">
        <h3 className="font-bold text-xl mb-3">Comment ça marche ?</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700">
          <li>Créez votre compte client et choisissez votre zone (Nice).</li>
          <li>Chaque semaine, recevez des expériences triées pour vous.</li>
          <li>Validez celles qui vous plaisent et réservez.</li>
        </ol>
        <div className="mt-4"><Link href="/auth/sign-up" className="btn-primary">Je m’inscris</Link></div>
      </div>
    </section>

    <section id="concept" className="container py-12 prose max-w-none">
      <h2>Pour les clients</h2><p>Abonnements: Solo 29€, Duo 49€, Illimité 89€. Suggestions hebdo par zone, réservation en 2 clics.</p>
      <h2>Pour les partenaires</h2><p>Créez vos expériences, ajoutez des créneaux, publiez par zone. Plans Starter/Pro/Entreprise.</p>
      <h2>Pour l’admin</h2><p>Validation, gestion des zones et supervision utilisateurs.</p>
    </section>

    <section className="container py-12" id="tarifs">
      <h2 className="text-2xl font-extrabold mb-4">Tarifs</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-6">
          <h3 className="font-bold text-xl mb-2">Clients</h3>
          <ul className="text-slate-700 space-y-1 text-sm">
            <li>• Solo: 29€/mois → 1 expérience/semaine</li>
            <li>• Duo: 49€/mois → 2 expériences/semaine</li>
            <li>• Illimité: 89€/mois</li>
          </ul>
          <a href="/pricing#clients" className="btn mt-4">Détails</a>
        </div>
        <div className="card p-6">
          <h3 className="font-bold text-xl mb-2">Partenaires</h3>
          <ul className="text-slate-700 space-y-1 text-sm">
            <li>• Starter: 0€/mois + 10%</li>
            <li>• Pro: 49€/mois + 5%</li>
            <li>• Entreprise: sur devis</li>
          </ul>
          <a href="/pricing#partenaires" className="btn mt-4">Détails</a>
        </div>
      </div>
    </section>

    <section className="container py-12 text-center">
      <div className="card p-8">
        <h3 className="font-bold text-2xl mb-3">Devenir partenaire</h3>
        <p className="text-slate-700 mb-4">Publiez vos stages, tournois, teambuildings et remplissez plus facilement.</p>
        <Link href="/partner" className="btn-accent">Ouvrir un compte partenaire</Link>
      </div>
    </section>
  </>);
}
