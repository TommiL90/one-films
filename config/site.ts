export const siteConfig = {
  name: 'One Films Ubatuba - Produções Audiovisuais',
  description:
    'Produções audiovisuais totalmente personalizados, projetados para atender suas necessidades, criar engajamento e vender.',
  generator: 'Next.js',
  keywords: [
    'One Films Ubatuba',
    'Produções Audiovisuais',
    'Vídeos',
    'marketing',
    'marketing digital',
    'Ubatuba',
    'São Paulo',
  ],
  mainNav: [
    {
      title: 'Quem somos',
      href: '#quem-somos',
    },
    {
      title: 'Serviços e portfólio',
      href: '#serviços-e-portfólio',
    },
    {
      title: 'Contato',
      href: '#contato',
    },
  ],
  links: {
    instagram: 'https://github.com/nextui-org/nextui',
    whatsApp: 'https://twitter.com/getnextui',
  },
  contact: {
    phone: '+55 (11) 99999-9999',
    whatssApp: '+55 (11) 99999-9999',
  },
  address: {
    street: 'Rua da Alegria, 123',
    city: 'São Paulo',
    state: 'SP',
    zip: '01234-567',
  },
  authors: [
    { name: 'Tomás Lillo' },
    { name: 'Tomás', url: 'https://www.linkedin.com/in/tomasbenjamin/' },
  ],
}

export type SiteConfig = typeof siteConfig
