export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Make beautiful websites regardless of your design experience.',
  mainNav: [
    {
      title: 'Quem Somos',
      href: '#about-us',
    },
    {
      title: 'Serviços y portfólio',
      href: '#services',
    },
    {
      title: 'Contato',
      href: '#contact',
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
}

export type SiteConfig = typeof siteConfig
