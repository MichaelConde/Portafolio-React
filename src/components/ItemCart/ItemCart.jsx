import React from 'react'
import { ItemText } from '../Text/ItemText'
export const ItemCart = ({content2}) => {
  return (
    <div className='bg-gray-200 p-10 rounded-xl shadow-xl  w-100 max-sm:mb-10 max-sm:w-50'>
    <ItemText content={content2}></ItemText>
    </div>
  )
}
