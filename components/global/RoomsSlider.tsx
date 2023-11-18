'use client';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type Props = {};

const RoomsSlider = (props: Props) => {
  return (
    <div className="relative  py-10">
      <div className="absolute bg-[#EEE7DA] w-full h-[60%] z-[-1]"></div>
      <div className="container mx-auto pt-12 space-y-4">
        <div className="flex items-end">
          <div className="flex-1 space-y-6">
            <div className=" flex gap-4 items-center">
              <div className="w-[100px] border-y border-black opacity-50"></div>
              <div className="text-lg">The Rooms</div>
            </div>
            <h1 className="text-6xl max-w-4xl ">
              Le Bled de Gre... An invitation to comfort, elegance and
              relaxation
            </h1>
            <p className="text-lg max-w-5xl ">
              Hotel Le Bled de Gre promises a relaxed accommodation experience
              with comfortable, tastefully decorated rooms. All our rooms are
              perfectly equipped to offer you the calm and comfort you need for
              an unforgettable stay in Marrakech.
            </p>
          </div>
          <Button
            size={'icon'}
            variant={'outline'}
            className="w-20 border-[2px] bg-transparent border-[#0002] hover:bg-[#0002] h-20 rounded-full"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
      <Swiper
        slidesPerView={2.2}
        onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={40}
        className="px-20 py-8 mt-8"
      >
        {[
          'http://amani.hospitalityws.com/wp-content/uploads/2018/09/HA57-700x466.jpg',
          'http://amani.hospitalityws.com/wp-content/uploads/2018/09/Senior-Suite-Double-Bed-700x466.jpg',
          'http://amani.hospitalityws.com/wp-content/uploads/2023/01/A00B4882-700x466.jpg',
          'http://amani.hospitalityws.com/wp-content/uploads/2018/09/A00B4842-700x466.jpg'
        ].map((room, i) => (
          <SwiperSlide
            className={(i == 0 ? 'ml-20' : ' ') + ' py-10'}
            key={room}
          >
            <div className="cursor-pointer hover:-translate-y-4 duration-300">
              <img
                src={room}
                className="w-full aspect-[3/2] object-cover"
              ></img>
              <div className="flex justify-between py-8">
                <div>
                  <div className="text-3xl">Deluxe Room</div>
                  <div className="text-xl">4 adults - 25 m2</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-lg">from</div>
                  <div className="text-5xl">250 Dh</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoomsSlider;
