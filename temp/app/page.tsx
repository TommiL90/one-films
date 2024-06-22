// import { button as buttonStyles } from '@nextui-org/theme'
import { Fragment } from 'react'

import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import IndexPage from '@/components/test/test'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Services />
      <Testimonials />
      <IndexPage />
    </Fragment>
  )
}
