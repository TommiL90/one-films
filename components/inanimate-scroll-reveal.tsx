'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function InanimateScrollReveal({
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    let observerRefValue: Element | null = null

    if (ref.current) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setShow(true)
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
  return <div ref={ref}>{show ? children : null}</div>
}
