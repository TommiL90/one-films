/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

import { Icon } from '../icons'
import { subtitle, title } from '../primitives'
import ScrollReveal from '../scroll-reveal'

export const Testimonials = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <ScrollReveal y={-20} duration="300ms" threshold={0.75}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="relative mx-auto inline-block rounded-lg border border-emerald-500/20 bg-emerald-300/10 px-3 py-1 text-sm text-white">
                <span> Depoimentos </span>
                <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </div>
            </div>
            <div>
              <h2 className={cn(title({ size: 'md' }))}>
                {' '}
                O Que Nossos Clientes Dizem:
              </h2>
              <p
                className={cn(
                  subtitle(),
                  'max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed',
                )}
              >
                Ouça os depoimentos das empresas que ajudamos a crescer suas
                marcas e alcançar novos clientes em Ubatuba.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <blockquote className="grid gap-1">
                <div className="text-xl font-bold text-emerald-600">
                  "A Agência de Marketing Ubatuba foi um divisor de águas para o
                  nosso negócio."
                </div>
                <footer>
                  <p>- John Doe, Proprietário do Beachside Cafe</p>
                </footer>
              </blockquote>
              <blockquote className="grid gap-1">
                <div className="text-xl font-bold text-emerald-600">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, reprehenderit quas!."
                </div>
                <footer>
                  <p>- Pirocao, Proprietário do Motel</p>
                </footer>
              </blockquote>
            </div>
            <Image
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Testimonials"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

function FacebookIcon(props: Icon) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkIcon(props: Icon) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function VideoIcon(props: Icon) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}
