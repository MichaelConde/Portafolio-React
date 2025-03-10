import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/Proyectonuevo-Photoroom.png';

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between w-full h-auto sm:h-24 items-center p-4 bg-zinc-100">
      {/* Imagen */}
      <ImgComponent component={img} style="h-20 sm:h-32" />
      
      {/* Navbar */}
      <Navbar>
        <ul className="flex flex-col sm:flex-row gap-5 sm:gap-8 text-center sm:text-left">
          <ItemNavbar route="/" content="Inicio" />
          <ItemNavbar route="/Skills" content="Habilidades" />
          <ItemNavbar route="/ProfesionalExperience" content="Experiencia Profesional" />
          <ItemNavbar route="/Studies" content="Estudios" />  
          <ItemNavbar route="/SocialAbilities" content="Habilidades Sociales" />
        </ul>
      </Navbar>
    </header>
  );
};
