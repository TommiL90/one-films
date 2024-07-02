import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'

import { siteConfig } from '@/config/site'

import { MainNav } from './main-nav'

export function SiteHeader() {
  return (
    <header className="absolute top-0 z-40 w-full bg-transparent">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex gap-2 pl-4">
          <a
            href="https://www.instagram.com/onefilmsproducoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-1 text-white hover:bg-foreground hover:text-[#C13584]"
          >
            <IconBrandInstagram className="size-6" />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-1 text-white hover:bg-foreground hover:text-emerald-500"
          >
            <IconBrandWhatsapp className="size-6" />
          </a>
        </div>
      </div>
    </header>
  )
}
