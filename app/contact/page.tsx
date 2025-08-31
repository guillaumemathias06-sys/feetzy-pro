export default function Page(){
  return (<section className="container py-10 max-w-lg">
    <h1 className="text-3xl font-extrabold mb-4">Contact</h1>
    <form action="/api/contact" method="post" className="card p-4 grid gap-3">
      <input name="name" placeholder="Nom" required/>
      <input name="email" type="email" placeholder="Email" required/>
      <textarea name="message" placeholder="Votre message" required className="min-h-[120px]"></textarea>
      <button className="btn-primary">Envoyer</button>
    </form>
  </section>);
}
