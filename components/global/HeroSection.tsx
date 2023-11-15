import React from 'react'
import BookHeroSection from './BookHeroSection'

type Props = {}

function HeroSection({}: Props) {
  return (
    <div 
      style={{backgroundImage: 'url("http://www.cfmedia.vfmleonardo.com/imageRepo/4/0/64/192/634/FPO_MRK_122_S.jpg")'}} 
      className='h-[70vh] relative bg-cover bg-center '>
        <div className='w-full  text-white h-full bg-[#0006] pt-[80px] '>
          <div className='container mx-auto flex items-center h-full'>
          <div className="flex-1 space-y-3 drop-shadow-xl">
            <h1 className='text-8xl'>This is a hero</h1>
            <h3 className='text-4xl'> Lorem ipsum dolor</h3>
            <BookHeroSection/>
          </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection