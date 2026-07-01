import Link from 'next/link'
import Image from 'next/image'

export default function Login() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <section className="card w-full max-w-md rounded-[2rem] p-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Panda One Logistics" width={52} height={52} className="rounded-full" />
          <div>
            <h1 className="font-black text-2xl">Agent Login</h1>
            <p className="text-sm text-black/60">Panda One HQ</p>
          </div>
        </div>
        <form className="mt-8 grid gap-4">
          <input className="rounded-2xl border px-4 py-4" placeholder="Email address" type="email" />
          <input className="rounded-2xl border px-4 py-4" placeholder="Password" type="password" />
          <Link href="/dashboard" className="rounded-2xl bg-panda px-4 py-4 text-center font-black text-black">Login</Link>
        </form>
        <p className="mt-5 text-sm text-black/60">Supabase login will connect here in the production build.</p>
      </section>
    </main>
  )
}
