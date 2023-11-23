import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  title: string;
  src: string;
};

function Hero({ title, src }: Props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${src})`
        }}
        className="h-[90vh] relative bg-cover bg-center "
      >
        <div className="w-full  text-white h-full bg-[#0006] pt-nav ">
          <div className="container mx-auto flex items-center h-full">
            <div className="flex-1 space-y-3 drop-shadow-xl h-full  w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-6xl max-w-5xl w-full h-full flex items-center justify-center">{title}</h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
