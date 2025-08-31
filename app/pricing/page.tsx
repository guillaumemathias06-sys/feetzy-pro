export default function Page(){
  return (<section className="container py-10">
    <h1 className="text-3xl font-extrabold mb-2">Tarifs Feetzy</h1>
    <p className="text-slate-600 mb-6">Des formules simples pour les clients et des offres flexibles pour les partenaires.</p>
    <div className="grid md:grid-cols-2 gap-6">
      <div id="clients" className="card p-6">
        <h2 className="font-bold text-xl mb-4">Abonnements Clients</h2>
        <div className="grid gap-3">
          <div className="card p-4"><div className="font-semibold">Solo</div><div className="text-3xl font-extrabold mt-1">29€<span className="text-base font-medium">/mois</span></div><div className="text-sm text-slate-700 mt-1">1 expérience / semaine</div></div>
          <div className="card p-4"><div className="font-semibold">Duo</div><div className="text-3xl font-extrabold mt-1">49€<span className="text-base font-medium">/mois</span></div><div className="text-sm text-slate-700 mt-1">2 expériences / semaine</div></div>
          <div className="card p-4"><div className="font-semibold">Illimité</div><div className="text-3xl font-extrabold mt-1">89€<span className="text-base font-medium">/mois</span></div><div className="text-sm text-slate-700 mt-1">Accès illimité (selon disponibilités)</div></div>
        </div>
        <ul className="text-sm text-slate-700 space-y-1 mt-4">
          <li>• Zone: au lancement, Nice (puis 06 → Région Sud → France)</li>
          <li>• Quotas remis à zéro chaque lundi</li>
          <li>• Annulation gratuite jusqu’à 24h (sinon consommée)</li>
          <li>• Expériences “premium” : complément éventuel affiché</li>
        </ul>
      </div>
      <div id="partenaires" className="card p-6">
        <h2 className="font-bold text-xl mb-4">Abonnements Partenaires</h2>
        <div className="grid gap-3">
          <div className="card p-4"><div className="font-semibold">Starter</div><div className="text-3xl font-extrabold mt-1">0€<span className="text-base font-medium">/mois</span></div><div className="text-sm text-slate-700 mt-1">+ 10% par réservation</div><ul className="text-xs text-slate-600 mt-2 space-y-1"><li>• 5 expériences actives max</li><li>• Créneaux illimités</li><li>• Support email</li></ul></div>
          <div className="card p-4"><div className="font-semibold">Pro</div><div className="text-3xl font-extrabold mt-1">49€<span className="text-base font-medium">/mois</span></div><div className="text-sm text-slate-700 mt-1">+ 5% par réservation</div><ul className="text-xs text-slate-600 mt-2 space-y-1"><li>• 20 expériences actives</li><li>• Mise en avant locale (Nice/06)</li><li>• Widgets d’intégration *</li><li>• Support prioritaire</li></ul></div>
          <div className="card p-4"><div className="font-semibold">Entreprise</div><div className="text-3xl font-extrabold mt-1">Sur devis</div><div className="text-sm text-slate-700 mt-1">Commission personnalisée</div><ul className="text-xs text-slate-600 mt-2 space-y-1"><li>• Expériences illimitées</li><li>• Mise en avant régionale/nationale</li><li>• SSO / API / SLA</li><li>• Multi-établissements</li></ul></div>
        </div>
        <div className="text-sm text-slate-700 mt-4">Exemple : 25€ → Starter = 2,50€ ; Pro = 1,25€ (+ 49€). Frais Stripe/banque en sus.</div>
        <div className="text-xs text-slate-500 mt-2">* Widgets/API déployés progressivement.</div>
      </div>
    </div>
  </section>);
}
