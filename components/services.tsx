import Image from 'next/image'
import React from 'react'

export const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#D0D0D0] px-3 py-1 text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Elevate Your Brand with Our Expertise
            </h2>
            <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From captivating video production to engaging social media
              campaigns, our team of experts will help you create a powerful
              online presence and connect with your target audience in Ubatuba.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Video Production"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#2F4F4F]">
                    Video Production
                  </h3>
                  <p className="text-[#708090]">
                    Captivate your audience with our cinematic video production
                    services.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#2F4F4F]">
                    Social Media Campaigns
                  </h3>
                  <p className="text-[#708090]">
                    Engage your customers with our tailored social media
                    campaigns.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#2F4F4F]">
                    Website Design
                  </h3>
                  <p className="text-[#708090]">
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
