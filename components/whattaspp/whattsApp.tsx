'use client'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const BubbleMessages = dynamic(() =>
  import('./bubble-messages').then((mod) => mod.BubbleMessages),
)

// const Boxes = dynamic(() =>
//   import('../ui/background-boxes').then((mod) => mod.Boxes),
// )

export const WhattsApp = () => {
  const ref = useRef(null)
  const [intersecting, setIntersecting] = useState(false)

  useEffect(() => {
    let observerRefValue: Element | null = null

    if (ref.current) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIntersecting(true)
        } else {
          // setIntersecting(false)
        }
      })

      intersectionObserver.observe(ref.current)
      observerRefValue = ref.current

      return () => {
        if (observerRefValue) {
          intersectionObserver.unobserve(observerRefValue)
        }
      }
    }
  })
  return (
    <div ref={ref}>
      <div className="fixed bottom-16 right-6 z-50 animate-mobileActive md:right-8">
        {intersecting ? (
          <>
            <BubbleMessages />
            <Avatar className="flex size-14 cursor-pointer items-center justify-center md:size-16">
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/51.jpg"
                alt="Profile picture of Carlos"
              />
              <AvatarFallback className="bg-[#14a800]">
                {' '}
                <IconBrandWhatsapp className="size-9 md:size-11" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0">
              <div className="relative top-4 size-4 animate-ping rounded-full bg-[#14a800] opacity-75" />
              <div className="size-4 rounded-full bg-[#14a800]" />
            </div>
          </>
        ) : // <div className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#14a800] md:size-16">
        //   <IconBrandWhatsapp className="size-9 md:size-11" />
        // </div>
        null}
      </div>
    </div>
  )
}
