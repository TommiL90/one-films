'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'

type Card = {
  id: number
  content: JSX.Element | React.ReactNode | string
  className: string
  thumbnail: string
}

export const OurServices = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
              <span> Nosso Trabalho</span>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Essas são as nossas atuações:
            </h2>
            <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Na <strong>OneFilms</strong>, criamos serviços{' '}
              <strong>personalizados</strong> que atendem às necessidades{' '}
              <strong>únicas</strong> da sua marca. Especializados em produções
              audiovisuais de alta qualidade, ajudamos sua marca a se destacar
              no mercado digital.
            </p>
          </div>
        </div>
        <div className="h-screen w-full py-4">
          <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
            {cards.map((card, i) => (
              <div key={i} className={cn(card.className, '')}>
                <div
                  className={cn(
                    card.className,
                    'relative h-full w-full overflow-hidden rounded-xl bg-white',
                  )}
                >
                  <div className="relative z-30 ml-4 flex min-h-full items-end bg-transparent">
                    {card.content}
                  </div>
                  <BlurImage card={card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white">
        Produção Audiovisual Premium
      </h3>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Produzimos vídeos de alta qualidade que refletem a essência da sua
        marca.
      </p>
    </div>
  )
}

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
        loaded ? 'blur-none' : 'blur-md',
      )}
      alt="thumbnail"
    />
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white">Storytelling Persuasivo</h3>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Criamos narrativas envolventes que cativam e inspiram seu público.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white">Locução de Qualidade</h3>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Oferecemos locução profissional para dar credibilidade e sofisticação
        aos seus vídeos..
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white">
        Vídeos Estratégicos para Redes Sociais
      </h3>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Desenvolvemos vídeos otimizados para cada plataforma, aumentando
        engajamento e alcance.
      </p>
    </div>
  )
}

const cards: Card[] = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
