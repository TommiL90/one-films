'use client'
import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/lib/utils'

interface CardProps {
  src: string
}

export const BlurImage = ({ src }: CardProps) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <Image
      src={src}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
        loaded ? 'blur-none' : 'blur-md',
      )}
      alt="thumbnail"
    />
  )
}
