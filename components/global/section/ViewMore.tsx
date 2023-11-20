import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button' 

type Props = {value:String,src:String}

function ViewMore({value,src}: Props) {
    return (
        <div className="flex gap-2 items-center text-xl cursor-pointer">
            <Button
                size={'icon'}
                variant={'outline'}
                className="w-16 border-[2px] bg-transparent border-current  h-16 rounded-full"
            >
                <ArrowRight />
            </Button>{' '}
            <p >{value}</p>
        </div>
    )
}

export default ViewMore