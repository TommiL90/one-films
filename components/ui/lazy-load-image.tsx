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
  width?: number
  height?: number
  className?: string
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const { imgSrc, inView } = props
  const [hasLoaded, setHasLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true)
  }, [inView, setHasLoaded])

  return (
    <div className="w-full flex-shrink-0 flex-grow-0">
      <div className={'relative h-full'.concat(hasLoaded ? 'opacity-100' : '')}>
        {!hasLoaded && <span>Loading ...</span>}
        <Image
          className={cn(
            `block w-full object-cover opacity-0 transition-opacity duration-200 ease-in-out ${hasLoaded ? 'opacity-100' : 'opacity-0'}`,
            props.className,
          )}
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt={props.alt}
          data-src={imgSrc}
          width={props.width}
          height={props.height}
        />
      </div>
    </div>
  )
}
