import Shell from '@/components/Shell'
import { announcements } from '@/lib/data'

export default function Announcements() {
  return <Shell><header><p className="font-bold text-panda">Updates</p><h1 className="text-4xl font-black">Announcements</h1></header><section className="mt-8 grid gap-5">{announcements.map((a) => <article key={a.title} className="card rounded-[2rem] p-6"><span className="rounded-full bg-panda px-3 py-1 text-sm font-black">{a.priority}</span><h2 className="mt-4 text-2xl font-black">{a.title}</h2><p className="mt-2 text-black/60">{a.body}</p></article>)}</section></Shell>
}
