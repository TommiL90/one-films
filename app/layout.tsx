import './globals.css'

import type { Metadata } from 'next'

import { TailwindIndicator } from '@/components/indicator'
import { Footer } from '@/components/sections/footer'
import { SiteHeader } from '@/components/site-header'
import { fontBody, fontHeading } from '@/config/fonts'
import { cn } from '@/lib/utils'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={cn(
          'font-body min-h-screen bg-background antialiased',
          fontHeading.variable,
          fontBody.variable,
        )}
      >
        <Providers attribute="class" defaultTheme="dark">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
