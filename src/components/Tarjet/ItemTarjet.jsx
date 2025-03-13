import React from 'react'
import { ItemText } from '../Text/ItemText'
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent'

export default function Tarjet({content,IMG,style2}) {
  return (
    <div className='flex flex-col max-w-80 shadow-xl rounded-xl h-full  items-center justify-center text-center hover:bg-zinc-300 focus:outline-2 focus:outline-offset-2 active:bg-zinc-400'>
    <ImgComponent component={IMG} style={style2}></ImgComponent>
      {content}
  
    </div>
  )
}
