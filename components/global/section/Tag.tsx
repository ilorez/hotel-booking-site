import React from 'react'

type Props = {
    tag:String
}

function Tag({tag}: Props) {
    return (
        <div className=" flex gap-4 items-center">
            <div className="w-[100px] border-y border-current opacity-50"></div>
            <div className="text-lg">{tag}</div>
        </div>
    )
}

export default Tag