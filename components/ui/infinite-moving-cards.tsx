/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { AspectRatio } from './aspect-ratio'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
    image: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-emerald-500/60 md:w-[350px]"
            // style={{
            //   background:
            //     'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            // }}
            key={item.name}
          >
            <figure>
              <AspectRatio
                ratio={60 / 37}
                className="min-w-full rounded-t-2xl bg-muted"
              >
                <Image
                  src="/gif.gif"
                  alt="Photo by Drew Beamer"
                  fill
                  // width="480"
                  // height="296"
                  fetchPriority="low"
                  placeholder={blurDataURL}
                  decoding="async"
                  className="rounded-t-2xl object-cover"
                />
              </AspectRatio>
              <figcaption className="sr-only">Titulo del gif</figcaption>
            </figure>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <CardHeader className="px-4">
              <CardTitle className="text-lg font-semibold">
                {' '}
                {item.title}
              </CardTitle>
              <CardDescription className="z-20 text-sm font-normal leading-[1.6]">
                {item.quote}
              </CardDescription>
            </CardHeader>
          </li>
        ))}
      </ul>
    </div>
  )
}

const blurDataURL =
  'data:image/webp;base64,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'
