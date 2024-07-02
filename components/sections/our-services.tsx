import dynamic from 'next/dynamic'

import Loading from '@/app/loading'
import { cn } from '@/lib/utils'
import { SkeletonCard } from '@/types/skeleton-card'

import { subtitle, title } from '../primitives'
import ScrollReveal from '../scroll-reveal'

const SkeletonOne = dynamic(
  () =>
    import('@/components/skeletons-services').then((mod) => mod.SkeletonOne),
  {
    loading: () => <Loading />,
  },
)

const SkeletonTwo = dynamic(
  () =>
    import('@/components/skeletons-services').then((mod) => mod.SkeletonTwo),
  {
    loading: () => <Loading />,
  },
)

const SkeletonThree = dynamic(
  () =>
    import('@/components/skeletons-services').then((mod) => mod.SkeletonThree),
  {
    loading: () => <Loading />,
  },
)

const SkeletonFour = dynamic(
  () =>
    import('@/components/skeletons-services').then((mod) => mod.SkeletonFour),
  {
    loading: () => <Loading />,
  },
)

const BlurImage = dynamic(
  () => import('@/components/blur-image').then((mod) => mod.BlurImage),
  {
    loading: () => <Loading />,
  },
)

export const OurServices = () => {
  return (
    <div id="services" className="w-full py-8 md:py-16 lg:py-24">
      <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
        <div className="container mx-auto px-4 md:px-6">
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
          <div className="mx-auto flex h-[800px] max-w-6xl items-center py-4">
            <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
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

const skeletonCards: SkeletonCard[] = [
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
