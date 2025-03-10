import React from 'react'
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent'
import img from '../../assets/ImgComponent/images.jpg'
export const Home = () => {
  return (
   
    <div className='w-[100vw] h-[100vh]'>
    
    <h1 className='text-[60px] ml-200'>Titulo X</h1>

    <ImgComponent component={img} style='h-100 p-10 ml-160' />
    
     </div>
    

  )
}

