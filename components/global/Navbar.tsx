import React from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='border-b h-[80px] z-50 bg-[#0001] absolute w-full top-0 left-0'>
        <div className='container h-full flex text-white mx-auto'>
            <div className='w-[250px] flex h-full border-r'>
                <Button variant={"outline"} className='w-[80px] bg-transparent h-[80px]'><Menu/></Button>
                <div className='h-full flex-1 flex justify-center items-center'>Contact</div>
            </div>
            <div className='h-full flex-1 flex justify-center items-center text-2xl'>LOGO</div>
            <Button variant={"outline"} className='w-[250px] bg-transparent h-[80px]'>Book now</Button>
        </div>
    </div>
  )
}

export default Navbar