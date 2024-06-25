/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// react-simple-chatbot.d.ts

declare module 'react-simple-chatbot' {
  import * as React from 'react'

  // Base Step Type
  interface BaseStep {
    id: string | number
    trigger?: string | number | Function
    end?: boolean
    placeholder?: string
    metadata?: Record<string, any>
  }

  // Text Step
  interface TextStep extends BaseStep {
    message:
      | string
      | ((params: { previousValue: any; steps: Record<string, any> }) => string)
    avatar?: string
    delay?: number
    hideInput?: boolean
    inputAttributes?: Record<string, any>
  }

  // User Step
  interface UserStep extends BaseStep {
    user: true
    validator?: (value: any) => boolean
  }

  // Options Step
  interface Option {
    label: string
    value: any
    trigger: string | number | Function
  }

  interface OptionsStep extends BaseStep {
    options: Option[]
    hideInput?: boolean
  }

  // Custom Step
  interface CustomStep extends BaseStep {
    component: any // Assuming React Component
    replace?: boolean
    waitAction?: boolean
    asMessage?: boolean
    delay?: number
    hideInput?: boolean
  }

  // Update Step
  interface UpdateStep extends BaseStep {
    update: string | number
    trigger: string | number | Function
  }

  // Union Type for all Steps
  // type Step = TextStep | UserStep | OptionsStep | CustomStep | UpdateStep

  type Step = TextStep | UserStep

  // interface Step {
  //   id: string | number
  //   message?: string
  //   trigger?: string | number
  //   end?: boolean
  //   options?: Array<{
  //     value: string | number
  //     label: string
  //     trigger: string | number
  //   }>
  //   component?: React.ComponentType<any>
  //   asMessage?: boolean
  //   delay?: number
  //   replace?: boolean
  //   waitAction?: boolean
  // }

  interface ChatBotProps {
    steps: any
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
    hideUserAvatar?: boolean
    speechSynthesis?: {
      enable: boolean
      lang: string
    }
  }

  const ChatBot: React.FC<ChatBotProps>

  export default ChatBot
}
