import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panda One HQ',
  description: 'Agent portal for Panda One Logistics'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
