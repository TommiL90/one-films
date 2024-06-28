import { AboutUs } from '@/components/sections/about-us'
import { Hero } from '@/components/sections/hero'
import { InfiniteMovingCardsComponent } from '@/components/sections/infinite-moving-cards-component'
import { OurServices } from '@/components/sections/our-services'

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteMovingCardsComponent />
      <AboutUs />
      <OurServices />
      {/* 
      <AboutUs />
      <OurServices />
      <OtherServices />
      <Testimonials />
      <ContactUs /> */}
    </>
  )
}
