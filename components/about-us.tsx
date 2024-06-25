import dynamic from 'next/dynamic'
import React from 'react'

const HeroParallax = dynamic(() =>
  import('@/components/ui/hero-parallax').then((mod) => mod.HeroParallax),
)

const AboutUs = () => {
  return (
    <section>
      <HeroParallax image={'/somos.webp'}>
        <div className="relative left-0 top-0 mx-auto w-full max-w-7xl space-y-2 px-4 py-20 md:py-40">
          <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
            <span> Quem Somos</span>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>

          <h2 className="text-2xl font-bold dark:text-white md:text-5xl">
            Contando a nossa história
          </h2>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            En One Films, nos dedicamos a elevar la calidad y la narrativa de
            nuestras producciones audiovisuales. Entendemos que el público
            actual busca empresas que se conecten auténticamente con ellos,
            comprendiendo sus necesidades y problemas para ofrecer soluciones
            efectivas.
          </p>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            En One Films, producimos contenido que no solo se enfoca en el
            producto, sino en el impacto y el valor que puede generar para
            nuestros clientes y su público objetivo. Utilizamos técnicas que
            apelan a las emociones, creando confianza y seguridad en su empresa.
          </p>
        </div>
      </HeroParallax>
    </section>
  )
}

export default AboutUs
