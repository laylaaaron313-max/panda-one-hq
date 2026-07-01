import Shell from '@/components/Shell'

export default function Profile() {
  return <Shell><header><p className="font-bold text-panda">My Profile</p><h1 className="text-4xl font-black">Agent Status</h1></header><section className="mt-8 grid gap-5 md:grid-cols-2"><div className="card rounded-[2rem] p-6"><h2 className="text-2xl font-black">Training Progress</h2><p className="mt-4 text-5xl font-black">39%</p></div><div className="card rounded-[2rem] p-6"><h2 className="text-2xl font-black">Next Step</h2><p className="mt-4 text-black/60">Complete all modules and pass all quizzes to receive your registration instructions.</p></div></section></Shell>
}
