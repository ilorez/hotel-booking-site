import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

type Props = {
  tag: String;
  title: String;
  desc: String;
  src?: String;
};

function SectionsHeader({ src = '', tag, title, desc }: Props) {
  return (
    <div className="container mx-auto pt-12 space-y-4">
      <div className="flex items-end">
        <div className="flex-1 space-y-6">
          <div className=" flex gap-4 items-center">
            <div className="w-[100px] border-y border-black opacity-50"></div>
            <div className="text-lg">{tag}</div>
          </div>
          <h1 className="text-6xl max-w-4xl ">{title}</h1>
          <p className="text-lg max-w-5xl ">{desc}</p>
        </div>
        {src && (
          <div className="flex gap-2 items-center text-xl hover:text-[#0009] hover:underline cursor-pointer">
            <Button
              size={'icon'}
              variant={'outline'}
              className="w-16 border-[2px] bg-transparent border-[#0002] hover:bg-[#0002] h-16 rounded-full"
            >
              <ArrowRight />
            </Button>{' '}
            <p className="  ">View More</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionsHeader;
