import Shell from '@/components/Shell'
import { modules } from '@/lib/data'

export default function Academy() {
  return (
    <Shell>
      <header><p className="font-bold text-panda">Panda One Academy</p><h1 className="text-4xl font-black">Training Modules</h1></header>
      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((m, i) => (
          <article key={m.title} className="card rounded-[2rem] p-6">
            <p className="text-sm font-bold text-black/50">Module {i + 1}</p>
            <h2 className="mt-2 text-2xl font-black">{m.title}</h2>
            <div className="mt-5 aspect-video rounded-3xl bg-black grid place-items-center text-white">Training Video</div>
            <div className="mt-5 h-2 rounded-full bg-black/10"><div className="h-2 rounded-full bg-panda" style={{ width: `${m.progress}%` }} /></div>
            <button className="mt-5 w-full rounded-2xl bg-black px-4 py-3 font-black text-white">{m.status === 'Locked' ? 'Locked' : 'Open Module'}</button>
          </article>
        ))}
      </section>
    </Shell>
  )
}
