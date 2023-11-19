import React from 'react';
import BookHeroSection from './BookHeroSection';

type Props = {};

function HeroSection({}: Props) {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/roomBed1.jpg")'
      }}
      className="h-[70vh] relative bg-cover bg-center "
    >
      <div className="w-full  text-white h-full bg-[#0006] pt-[80px] ">
        <div className="container mx-auto flex items-center h-full">
          <div className="flex-1 space-y-3 drop-shadow-xl">
            <h1 className="text-7xl">
              Welcome to Le Bled de Gre – Your Gateway to Luxury and Comfort!
            </h1>
            <h3 className="text-xl">
              {' '}
              Book your stay now and elevate your travel experience with Le Bled
              de Gre. Your journey to luxury begins here.
            </h3>
            <BookHeroSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
