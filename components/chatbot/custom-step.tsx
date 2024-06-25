'use client'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomStep = (props: any) => {
  const [isVisible, setIsVisible] = useState(true)
  const { triggerNextStep, legend, textButton } = props

  const handleClick = () => {
    triggerNextStep({ trigger: '1' })
    setIsVisible(!isVisible)
  }

  return (
    <div className={cn(isVisible ? 'block' : 'hidden', 'space-y-4')}>
      <p
        dangerouslySetInnerHTML={{ __html: legend }}
        className="text-sm text-accent"
      />
      <Button onClick={handleClick}>{textButton}</Button>
    </div>
  )
}
