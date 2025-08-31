"use client";
import { signIn } from "@/_actions/auth"; import { useState } from "react";
export default function Page(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  return (<section className="container py-10 max-w-md">
    <h1 className="text-3xl font-extrabold mb-4">Se connecter</h1>
    <form onSubmit={(e)=>{e.preventDefault();signIn({email,password});}} className="grid gap-3">
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mot de passe" type="password" required/>
      <button className="btn-primary">Connexion</button>
    </form>
    <p className="text-sm text-slate-600 mt-3">Pas de compte ? <a className="underline" href="/auth/sign-up">Créer un compte</a></p>
  </section>);
}
