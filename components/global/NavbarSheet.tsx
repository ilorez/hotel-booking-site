import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { X } from 'lucide-react';

import { Menu } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {};

function NavbarSheet({}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={'outline'}
          className="aspect-square bg-transparent h-full border-none"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="bg-lightTaupe text-gray-700 w-[400px] sm:w-[540px] flex flex-col items-center justify-center"
      >
        <SheetClose asChild>
          <button>
            <X size={64} className="hover:scale-105 hover:text-gray-600" />
          </button>
        </SheetClose>
        <div className="flex flex-col items-center text-center gap-4 [&>div>ul>a]:cursor-pointer">
          <div>
            <h2 className="text-2xl my-10 cursor-default">MENU</h2>
          </div>
          <div>
            <ul className=" flex flex-col gap-6 text-xl [&>*:hover]:underline">
              <SheetClose asChild>
                <Link href={'/'}>Home</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={'/rooms'}>Our Rooms</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={'/activities'}>Activities</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={'/contact'}>Contact</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={'/about'}>About us</Link>
              </SheetClose>
            </ul>
          </div>
          <div>
            <ul className="flex gap-2  [&>li]:cursor-pointer [&>li:hover]:scale-105">
              <li>
                <img src="/icon/fr.png" width={30} alt="arabic icon"></img>
              </li>
              <li>
                <img src="/icon/eng.png" width={30} alt="english icon"></img>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarSheet;
