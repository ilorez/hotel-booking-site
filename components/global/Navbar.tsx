import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import NavbarSheet from "./NavbarSheet";
import ContactPopMenu from "./ContactPopMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-b h-[80px] p-[0.1rem] z-50 bg-[#0002] fixed w-full top-0 left-0">
      <div className="container h-full flex text-white mx-auto">
        <div className="w-[250px] flex h-full border-x">
          <NavbarSheet />
          <div className="h-full flex-1 flex justify-center items-center border-l text-lg">
            <ContactPopMenu />
          </div>
        </div>
        <div className="h-full flex-1 flex justify-center items-center text-2xl">
          <span>L</span>ebledegre
        </div>
        <div className="w-[250px] bg-transparent h-full border-x ">
          <Button
            variant={"outline"}
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
