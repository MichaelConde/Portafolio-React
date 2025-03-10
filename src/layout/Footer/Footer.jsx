import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='bg-yellow-100 w-[100vw] h-auto flex justify-center gap-5.5' >
      <p>Desarrollado por <strong>Michael Conde</strong></p>
    <Navbar>
      <ul className='flex gap-2'>
      <ItemNavbar styles='w-10 text-3xl'content={<FaFacebook />} />
      

      <ItemNavbar styles='w-10 text-3xl'content={<FaInstagram />} />
      <ItemNavbar styles='w-10 text-3xl'content={<FaXTwitter />} />
      </ul>
    
      
    </Navbar>
    </footer>
   
  )
}

 