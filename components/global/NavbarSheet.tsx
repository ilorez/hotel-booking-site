import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from "../ui/button"

type Props = {}

function NavbarSheet({}: Props) {
return (
<Sheet>
    <SheetTrigger asChild>
        <Button variant={"outline"} className='w-[80px] bg-transparent h-[80px]'><Menu/></Button>
    </SheetTrigger>
  <SheetContent side={"left"} className="">
    <div>
      <div>
        <h1>MENU</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Our Rooms</li>
        <li>Contact</li>
        <li>About us</li>
      </ul>
    </div>
  </SheetContent>
</Sheet>

)
}

export default NavbarSheet