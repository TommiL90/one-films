'use client'
import React, { Fragment, useEffect, useState } from 'react'

export const BubbleMessages = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedMessage, setMessage] = useState(botMessagesPt[0])
  const [loader, setLoader] = useState(true)
  const [showBubbleMessage, setShowBubbleMessage] = useState(true)

  const selectNewMessage = (index: number, messages: string[]) => {
    setLoader(true)
    setTimeout(() => {
      const nextIndex = (index + 1) % messages.length
      setSelectedIndex(nextIndex)
      setMessage(messages[nextIndex])
      setLoader(false)
    }, 3000)
  }

  useEffect(() => {
    const initialMessageTimeout = setTimeout(() => {
      setLoader(false)
      setShowBubbleMessage(true)
    }, 4000)

    const interval = setInterval(() => {
      selectNewMessage(selectedIndex, botMessagesPt)
    }, 15000)

    return () => {
      clearTimeout(initialMessageTimeout)
      clearInterval(interval)
    }
  })
  return (
    <Fragment>
      {showBubbleMessage && (
        <div className="absolute bottom-[60%] right-[101%] z-50 w-72 max-w-max rounded-3xl rounded-br-none bg-slate-300 p-4 text-base font-medium text-black shadow-xl">
          {loader ? <LoaderText /> : selectedMessage}
        </div>
      )}
    </Fragment>
  )
}

const LoaderText = () => (
  <div className="flex items-center justify-center space-x-2">
    <span className="sr-only">Loading...</span>
    <div className="h-1 w-1 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
    <div className="h-1 w-1 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
    <div className="h-1 w-1 animate-bounce rounded-full bg-black"></div>
  </div>
)

const botMessagesPt = [
  'Quer descobrir a Melhor Solução para sua Empresa? 😄',
  'Gostaria de conversar com um de nossos especialistas?',
]
