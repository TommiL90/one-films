import React from 'react'

import { cn } from '@/lib/utils'

import { subtitle, title } from '../primitives'
import { buttonVariants } from '../ui/button'
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
      <div className="z-50 flex h-screen flex-col items-center justify-center transition-all">
        <h1
          className={cn(
            title({ size: 'lg', color: 'foreground' }),
            'animate-fadeInDown',
          )}
        >
          Eleve sua Marca com a Agência Audiovisual
          <br /> One Films
        </h1>
        <p className={cn(subtitle(), 'leading-normal')}>
          Desbloqueie o poder da criação de conteúdo e do marketing digital para
          fazer seu negócio crescer em Ubatuba e região.
        </p>

        <button className="relative mx-auto mt-4 animate-mobileActive rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm hover:bg-emerald-300/20">
          <span>Contate-nos →</span>
          <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button>
      </div>
    </ImagesSlider>
  )
}
