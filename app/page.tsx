import { AboutUs } from '@/components/sections/about-us'
import { ContactUs } from '@/components/sections/contact-us'
import { Hero } from '@/components/sections/hero'
import { InfiniteMovingCardsComponent } from '@/components/sections/infinite-moving-cards-component'
import { OtherServices } from '@/components/sections/other-services'
import { OurServices } from '@/components/sections/our-services'
import { Portfolio } from '@/components/sections/portfolio'

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteMovingCardsComponent />
      <AboutUs />
      <OurServices />
      <Portfolio />
      <OtherServices />
      <ContactUs />
    </>
  )
}
