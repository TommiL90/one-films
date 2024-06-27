import dynamic from 'next/dynamic'

import { AnimatedCard } from '../tem/components/ui/animated-card'
import { LayoutGridDemo } from './damo'
import ScrollReveal from './scroll-reveal'

const ImageCarousel = dynamic(() =>
  import('@/components/image-carousel').then((mod) => mod.ImageCarousel),
)

export const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      {/* <ScrollReveal y={-20} duration="1000ms" threshold={0.75}> */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
              <span> Nosso Trabalho</span>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Essas são as nossas atuações:
            </h2>
            <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Na <strong>OneFilms</strong>, criamos serviços{' '}
              <strong>personalizados</strong> que atendem às necessidades{' '}
              <strong>únicas</strong> da sua marca. Especializados em produções
              audiovisuais de alta qualidade, ajudamos sua marca a se destacar
              no mercado digital.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center bg-destructive">
          <LayoutGridDemo />

          {/* <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-emerald-600">
                    Produção Audiovisual Premium
                  </h3>
                  <p className="text-accent-foreground">
                    Produzimos vídeos de alta qualidade que refletem a essência da sua marca.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-emerald-600">
                    Storytelling Persuasivo
                  </h3>
                  <p className="text-accent-foreground">
                    Criamos narrativas envolventes que cativam e inspiram seu público.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-emerald-600">
                    Vídeos Estratégicos para Redes Sociais
                  </h3>
                  <p className="text-accent-foreground">
                    Desenvolvemos vídeos otimizados para cada plataforma, aumentando engajamento e alcance.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-emerald-600">
                    Locução de Qualidade
                  </h3>
                  <p className="text-accent-foreground">
                    Oferecemos locução profissional para dar credibilidade e sofisticação aos seus vídeos.
                  </p>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* </ScrollReveal> */}
    </section>
  )
}
