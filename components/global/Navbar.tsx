'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import NavbarSheet from './NavbarSheet';
import ContactPopMenu from './ContactPopMenu';
import Logo from './Logo';

type Props = {};

const Navbar = (props: Props) => {
  const [navColors, setNavColors] = useState(
    'text-primary-foreground transparent'
  );
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setNavColors('bg-lightTaupe text-lightTaupe-foreground')
      : setNavColors('text-primary-foreground transparent');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    <div
      className={[
        'border-b h-nav p-[0.1rem] z-50 fixed w-full top-0 left-0 transition-all',
        navColors
      ].join(' ')}
    >
      <div className="container h-full flex  mx-auto">
        <div className="w-[250px] flex h-full border-x">
          <NavbarSheet />
          <div className="h-full flex-1 flex justify-center items-center border-l text-lg hover:bg-secondary hover:text-secondary-foreground">
            <ContactPopMenu />
          </div>
        </div>
        <div className="h-full flex-1 flex justify-center items-center text-2xl gap-2">
          <Logo />
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
