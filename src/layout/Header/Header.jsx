import React, { useState } from "react";
import { Navbar } from '../Navbar/Navbar';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/Proyectonuevo-Photoroom.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 flex w-full h-[5rem] bg-teal-600 items-center justify-between px-6 py-4 text-white shadow-md">
      
      <ImgComponent component={img} style="h-20 sm:h-32" />

      {/* Botón hamburguesa para pantallas pequeñas */}
      <button 
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navbar */}
      <Navbar>
        <ul
          className={`flex items-center space-x-8 md:flex ${isOpen ? 'flex-col md:flex-row' : 'hidden'} md:flex-row max-md:absolute max-md:top-[4.1rem] max-md:left-0 max-md:bg-teal-600 max-md:w-full max-md:py-4 max-md:shadow-lg max-md:transition-all max-md:duration-300`}
        >
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
