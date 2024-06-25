'use client'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

import { cn } from '@/lib/utils'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
  imgSrc: string
  alt: string
  inView: boolean
  index: number
  fill?: boolean
  width?: number
  height?: number
  className?: string
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const { imgSrc, inView } = props
  const [hasLoaded, setHasLoaded] = useState(false)

  console.log('LazyLoadImage', hasLoaded)

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true)
  }, [inView, setHasLoaded])

  return (
    <div className="w-full flex-shrink-0 flex-grow-0">
      <div className={'relative h-full'.concat(hasLoaded ? 'opacity-100' : '')}>
        {!hasLoaded && (
          <div className="loader">
            <div data-glitch="Loading..." className="glitch">
              Loading...
            </div>
          </div>
        )}
        <Image
          className={cn(
            `block h-auto w-full object-cover opacity-0 transition-opacity duration-200 ease-in-out ${hasLoaded ? 'opacity-100' : 'opacity-0'}`,
            props.className,
          )}
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          sizes="100vw"
          alt={props.alt}
          data-src={imgSrc}
          fill={props.fill}
          width={props.width}
          height={props.height}
        />
      </div>
    </div>
  )
}
