import dynamic from 'next/dynamic'
import React from 'react'

import Loading from '@/app/loading'

import ScrollReveal from '../scroll-reveal'

const InfiniteMovingCards = dynamic(
  () =>
    import('@/components/infinite-moving-cards').then(
      (mod) => mod.InfiniteMovingCards,
    ),
  {
    loading: () => <Loading />,
  },
)

export function InfiniteMovingCardsComponent() {
  return (
    <section>
      <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
        <div className="dark:bg-grid-white/[0.05] relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </ScrollReveal>
    </section>
  )
}

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    image: '/assets/gifs/gif.gif',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
    image: '/assets/gifs/gif.gif',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
    image: '/assets/gifs/gif.gif',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
    image: '/assets/gifs/gif.gif',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
    image: '/assets/gifs/gif.gif',
  },
]
