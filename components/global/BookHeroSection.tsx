import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Plus,Minus } from 'lucide-react'
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
        <PopoverContent>
            <div>
                <div className="py-4 px-2 flex justify-between items-center">
                <h4>Adults</h4>
                <div className="flex gap-4 items-center">
                    <Button size="icon" variant={"outline"}><Minus/></Button>
                    <div>6</div>
                    <Button size="icon" variant={"outline"}><Plus/></Button>
                </div>
                </div>
                <div className="py-4 px-2 flex justify-between items-center">
                <h4>children</h4>
                <div className="flex gap-4 items-center">
                    <Button size="icon" variant={"outline"}><Minus/></Button>
                    <div>6</div>
                    <Button size="icon" variant={"outline"}><Plus/></Button>
                </div>
                </div>
            </div>
        </PopoverContent>
      </Popover>

      <Button className="h-full px-12 text-lg">Book</Button>
    </div>
  );
};

export default BookHeroSection;
