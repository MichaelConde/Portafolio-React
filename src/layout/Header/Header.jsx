import React, { useState } from "react";
import { Navbar } from '../Navbar/Navbar';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/Proyectonuevo-Photoroom.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" top-0 left-0 z-50 w-full h-[5rem] bg-teal-600 flex items-center justify-between px-6 py-4 text-white shadow-md overflow-hidden">
      <ImgComponent component={img} style="h-20 sm:h-32" />

      {/* Botón hamburguesa para pantallas pequeñas */}
      <button 
        className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navbar */}
      <Navbar>
        <ul
          className={`md:flex md:items-center md:space-x-8 ${
            isOpen 
              ? 'flex flex-col absolute top-[5rem] left-0 bg-teal-600 w-full py-4 shadow-lg z-50' 
              : 'hidden md:flex'
          }`}
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