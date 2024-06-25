/* eslint-disable react/no-unescaped-entities */

import { Hero } from '@/components/hero'
import { InfiniteMovingCardsComponent } from '@/components/infinite-moving-cards-component'

// import { Icon } from '@/components/icons'

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteMovingCardsComponent />

      {/* 
      <AboutUs />
      <Services />
      <Testimonials />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#FF6B6B] sm:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From captivating video production to engaging social media
                campaigns and stunning website design, we offer a comprehensive
                suite of marketing services to help your business thrive in
                Ubatuba.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-xl bg-[#FFA500] p-6">
              <VideoIcon className="h-12 w-12 text-white" />
              <h3 className="text-2xl font-bold text-white">
                Video Production
              </h3>
              <p className="text-white">
                Bring your brand to life with our cinematic video production
                services, tailored to showcase your unique story.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl bg-[#FF6B6B] p-6">
              <FacebookIcon className="h-12 w-12 text-white" />
              <h3 className="text-2xl font-bold text-white">
                Social Media Campaigns
              </h3>
              <p className="text-white">
                Engage your audience and drive results with our captivating
                social media campaigns, designed to amplify your brand's
                presence.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl bg-[#FFA500] p-6">
              <LinkIcon className="h-12 w-12 text-white" />
              <h3 className="text-2xl font-bold text-white">Website Design</h3>
              <p className="text-white">
                Elevate your online presence with our visually stunning and
                user-friendly website design services, tailored to your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-[#FFA500] to-[#FF6B6B] py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                Our Work
              </h2>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our portfolio of successful marketing campaigns and
                website designs we've created for businesses in the Ubatuba
                region.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Image
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Portfolio"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <Image
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Portfolio"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <Image
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Portfolio"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <ContactUs />
      <ChatBot /> */}
    </>
  )
}

// function FacebookIcon(props: Icon) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
//   )
// }

// function LinkIcon(props: Icon) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
//       <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
//     </svg>
//   )
// }

// function VideoIcon(props: Icon) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
//       <rect x="2" y="6" width="14" height="12" rx="2" />
//     </svg>
//   )
// }
