import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { LazyLoadImage } from './ui/lazy-load-image'

export const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
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
              Desde produção de vídeos envolventes até campanhas cativantes nas
              redes sociais, nossa equipe de especialistas ajudará você a criar
              uma presença online poderosa e se conectar com seu público-alvo em
              Ubatuba.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Carousel
            className="w-full max-w-[550px] sm:w-full lg:order-last"
            opts={{
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="">
                  <LazyLoadImage
                    key={index}
                    index={index}
                    imgSrc={`/produtora.webp`}
                    alt="Video Production"
                    // inView={slidesInView.indexOf(index) > -1}
                    inView={true}
                    width={550}
                    height={310}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-emerald-600">
                    Video Production
                  </h3>
                  <p className="text-accent-foreground">
                    Captivate your audience with our cinematic video production
                    services.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-emerald-600">
                    Social Media Campaigns
                  </h3>
                  <p className="text-accent-foreground">
                    Engage your customers with our tailored social media
                    campaigns.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-emerald-600">
                    Website Design
                  </h3>
                  <p className="text-accent-foreground">
                    Showcase your brand with a visually stunning and
                    user-friendly website.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
