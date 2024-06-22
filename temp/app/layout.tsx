import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'

import { NavBar2 } from '@/components/navbar2'
import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="relative flex h-screen flex-col">
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <NavBar2 />
            <main className="flex-1 bg-slate-200">{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  )
}
