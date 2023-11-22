import { Inter, Josefin_Sans, Libre_Baskerville } from 'next/font/google';

export const inter = Inter({
  weight:['400','700'],
  style:['normal'],
  display:'swap',
  subsets:['latin'],
  variable: '--font-inter'
});

export const libre_baskerville = Libre_Baskerville({
  weight:['400','700'],
  style:['normal','italic'],
  display:'swap',
  subsets:['latin'],
  variable: '--font-libre_baskerville'
});
export const josefin_sans = Josefin_Sans({
  weight: ['400','700'],
  style:['normal','italic'],
  display:'swap',
  subsets: ['latin'],
  variable: '--font-josefin-sans'
});
