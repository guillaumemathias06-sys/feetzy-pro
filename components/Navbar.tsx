"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navbar(){
  const p=usePathname();
  return (
    <header className="border-b border-slate-200">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold">Feetzy</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#concept" className="text-sm hover:text-primary">Concept</Link>
          <Link href="/experiences" className={"text-sm hover:text-primary "+(p.startsWith("/experiences")?"text-primary font-semibold":"text-slate-700")}>Expériences</Link>
          <Link href="/faq" className="text-sm hover:text-primary">FAQ</Link>
          <Link href="/pricing" className="text-sm hover:text-primary">Tarifs</Link>
          <Link href="/contact" className="text-sm hover:text-primary">Contact</Link>
        </nav>
        <div className="flex gap-2">
          <Link className="btn" href="/auth/sign-in">Se connecter</Link>
          <Link className="btn-primary" href="/auth/sign-up">Créer un compte</Link>
        </div>
      </div>
    </header>
  );
}
