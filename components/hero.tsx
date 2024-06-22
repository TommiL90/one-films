import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className="h-screen w-full bg-background py-12 sm:py-24 lg:py-32">
      <div className="container mx-auto grid gap-8 px-4 md:px-0 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Eleve sua Marca com a Agência Audiovisual One Films
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Desbloqueie o poder da criação de conteúdo e do marketing digital
              para fazer seu negócio crescer em Ubatuba e região.
            </p>
          </div>
        </div>
        <Image
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="Ubatuba Marketing Agency"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full"
        />
      </div>
    </section>
  )
}
