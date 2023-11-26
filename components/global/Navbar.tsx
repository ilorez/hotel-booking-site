'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import NavbarSheet from './NavbarSheet';
import ContactPopMenu from './ContactPopMenu';
import Logo from './Logo';

type Props = {};

const Navbar = (props: Props) => {
  const [navColors, setNavColors] = useState(
  'text-primary-foreground transparent h-[80px]'
  );

  const [prevScrollPos, setPrevScrollPos] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      // Show the navbar if scrolling up or at the top

      if(window.scrollY > 10){
        if(!isScrolledDown || currentScrollPos <= 0){
           setNavColors('bg-white text-lightTaupe-foreground h-nav drop-shadow-2xl border-b')
        }else{
           setNavColors('bg-white text-lightTaupe-foreground h-nav drop-shadow-xl translate-y-[-80px]')
        }
      }else{
           setNavColors('text-primary-foreground transparent h-[80px]');
      }
        


    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);




  return (
    <div
      className={[
          'border-b duration-300 z-50 fixed w-full top-0 left-0 transition-all ',
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
