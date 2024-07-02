import './globals.css'

import type { Metadata } from 'next'

import { TailwindIndicator } from '@/components/indicator'
import { Footer } from '@/components/sections/footer'
import { SiteHeader } from '@/components/site-header'
import { fontBody, fontHeading } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    phoneNumbers: [siteConfig.contact.phone],
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/favicons/apple-touch-icon.png',
  },
  keywords: [
    'One Films Ubatuba',
    'Produções Audiovisuais',
    'Vídeos',
    'marketing',
    'marketing digital',
    'Ubatuba',
    'São Paulo',
  ],
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
          'min-h-screen bg-background font-body antialiased',
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
