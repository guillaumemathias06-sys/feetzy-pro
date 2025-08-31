import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Feetzy – Réservez des expériences sportives proches de chez vous",
  description: "Abos clients (29/49/89) et solutions partenaires, d'abord à Nice puis 06 → Région Sud → France."
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (<html lang="fr"><body><Navbar/><main className="min-h-[70vh]">{children}</main><Footer/></body></html>);
}
