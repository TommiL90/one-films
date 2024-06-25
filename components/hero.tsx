import React from 'react'

import { ImagesSlider } from './ui/images-slider'

export function Hero() {
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
