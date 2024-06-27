import React from 'react'

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
        <h1 className="animate-fadeInDown bg-gradient-to-b from-primary to-zinc-500 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
          Eleve sua Marca com a Agência Audiovisual
          <br /> One Films
        </h1>
        <p className="max-w-[600px] animate-fade text-muted-foreground md:text-xl">
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
