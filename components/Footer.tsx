import Link from "next/link";
export function Footer(){
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="container py-8 text-sm text-slate-600 grid md:grid-cols-3 gap-4">
        <div>© {new Date().getFullYear()} Feetzy</div>
        <div className="flex gap-4">
          <Link href="/legal" className="underline">Mentions légales</Link>
          <Link href="/faq" className="underline">FAQ</Link>
          <Link href="/pricing" className="underline">Tarifs</Link>
          <Link href="/contact" className="underline">Contact</Link>
        </div>
        <div className="text-right"><a className="underline" href="mailto:hello@feetzy.app">hello@feetzy.app</a></div>
      </div>
    </footer>
  );
}
