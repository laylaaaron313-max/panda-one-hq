import Shell from '@/components/Shell'
import { announcements, jobs, modules } from '@/lib/data'

export default function Dashboard() {
  return (
    <Shell>
      <div className="flex flex-col gap-8">
        <header className="rounded-[2rem] bg-black p-8 text-white">
          <p className="text-panda font-bold">Welcome back</p>
          <h1 className="mt-2 text-4xl font-black">Continue your Panda One journey</h1>
          <p className="mt-3 max-w-2xl text-white/70">Complete training, check job announcements, and get help from the Panda One team.</p>
        </header>
        <section className="grid gap-5 md:grid-cols-3">
          <div className="card rounded-[2rem] p-6"><p className="text-sm text-black/60">Academy Progress</p><h2 className="text-4xl font-black">39%</h2></div>
          <div className="card rounded-[2rem] p-6"><p className="text-sm text-black/60">Open Opportunities</p><h2 className="text-4xl font-black">2</h2></div>
          <div className="card rounded-[2rem] p-6"><p className="text-sm text-black/60">Status</p><h2 className="text-4xl font-black">Training</h2></div>
        </section>
        <section className="grid gap-5 lg:grid-cols-2">
          <div className="card rounded-[2rem] p-6">
            <h2 className="text-2xl font-black">Academy</h2>
            <div className="mt-5 grid gap-4">
              {modules.slice(0, 3).map((m) => <div key={m.title} className="rounded-2xl border p-4"><div className="flex justify-between"><b>{m.title}</b><span>{m.status}</span></div><div className="mt-3 h-2 rounded-full bg-black/10"><div className="h-2 rounded-full bg-panda" style={{ width: `${m.progress}%` }} /></div></div>)}
            </div>
          </div>
          <div className="card rounded-[2rem] p-6">
            <h2 className="text-2xl font-black">Latest Updates</h2>
            <div className="mt-5 grid gap-4">
              {announcements.map((a) => <div key={a.title} className="rounded-2xl border p-4"><b>{a.title}</b><p className="mt-1 text-sm text-black/60">{a.body}</p></div>)}
            </div>
          </div>
        </section>
        <section className="card rounded-[2rem] p-6">
          <h2 className="text-2xl font-black">Featured Opportunities</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {jobs.map((j) => <div key={j.title} className="rounded-2xl border p-4"><b>{j.title}</b><p className="mt-1 text-sm text-black/60">{j.client}</p><p className="mt-3 font-black">{j.pay}</p></div>)}
          </div>
        </section>
      </div>
    </Shell>
  )
}
