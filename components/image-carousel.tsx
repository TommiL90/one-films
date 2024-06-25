'use client'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

import IMG from '@/public/produtora.webp'

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { LazyLoadImage } from './ui/lazy-load-image'

export const ImageCarousel = () => {
  return (
    <Carousel
      className="w-full max-w-[550px] sm:w-full lg:order-last"
      opts={{
        loop: true,
        dragFree: true,
      }}
      plugins={[
        Autoplay({
          playOnInit: true,
          delay: 2000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <LazyLoadImage
              key={index}
              index={index}
              imgSrc={IMG.src}
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
    </Carousel>
  )
}
