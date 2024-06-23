'use client'
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface HeroParallaxProps {
  children: React.ReactNode
  image: string
}

export const HeroParallax = ({ image, children }: HeroParallaxProps) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig,
  )
  return (
    <div
      ref={ref}
      className="relative flex h-[180vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      {children}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          <ImageCard image={image} translate={translateXReverse} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export const ImageCard = ({
  image,
  translate,
}: {
  image: string
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={image}
      className="group/product relative h-[50rem] w-[50rem] flex-shrink-0"
    >
      <Image
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        src={require('../../public/somos.webp').default.src}
        height="800"
        width="800"
        className="absolute inset-0 h-full w-full object-cover object-left-top"
        alt={image}
        fetchPriority="low"
        decoding="async"
        data-nimg="1"
      />
    </motion.div>
  )
}
