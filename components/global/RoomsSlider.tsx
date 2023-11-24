'use client';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Tag from './section/Tag';
import Title from './section/Title';
import Desc from './section/Desc';
import ViewMore from './section/ViewMore';
import { motion } from 'framer-motion';

type Props = {};

const RoomsSlider = (props: Props) => {
  return (
    <div className="relative  py-16 ">
      <div className="absolute top-0 left-0 bg-lightTaupe w-full h-[60%] z-[-1]"></div>
      <div className="flex items-end px-16">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <Tag tag="The Rooms" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <Title
              title="Le Bled de Gre... An invitation to comfort, elegance and
      relaxation"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <Desc
              desc="Hotel Le Bled de Gre promises a relaxed accommodation experience
      with comfortable, tastefully decorated rooms. All our rooms are
      perfectly equipped to offer you the calm and comfort you need for
      an unforgettable stay in Marrakech."
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <ViewMore src={'#'} value={'View Rooms'} />
        </motion.div>
      </div>

      <Swiper
        slidesPerView={2.2}
        onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={40}
        className="px-20 py-8 mt-8"
      >
        {[
          '/images/room1.jpg',
          '/images/room2.jpg',
          '/images/room3.jpg',
          '/images/room4.jpg'
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
