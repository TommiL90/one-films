/* eslint-disable @typescript-eslint/no-explicit-any */
// react-simple-chatbot.d.ts

declare module 'react-simple-chatbot' {
  import * as React from 'react'

  interface Step {
    id: string | number
    message?: string
    trigger?: string | number
    end?: boolean
    options?: Array<{
      value: string | number
      label: string
      trigger: string | number
    }>
    component?: React.ComponentType<any>
    asMessage?: boolean
    delay?: number
    replace?: boolean
    waitAction?: boolean
  }

  interface ChatBotProps {
    steps: Step[]
    headerTitle?: string
    botAvatar?: string
    userAvatar?: string
    customStyle?: React.CSSProperties
    customDelay?: number
    customBotDelay?: number
    userDelay?: number
    floating?: boolean
    style?: HTMLAttributes<HTMLDivElement>['style']
    handleEnd?: (data: any) => void
    speechSynthesis?: {
      enable: boolean
      lang: string
    }
  }

  const ChatBot: React.FC<ChatBotProps>

  export default ChatBot
}
