import HeroSection from '@/components/global/HeroSection'
import Navbar from '@/components/global/Navbar'
import RoomsSlider from '@/components/global/RoomsSlider'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HomePageTopSection from '@/components/global/HomePageTopSection';


export default function Home() {
  return (
    <div className='min-h-[200vh] font-josefin'>
      <HeroSection/>
      <HomePageTopSection />
      <RoomsSlider/> changes
    </div>
  )

