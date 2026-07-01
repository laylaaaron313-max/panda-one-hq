import Shell from '@/components/Shell'
import { jobs } from '@/lib/data'

export default function Opportunities() {
  return (
    <Shell>
      <header><p className="font-bold text-panda">Job Board</p><h1 className="text-4xl font-black">Available Opportunities</h1><p className="mt-3 text-black/60">Opportunities vary by pay, length, training date, and benefits.</p></header>
      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((j) => (
          <article key={j.title} className="card rounded-[2rem] p-6">
            <div className="flex justify-between gap-3"><h2 className="text-2xl font-black">{j.title}</h2><span className="h-fit rounded-full bg-panda px-3 py-1 text-sm font-black">{j.status}</span></div>
            <p className="mt-2 text-black/60">{j.client}</p>
            <p className="mt-5 text-3xl font-black">{j.pay}</p>
            <p className="mt-2">Daily Pay: <b>{j.dailyPay ? 'Available' : 'Varies'}</b></p>
            <p className="mt-2">Training: <b>{j.training}</b></p>
            <button className="mt-6 w-full rounded-2xl bg-black px-4 py-3 font-black text-white">View Details</button>
          </article>
        ))}
      </section>
    </Shell>
  )
}
