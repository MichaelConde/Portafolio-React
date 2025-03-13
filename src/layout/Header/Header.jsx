import React, { useState } from "react";
import { Navbar } from '../Navbar/Navbar';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/Proyectonuevo-Photoroom.png';
import menu from '../../assets/ImgComponent/Menu.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 z-50 w-full h-[5rem] bg-zinc-100 flex items-center justify-between px-6 py-4 text-black shadow-md">
      <ImgComponent component={img} style="h-20 sm:h-32 max-xl:w-49 h-20" />

      {/* Botón del menú */}
      <button 
        className="md:hidden text-white text-3xl" // Oculta el botón en pantallas md (768px) o más grandes
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        <ImgComponent component={menu} style="h-8 sm:h-12" />
      </button>

      {/* Navbar */}
      <Navbar>  
        <ul
          className={`md:flex md:items-center md:space-x-5 ${
            isOpen 
              ? 'flex flex-col absolute top-[5rem] left-0 bg-zinc-200 w-full py-4 shadow-lg z-50' 
              : 'hidden md:flex' // Oculta el menú en móviles y lo muestra en pantallas md (768px) o más grandes
          }`}
        >
          <ItemNavbar route="/" content="Inicio" />
          <ItemNavbar route="/Skills" content="Habilidades" />
          <ItemNavbar route="/ProfesionalExperience" content="Experiencia Profesional" />
          <ItemNavbar route="/Studies" content="Estudios" />  
          <ItemNavbar route="/SocialAbilities" content="Habilidades Sociales" />
          <ItemNavbar route="/EnglishLevel" content="Nivel de Inglés" />
        </ul>
      </Navbar>
    </header>
  );
};