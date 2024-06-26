'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  threshold,
  duration,
  x,
  y,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  threshold: number
  duration: string
  x?: number
  y?: number
}) {
  x = x || 0
  y = y || 0
  const ref = useRef(null)
  const [intersecting, setIntersecting] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    let observerRefValue: Element | null = null

    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShow(true)
            setIntersecting(true)
          }
        },
        {
          threshold,
        },
      )

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
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : 'translate(0px, 0px)',
      }}
      className={`transition ${intersecting ? 'opacity-100' : 'opacity-0'}`}
      ref={ref}
    >
      {show ? children : null}
    </div>
  )
}
