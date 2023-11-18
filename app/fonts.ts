import { Inter, Roboto_Mono, Josefin_Sans } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
});
export const josefin_sans = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-josefin-sans'
});
