import dynamic from 'next/dynamic'

import Loading from '@/app/loading'
import { cn } from '@/lib/utils'

import { subtitle, title } from '../primitives'
import ScrollReveal from '../scroll-reveal'
import { skeletonCards } from '../skeletons-services'

const BlurImage = dynamic(
  () => import('@/components/blur-image').then((mod) => mod.BlurImage),
  {
    loading: () => <Loading />,
  },
)

export const OurServices = () => {
  return (
    <div className="w-full py-8 md:py-16 lg:py-24">
      <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
                <span> Nosso Trabalho</span>
                <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </div>
            </div>
            <h2 className={cn(title({ size: 'md' }))}>
              Essas são as nossas atuações:
            </h2>
            <p
              className={cn(
                subtitle(),
                'max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed',
              )}
            >
              Na <strong>OneFilms</strong>, criamos serviços{' '}
              <strong>personalizados</strong> que atendem às necessidades{' '}
              <strong>únicas</strong> da sua marca. Especializados em produções
              audiovisuais de alta qualidade, ajudamos sua marca a se destacar
              no mercado digital.
            </p>
          </div>
          <div className="h-[800px] w-full py-4">
            <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
              {skeletonCards.map((card, i) => (
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
                    <BlurImage src={card.thumbnail} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
