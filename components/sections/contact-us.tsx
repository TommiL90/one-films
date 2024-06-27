'use client'
import React from 'react'

import { Boxes } from '../ui/background-boxes'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-background [mask-image:radial-gradient(transparent,white)]" />
      <div className="container px-4 md:px-6">
        <Boxes />
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative space-y-2">
            <h2 className="relative z-20 text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Entre em Contato
            </h2>
            <p className="relative z-20 mt-2 max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Pronto para levar o seu negócio a novos patamares? Entre em
              contato conosco hoje e vamos discutir como podemos ajudá-lo a
              alcançar seus objetivos de marketing em Ubatuba.
            </p>
          </div>
          <div className="relative z-30 mx-auto w-full max-w-sm space-y-2">
            <form className="my-8 flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nome"
                className="max-w-lg flex-1 bg-foreground"
              />
              <Input
                type="email"
                placeholder="Email"
                className="max-w-lg flex-1 bg-foreground"
              />
              <Textarea
                placeholder="Messagem"
                rows={4}
                className="max-w-lg flex-1 bg-foreground"
              />
              <Button
                type="submit"
                className="group/btn relative block self-end shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              >
                Submit
                <BottomGradient />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}
