'use client';
import React from 'react';
import BookHeroSection from './BookHeroSection';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimateText';

type Props = {};

function HeroSection({}: Props) {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/roomBed1.jpg")'
      }}
      className="h-[90vh] relative bg-cover bg-center "
    >
      <div className="w-full  text-white h-full bg-[#0006] pt-nav ">
        <div className="container mx-auto flex items-center h-full">
          <div className="flex-1 space-y-3 drop-shadow-xl">
            <motion.div
            >
              <AnimatedText
                el="h1"
                text={[
                  "Welcome to Le Bled de Gre ",
                  "Your Gateway to Luxury and Comfort!",
                ]}
                className="text-5xl "
                repeatDelay={60000}
                once
              />
              <AnimatedText
                el="h2"
                text={[
                  "Book your stay now and elevate your travel experience with Le",
                  "Bled de Gre. Your journey to luxury begins here."
                ]}
                className="text-xl "
                repeatDelay={60000}
                once
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .5 }}
            >
              <BookHeroSection />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
