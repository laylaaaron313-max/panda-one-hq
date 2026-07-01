import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Panda One Logistics" width={46} height={46} className="rounded-full bg-white" />
            <span className="font-black text-xl">Panda One HQ</span>
          </div>
          <Link href="/login" className="rounded-full bg-panda px-5 py-3 font-bold text-black">Agent Login</Link>
        </nav>
        <div className="grid min-h-[75vh] place-items-center py-20 text-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-panda/40 px-4 py-2 text-panda">Remote 1099 Agent Portal</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">Train. Apply. Grow.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Your Panda One home base for onboarding, job announcements, FAQs, resources, and support.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/login" className="rounded-full bg-panda px-7 py-4 font-black text-black">Enter Portal</Link>
              <Link href="/dashboard" className="rounded-full border border-white/20 px-7 py-4 font-black">View Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
