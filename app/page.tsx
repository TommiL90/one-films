import { AboutUs } from '@/components/sections/about-us'
import { Hero } from '@/components/sections/hero'
import { InfiniteMovingCardsComponent } from '@/components/sections/infinite-moving-cards-component'

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteMovingCardsComponent />
      <AboutUs />
      {/* 
      <AboutUs />
      <OurServices />
      <OtherServices />
      <Testimonials />
      <ContactUs /> */}
    </>
  )
}
