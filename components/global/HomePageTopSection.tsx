'use client';
import { motion } from 'framer-motion';
import React from 'react';

function HomePageTopSection() {
  return (
    <section className="w-full flex items-center justify-center text-xl max-w-4xl mx-auto my-16">
      <div className="flex flex-col items-center gap-6 p-10 [&>p]:text-center max-w-[80vw]">
        <motion.p
          className="flex flex-col gap-1"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span>
            Marrakech is a touristic destination by excellence An enchanting
          </span>
          <span>imperial city ideal for culture lovers</span>{' '}
          <span>History & Discovery</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          It is a total escape, with year-round sunshine, breathtaking scenery,
          rich and authentic culture to discover through its restaurants,
          museums and historic sites
        </motion.p>
      </div>
    </section>
  );
}

export default HomePageTopSection;
