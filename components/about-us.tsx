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
            Somos <strong>Lucas</strong> e <strong>Diego</strong>, fundadores da <strong>OneFilms</strong>.
            Com anos de experiência em audiovisual e
            vendas, acreditamos firmemente que a <strong>qualidade
              da imagem</strong> e um <strong>storytelling</strong> bem elaborado são
            essenciais para fazer a diferença nas redes sociais
            e gerar <strong>grandes resultados</strong>.
          </p>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            Na <strong>One Films</strong>, utilizamos equipamentos de altíssima qualidade para gerar conteúdo que não só se foca no produto, mas também no impacto e no valor que pode gerar para nossos clientes e <strong>seu público-alvo</strong>.
          </p>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            Utilizamos técnicas que apelam às emoções, criando confiança e segurança em sua empresa. A {' '} 
            <strong>OneFilms</strong> é a escolha certa para você. Junte-se a
            nós e transforme sua visão em realidade!
          </p>
        </div>
      </HeroParallax>
    </section>
  )
}

export default AboutUs
