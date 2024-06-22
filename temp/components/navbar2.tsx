import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // NavbarMenu,
  // NavbarMenuItem,
  // NavbarMenuToggle,
} from '@nextui-org/navbar'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'

import { cn } from '@/lib/utils'

import { Logo } from './icons'

export const NavBar2 = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      className="absolute flex h-14 items-center bg-transparent px-4 lg:px-6"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-auto flex gap-4 sm:gap-6">
          <NavbarItem>
            <NextLink
              className={cn(
                linkStyles({ color: 'foreground' }),
                'font-medium data-[active=true]:font-medium data-[active=true]:text-primary',
              )}
              color="foreground"
              href="#"
            >
              Portafolio
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={cn(
                linkStyles({ color: 'foreground' }),
                'font-medium data-[active=true]:font-medium data-[active=true]:text-primary',
              )}
              color="foreground"
              href="#"
            >
              Testimonials
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={cn(
                linkStyles({ color: 'foreground' }),
                'font-medium data-[active=true]:font-medium data-[active=true]:text-primary',
              )}
              color="foreground"
              href="#"
            >
              Contact
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>
    </NextUINavbar>
  )
}
