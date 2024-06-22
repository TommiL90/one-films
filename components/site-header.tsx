import { siteConfig } from '@/config/site'

import { MainNav } from './main-nav'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
  return (
    <header className="absolute top-0 z-40 w-full bg-transparent">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <ThemeToggle />
      </div>
    </header>
  )
}
