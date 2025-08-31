"use client";
import { useState } from "react"; import { signUp } from "@/_actions/auth";
export default function Page(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [name,setName]=useState(""); const [area,setArea]=useState("nice");
  return (<section className="container py-10 max-w-md">
    <h1 className="text-3xl font-extrabold mb-4">Créer un compte</h1>
    <form onSubmit={(e)=>{e.preventDefault();signUp({email,password,name,areaSlug:area});}} className="grid gap-3">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nom" required/>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mot de passe" type="password" required/>
      <label>Zone</label>
      <select value={area} onChange={e=>setArea(e.target.value)}>
        <option value="nice">Nice</option><option value="alpes-maritimes">Alpes-Maritimes</option><option value="provence-alpes-cote-d-azur">Région Sud</option><option value="france">France</option>
      </select>
      <button className="btn-primary">Créer mon compte</button>
    </form>
    <p className="text-sm text-slate-600 mt-3">Déjà inscrit ? <a className="underline" href="/auth/sign-in">Se connecter</a></p>
  </section>);
}
