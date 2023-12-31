import React from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Plus, Minus } from "lucide-react";
import { DatePickerWithRange } from "./DatePickerWithRange";
type Props = {};

const BookHeroSection = (props: Props) => {
  return (
    <div className=" text-foreground p-1 flex gap-1 h-[70px] w-fit bg-[#fff8] ">
      <DatePickerWithRange />
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
                <Button size="icon" variant={"outline"}>
                  <Minus />
                </Button>
                <div>6</div>
                <Button size="icon" variant={"outline"}>
                  <Plus />
                </Button>
              </div>
            </div>
            <div className="py-4 px-2 flex justify-between items-center">
              <h4>children</h4>
              <div className="flex gap-4 items-center">
                <Button size="icon" variant={"outline"}>
                  <Minus />
                </Button>
                <div>6</div>
                <Button size="icon" variant={"outline"}>
                  <Plus />
                </Button>
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
