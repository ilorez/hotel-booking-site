import React from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import NavbarSheet from './NavbarSheet';
import ContactPopMenu from './ContactPopMenu';
import Image from 'next/image';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-b h-[80px] p-[0.1rem] z-50 bg-[#EEE7DAEE] text-gray-900  fixed w-full top-0 left-0">
      <div className="container h-full flex  mx-auto">
        <div className="w-[250px] flex h-full border-x">
          <NavbarSheet />
          <div className="h-full flex-1 flex justify-center items-center border-l text-lg hover:bg-accent">
            <ContactPopMenu />
          </div>
        </div>
        <div className="h-full flex-1 flex justify-center items-center text-2xl gap-2">
          <Image
            priority
            src="/icon/logo.svg"
            height={36}
            width={36}
            alt="hotel logo"
          />
          <p>
            <span>L</span>ebledegre
          </p>
        </div>
        <div className="w-[250px] bg-transparent h-full border-x ">
          <Button
            variant={'outline'}
            className="w-full bg-transparent h-full border-none font-normal text-lg"
          >
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
