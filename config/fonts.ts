/* eslint-disable camelcase */
import { DM_Sans, Manrope } from 'next/font/google'

export const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})
export const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
