import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {};

const BookHeroSection = (props: Props) => {
  return (
    <div className="flex-1 text-foreground p-2 flex gap-2 h-[70px] max-w-2xl bg-[#fff3] ">
      <Input className="h-full text-lg" type="date" />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="h-full px-12 text-lg">
            Guestes
          </Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

      <Button className="h-full px-12 text-lg">Book</Button>
    </div>
  );
};

export default BookHeroSection;
