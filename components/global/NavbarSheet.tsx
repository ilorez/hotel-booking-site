import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

function NavbarSheet({}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          className="w-[80px] bg-transparent h-full border-none"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-[#EEE7DA] w-[400px] sm:w-[540px]"
      >
        <div className="flex flex-col items-center text-center gap-4 pt-10">
          <div>
            <h2 className="text-2xl my-10 cursor-default">MENU</h2>
          </div>
          <ul className=" flex flex-col gap-6 text-xl [&>li]:cursor-pointer">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Our Rooms</li>
            <li className="hover:underline">Contact</li>
            <li className="hover:underline">About us</li>
          </ul>
          <div>
            <ul className="flex gap-2  [&>li]:cursor-pointer">
              <li className="hover:scale-105">
                <img src="/icon/ar.png" width={30} alt="france icon"></img>
              </li>
              <li className="hover:scale-105">
                <img src="/icon/fr.png" width={30} alt="arabic icon"></img>
              </li>
              <li className="hover:scale-105">
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
