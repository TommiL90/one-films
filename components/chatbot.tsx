/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { CustomStep } from './chatbot/custom-step'
import { WhattsButton } from './chatbot/whats-button'

const user = {
  name: 'Thomas',
  profileImage: 'https://randomuser.me/api/portraits/men/51.jpg',
}

const steps = [
  {
    id: '0',
    component: (
      <CustomStep
        legend={
          'Olá tudo bem? Para que possamos dar início preciso de algumas informações <strong>rápidas</strong> 🙂'
        }
        textButton={'Sim, quero mais informações ➡️'}
      />
    ),
    delay: 3000,
  },
  {
    id: '1',
    message: 'Qual o seu nome completo?',
    trigger: 'name',
    delay: 2000,
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
    validator: (value: string) => {
      if (value.trim() === '') {
        return 'Por favor, insira seu nome completo.'
      }
      console.log('value', value)
      // setFormData((prevData: any) => ({
      //   ...prevData,
      //   name: value,
      // }))

      return true
    },
  },
  {
    id: '3',
    message: 'Prazer {previousValue}! 👋🏻',
    trigger: '4',
  },
  {
    id: '4',
    message: 'Em qual e-mail gostaria de receber a proposta?',
    trigger: 'email',
  },
  {
    id: 'email',
    user: true,
    trigger: '6',
    validator: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const isValid = emailRegex.test(value)
      if (!isValid) {
        return 'Por favor, insira um e-mail válido.'
      }

      console.log('value', value)

      return true
    },
  },
  {
    id: '6',
    message:
      'Poderia me informar seu telefone? Inclua o código do país e utilize apenas dígitos (prometo não incomodar 🙏).',
    trigger: 'telefone',
  },
  {
    id: 'telefone',
    user: true,
    trigger: '8',
    inputAttributes: {
      name: 'phone',
    },
    validator: (value: string) => {
      const phoneRegex = /^\d{1,15}$/
      const isValid = phoneRegex.test(value)

      if (!isValid) {
        return 'Por favor, insira um número de teléfono válido.'
      }

      console.log('value', value)

      return true
    },
  },
  {
    id: '8',
    message:
      'Legal, estamos quase lá. Para recomendar a melhor solução, preciso conhecer um pouco mais sobre a seu negocio.',
    trigger: '9',
  },
  {
    id: '9',
    message: 'Qual o nome do seu negocio?',
    trigger: '10',
  },
  {
    id: '10',
    user: true,
    trigger: '11',
  },
  {
    id: '11',
    message: 'Que tipo de serviço esta buscando?',
    trigger: '12',
  },
  {
    id: '12',
    options: [
      {
        value: 'Consultoria e Protopipagem',
        label: 'test',
        trigger: '13',
      },
      {
        value: 'Profissionais de TI',
        label: 'test 1',
        trigger: '13',
      },
      {
        value: 'Desenvolvimento Web',
        label: 'test 2',
        trigger: '13',
      },
    ],
  },
  {
    id: '13',
    message:
      'Por favor, adicione quaisquer comentários sobre sua necessidade atual que o levou a entrar em contato conosco.',
    trigger: '14',
  },
  {
    id: '14',
    user: true,
    trigger: '15',
  },
  {
    id: '15',
    component: <WhattsButton />,
    end: true,
  },
]

export const ChatBot = () => {
  const [width] = useState(window.innerWidth)
  return (
    <PrimitiveChatBot
      steps={steps}
      floating={true}
      botAvatar={user.profileImage}
      userDelay={0}
      hideUserAvatar={true}
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
