import {
  Cormorant_Garamond as CormorantGaramond,
  Fira_Code as FontMono,
  Inter as FontSans,
  Prata,
  Yeseva_One as YesevaOne,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const yesevaOne = YesevaOne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yeseva_one',
  weight: '400',
})

export const cormorantGaramond = CormorantGaramond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
  weight: ['300', '400', '500', '600', '700'],
})

export const prata = Prata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prata',
  weight: '400',
})
