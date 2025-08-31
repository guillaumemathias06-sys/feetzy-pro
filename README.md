# Feetzy – Full Stack MVP (v1.1)

## Lancer en local
```bash
cp .env.example .env
npm i
npx prisma db push
npm run seed
npm run dev
```

Comptes seed :
- Admin: admin@feetzy.app / admin1234
- Partenaire: partner@feetzy.app / partner1234
- Client: client@feetzy.app / client1234

## Déploiement Vercel
- DB_PROVIDER=postgresql, DATABASE_URL, AUTH_SECRET, AUTH_URL
- RESEND_API_KEY, RESEND_FROM, FEETZY_ADMIN_EMAIL
- Cron hebdo → POST /api/cron/weekly

## Tarifs

### Clients
- **Solo**: 29€/mois → 1 expérience/semaine
- **Duo**: 49€/mois → 2 expériences/semaine
- **Illimité**: 89€/mois (selon dispo)
- Reset quotas le lundi, annulation gratuite jusqu’à 24h, premium avec complément éventuel.

### Partenaires
- **Starter**: 0€/mois + 10% (5 expériences actives, créneaux illimités, support email)
- **Pro**: 49€/mois + 5% (20 expériences, mise en avant locale, widgets, support prioritaire)
- **Entreprise**: sur devis (illimité, SSO/API/SLA, multi-établissements)
