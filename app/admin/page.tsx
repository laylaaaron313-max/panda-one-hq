import Shell from '@/components/Shell'

const items = ['Users', 'Jobs', 'Academy', 'Quizzes', 'Announcements', 'FAQs', 'Support Tickets', 'Analytics']

export default function Admin() {
  return <Shell><header><p className="font-bold text-panda">Admin Preview</p><h1 className="text-4xl font-black">Manage Panda One HQ</h1><p className="mt-3 text-black/60">This page will become your editable admin panel connected to Supabase.</p></header><section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{items.map((item) => <article key={item} className="card rounded-[2rem] p-6"><h2 className="text-2xl font-black">{item}</h2><button className="mt-5 rounded-2xl bg-black px-4 py-3 font-black text-white">Manage</button></article>)}</section></Shell>
}
