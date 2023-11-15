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
          className="w-[80px] bg-transparent h-[80px]"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-yellow-100 w-[400px] sm:w-[540px]"
      >
        <div className="flex flex-col items-center text-center gap-4 pt-10">
          <div>
            <h2 className="text-2xl ">MENU</h2>
          </div>
          <ul className=" flex flex-col gap-4 text-xl">
            <li>Home</li>
            <li>Our Rooms</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
          <div>
            <ul className="flex gap-2">
              <li>
                <img src="/icon/ar.png" width={30} alt="france icon"></img>
              </li>
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
