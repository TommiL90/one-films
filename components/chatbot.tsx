'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
]

export const ChatBot = () => {
  const [width] = useState(window.innerWidth)
  return (
    <PrimitiveChatBot
      steps={steps}
      floating={true}
      userDelay={0}
      style={{
        height: width > 568 ? '515px' : '100vh',
        zIndex: '99999',
      }}
    />
  )
}

const PrimitiveChatBot = dynamic(
  async () => {
    const Chatbot = await import('react-simple-chatbot')
    return Chatbot
  },
  {
    ssr: false,
  },
)
