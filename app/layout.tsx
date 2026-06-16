import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteNav } from '@/components/site-nav'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Pradyut Nair',
  description: 'AI Engineer & researcher — projects, writing, and reflections on agents, NLP, and vision-language models.',
  icons: {
    icon: '/prad-icon.ico',
    apple: '/prad-icon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
