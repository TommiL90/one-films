import { AboutUs } from '@/components/sections/about-us'
// import { Hero } from '@/components/sections/hero'
import { InfiniteMovingCardsComponent } from '@/components/sections/infinite-moving-cards-component'
import { OtherServices } from '@/components/sections/other-services'
import { OurServices } from '@/components/sections/our-services'
import { Testimonials } from '@/components/sections/testimonials'

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <InfiniteMovingCardsComponent />
      <AboutUs />
      <OurServices />
      <OtherServices />
      <Testimonials />

      {/* 
      <OtherServices />
      <Testimonials />
      <ContactUs /> */}
    </>
  )
}
