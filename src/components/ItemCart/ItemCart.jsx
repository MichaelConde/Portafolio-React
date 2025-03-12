import React from 'react'
import { ItemText } from '../Text/ItemText'
export const ItemCart = ({content2}) => {
  return (
    <div className='p-10 rounded-xl shadow-xl  w-100'>
    <ItemText content={content2}></ItemText>
    </div>
  )
}
