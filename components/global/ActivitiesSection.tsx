"use client"
import React from 'react';

import Tag from './section/Tag';
import Title from './section/Title';
import Desc from './section/Desc';
import ViewMore from './section/ViewMore';
import Image from 'next/image';
import { motion } from 'framer-motion';
type Props = {};

function ActivitiesSection({}: Props) {
  return (
    <section className="flex bg-lightTaupe">
      <div className='container mx-auto flex'>


      <div className="absolute  flex-1 h-[65%] z-[-1]"></div>
      <div className=" pt-12 space-y-4">
      <div
        className='flex flex-col gap-6'>
        <div className="flex-1 space-y-6">
          <Tag tag={'Activities'}/>
          <Title title="Discover Memorable Activities with us"/>
          <Desc desc="Here we will share with you all the activities we organize in Marrakesh and its sightseeings." />
        </div>
        
          <ViewMore src={"#"} value={"View More"}/>
        
      </div>
    </div>
      
      <div className="flex gap-2 items-center w-full justify-center">
        <div className="relative top-[20%] w-[40vw]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5b64999be2ccd16cbfe99bbc/1561726949906-09OSZAETOZ4VLLTXUE7A/IMG_20181127_223509_311.jpg"
            className="w-full shadow-3xl"
            alt=''
            width={500}
          />
          </motion.div>
        </div>
      </div>

      </div>
    </section>
  );
}

export default ActivitiesSection;
