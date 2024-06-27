import dynamic from 'next/dynamic'

import ScrollReveal from '../scroll-reveal'

const ImageCarousel = dynamic(() =>
  import('@/components/image-carousel').then((mod) => mod.ImageCarousel),
)

export const OtherServices = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
                <span> Outros Serviços</span>
                <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Parcerias Estratégicas:
              </h2>
              <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Além de nossos serviços audiovisuais, colaboramos com parceiros
                especializados em tráfego, sites e gestão de redes sociais para
                maximizar sua presença online..
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <ImageCarousel />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-emerald-600">
                      Tráfego e marketing digital
                    </h3>
                    <p className="text-accent-foreground">
                      Engaje seus clientes com nossas campanhas personalizadas
                      nas redes sociais.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-emerald-600">
                      Desenvolvimento Web
                    </h3>
                    <p className="text-accent-foreground">
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