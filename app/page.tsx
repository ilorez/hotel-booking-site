import HeroSection from '@/components/global/HeroSection'
import Navbar from '@/components/global/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-400'>
      <HeroSection/>
    </div>
  )
}
