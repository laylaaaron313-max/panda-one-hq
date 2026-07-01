import Shell from '@/components/Shell'
import { faqs } from '@/lib/data'

export default function FAQ() {
  return <Shell><header><p className="font-bold text-panda">Knowledge Base</p><h1 className="text-4xl font-black">FAQs</h1></header><input className="mt-8 w-full rounded-3xl border px-5 py-4" placeholder="Search questions..." /><section className="mt-6 grid gap-4">{faqs.map((f) => <article key={f.q} className="card rounded-[2rem] p-6"><h2 className="text-xl font-black">{f.q}</h2><p className="mt-2 text-black/60">{f.a}</p></article>)}</section></Shell>
}
