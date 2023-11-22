import React from 'react'

type Props = {
    title:String
}

function Title({title}: Props) {
  return (
    <h1 className="text-5xl max-w-4xl ">{title}</h1>
  )
}

export default Title