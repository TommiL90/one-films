import * as React from 'react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types'

import { OneFilmsBrand } from './one-fims-brand'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="relative flex w-full justify-between gap-6 md:gap-10">
      <div className="flex items-center">
        <OneFilmsBrand className="glitch top-5 md:top-8" />
        <span className="sr-only">{siteConfig.name}</span>
      </div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-base font-medium text-foreground hover:text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </a>
              ),
          )}
        </nav>
      ) : null}
    </div>
  )
}
