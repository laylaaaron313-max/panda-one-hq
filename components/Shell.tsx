import Image from 'next/image'
import Link from 'next/link'
import { LayoutDashboard, GraduationCap, Briefcase, Megaphone, HelpCircle, Ticket, User, Shield } from 'lucide-react'

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/academy', label: 'Academy', icon: GraduationCap },
  { href: '/opportunities', label: 'Opportunities', icon: Briefcase },
  { href: '/announcements', label: 'Announcements', icon: Megaphone },
  { href: '/faq', label: 'FAQs', icon: HelpCircle },
  { href: '/support', label: 'Support', icon: Ticket },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/admin', label: 'Admin', icon: Shield }
]

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen lg:flex">
      <aside className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 bg-black text-white p-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Panda One Logistics" width={48} height={48} className="rounded-full bg-white" />
          <div>
            <p className="font-black text-xl">Panda One HQ</p>
            <p className="text-white/60 text-sm">Agent Portal</p>
          </div>
        </div>
        <nav className="mt-8 grid gap-2">
          {links.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white">
                <Icon size={18} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>
      <section className="lg:ml-72 w-full p-5 md:p-10">
        {children}
      </section>
    </main>
  )
}
