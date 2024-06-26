// import dynamic from 'next/dynamic'

import dynamic from 'next/dynamic'

import { cn } from '@/lib/utils'

import { subtitle, title } from '../primitives'
import ScrollReveal from '../scroll-reveal'

const ImageCarousel = dynamic(() =>
  import('@/components/image-carousel').then((mod) => mod.ImageCarousel),
)

export const OtherServices = () => {
  return (
    <section id="services" className="w-full py-8 md:py-16 lg:py-24">
      <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
                <span> Outros Serviços</span>
                <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </div>
            </div>
            <h2 className={cn(title({ size: 'md' }))}>
              {' '}
              Parcerias Estratégicas:
            </h2>

            <p
              className={cn(
                subtitle(),
                'max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed',
              )}
            >
              Além de nossos serviços audiovisuais, colaboramos com parceiros
              especializados em tráfego, sites e gestão de redes sociais para
              maximizar sua presença online.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <ImageCarousel />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3
                      className={cn(
                        title({ size: 'sm', color: 'green' }),
                        'text-left',
                      )}
                    >
                      Tráfego e marketing digital
                    </h3>
                    <p className="font-medium text-accent-foreground">
                      Engaje seus clientes com nossas campanhas personalizadas
                      nas redes sociais.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3
                      className={cn(
                        title({ size: 'sm', color: 'green' }),
                        'text-left',
                      )}
                    >
                      Desenvolvimento Web
                    </h3>
                    <p className="font-medium text-accent-foreground">
                      Exiba sua marca com um site visualmente deslumbrante e
                      fácil de usar. Desde Landing Pages até E-commerces.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
