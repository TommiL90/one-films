import React from 'react'

import { HeroParallax } from './ui/hero-parallax'

const AboutUs = () => {
  const image = products[0]
  return (
    <section>
      <HeroParallax image={image}>
        <div className="relative left-0 top-0 mx-auto w-full max-w-7xl space-y-2 px-4 py-20 md:py-40">
          <div className="inline-block rounded-lg bg-[#FFD700] px-3 py-1 text-sm text-[#333333]">
            Quem Somos
          </div>

          <h2 className="text-2xl font-bold dark:text-white md:text-5xl">
            Contando a nossa história
          </h2>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            En One Films, nos dedicamos a elevar la calidad y la narrativa de
            nuestras producciones audiovisuales. Entendemos que el público
            actual busca empresas que se conecten auténticamente con ellos,
            comprendiendo sus necesidades y problemas para ofrecer soluciones
            efectivas.
          </p>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            En One Films, producimos contenido que no solo se enfoca en el
            producto, sino en el impacto y el valor que puede generar para
            nuestros clientes y su público objetivo. Utilizamos técnicas que
            apelan a las emociones, creando confianza y seguridad en su empresa.
          </p>
        </div>
      </HeroParallax>
    </section>
  )
}

export default AboutUs

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editrix.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
]
