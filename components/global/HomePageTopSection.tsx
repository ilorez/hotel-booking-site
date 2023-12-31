'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { AnimatedText } from './AnimateText';

function HomePageTopSection() {
  return (
    <section className="w-full flex items-center justify-center text-xl max-w-4xl mx-auto my-16">
      <div className="flex flex-col items-center gap-6 p-10 [&>p]:text-center max-w-[80vw]">

        <p
          className="flex flex-col gap-1"
        >
          <span>
            
          </span>
          <span></span>{' '}
          <span></span>
        </p>
        <p>
        </p>

        <AnimatedText
          el="p"
          text={[
            "Marrakech is a touristic destination by excellence An enchanting",
            "imperial city ideal for culture lovers",
            "History & Discovery",
          ]}
          repeatDelay={60000}
          once
        />
        <AnimatedText
          el="p"
          text={[
          
          `It is a total escape, with year-round sunshine, breathtaking scenery,`,
          `rich and authentic culture to discover through its restaurants,`,
          `museums and historic sites`
          ]}
          repeatDelay={60000}
          once
        />

      </div>
    </section>
  );
}

export default HomePageTopSection;
