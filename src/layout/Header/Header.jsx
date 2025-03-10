import React from 'react'
import './Header.css'
import   { Navbar }  from '../Navbar/Navbar'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent'
import  img  from '../../assets/ImgComponent/Proyectonuevo-Photoroom.png'


export const Header = () => {
  return ( 
    <header className='header '>
      <ImgComponent component={img} style={'h-50'} />
      <Navbar>
        <ul className='flex gap-5'>
        <ItemNavbar route='/' content='Inicio' />
        <ItemNavbar route='/Skills' content='Habilidades' />
        <ItemNavbar route='/ProfesionalExperience' content='Experiencia Profesional' />
        <ItemNavbar route='/Studies' content='Estudios' />
        <ItemNavbar route='/SocialAbilities' content='Habilidades Sociales' />
        </ul>
      </Navbar>
    </header>
  )
}
