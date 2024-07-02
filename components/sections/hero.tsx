import { IconBrandWhatsapp } from '@tabler/icons-react'
import React from 'react'

import { cn } from '@/lib/utils'

import { subtitle, title } from '../primitives'
import { ImagesSlider } from '../ui/images-slider'

export function Hero() {
  const images = [
    '/assets/images/hero/1.webp',
    '/assets/images/hero/2.webp',
    '/assets/images/hero/3.webp',
    '/assets/images/hero/4.webp',
  ]
  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className="z-50 mx-auto flex h-screen flex-col items-center justify-center px-4 transition-all">
        <h1
          className={cn(
            title({ size: 'lg', color: 'foreground' }),
            'animate-fadeInDown',
          )}
        >
          Eleve sua Marca com a Agência Audiovisual
          <br /> One Films
        </h1>
        <p className={cn(subtitle(), 'mb-6 text-center leading-relaxed')}>
          Desbloqueie o poder da criação de conteúdo e do marketing digital para
          fazer seu negócio crescer em Ubatuba e região.
        </p>

        <button className="relative inline-flex h-11 items-center justify-center whitespace-nowrap rounded-3xl border-emerald-500/20 bg-emerald-500/10 px-8 text-base font-medium ring-offset-background backdrop-blur-sm transition-colors hover:bg-emerald-300/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <span className="mr-2">Contate-nos</span>{' '}
          <IconBrandWhatsapp size={24} />
          <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button>
      </div>
    </ImagesSlider>
  )
}
