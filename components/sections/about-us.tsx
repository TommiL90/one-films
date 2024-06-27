// import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'

import ScrollReveal from '../scroll-reveal'
import { AspectRatio } from '../ui/aspect-ratio'
import { LazyLoadImage } from '../ui/lazy-load-image'

// const HeroParallax = dynamic(() =>
//   import('@/components/ui/hero-parallax').then((mod) => mod.HeroParallax),
// )

export const AboutUs = () => {
  return (
    <>
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
                  <span> Quem Somos</span>
                  <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contando a nossa história
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <section className="flex flex-col justify-center space-y-4">
                <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
                  Somos <strong>Lucas</strong> e <strong>Diego</strong>,
                  fundadores da <strong>OneFilms</strong>. Com anos de
                  experiência em audiovisual e vendas, acreditamos firmemente
                  que a <strong>qualidade da imagem</strong> e um{' '}
                  <strong>storytelling</strong> bem elaborado são essenciais
                  para fazer a diferença nas redes sociais e gerar{' '}
                  <strong>grandes resultados</strong>.
                </p>
                <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
                  Na <strong>One Films</strong>, utilizamos equipamentos de
                  altíssima qualidade para gerar conteúdo que não só se foca no
                  produto, mas também no impacto e no valor que pode gerar para
                  nossos clientes e <strong>seu público-alvo</strong>.
                </p>
                <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
                  Utilizamos técnicas que apelam às emoções, criando confiança e
                  segurança em sua empresa. A <strong>OneFilms</strong> é a
                  escolha certa para você. Junte-se a nós e transforme sua visão
                  em realidade!
                </p>
              </section>
              <LazyLoadImage
                imgSrc="/placeholder.svg"
                width={550}
                height={310}
                alt="nos"
                inView={true}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
