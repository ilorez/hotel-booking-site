import React from 'react'

type Props = {desc:String}

function Desc({desc}: Props) {
  return (
    <p className="text-lg max-w-5xl ">{desc}</p>
  )
}

export default Desc