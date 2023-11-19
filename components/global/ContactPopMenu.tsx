import React from 'react';
import { ChevronDown } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

type Props = {};

export default function ContactPopMenu({}: Props) {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        Contact <ChevronDown />
      </PopoverTrigger>
      <PopoverContent>
        <ul className="flex flex-col gap-2  [&>li:hover]:underline [&>li]:cursor-pointer ">
          <li>+212664722488</li>
          <hr />
          <li>contact@lebledgre.com</li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
