/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

export const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FFD700] px-3 py-1 text-sm text-[#333333]">
              Client Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#333333] sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the businesses we've helped grow their brand and reach
              new customers in Ubatuba.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-1">
              <div className="text-2xl font-bold text-[#FFD700]">
                "Ubatuba Marketing Agency has been a game-changer for our\n
                business."
              </div>
              <p className="text-[#333333]">
                - John Doe, Owner of Beachside Cafe
              </p>
            </div>
            <div className="grid gap-1">
              <div className="text-2xl font-bold text-[#FFD700]">
                "Their team's creativity and attention to detail are\n
                unmatched."
              </div>
              <p className="text-[#333333]">
                - Jane Smith, CEO of Coastal Boutique
              </p>
            </div>
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
    </section>
  )
}
