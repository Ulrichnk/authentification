import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function Loading(){
  return (
    <div className='w-full h-full justify-center flex items-center '>
      <BeatLoader/>
    </div>
  )
}

