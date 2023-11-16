import React from "react";
import { ChevronDown } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {};

export default function ContactPopMenu({}: Props) {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        Contact <ChevronDown />
      </PopoverTrigger>
      <PopoverContent>
        <ul className="flex flex-col gap-2  [&>li]:cursor-pointer ">
          <li className="hover:underline ">+212 0000000000</li>
          <hr />
          <li className="hover:underline ">contactus@led.com</li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
