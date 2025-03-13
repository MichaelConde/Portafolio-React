import React from 'react';
import { ItemText } from '../../components/Text/ItemText';
import ItemTarjet from '../../components/Tarjet/ItemTarjet';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';
import poyect1 from '../../assets/ImgComponent/PreyectoRick.png';
import poyect2 from '../../assets/ImgComponent/Atlas.png';
import poyect3 from '../../assets/ImgComponent/Reproductor.png';
import poyect4 from '../../assets/ImgComponent/JavaEn.png';
import { Main } from '../../layout/Main/Main';
export const ProfesionalExperience = () => {
  return (
    
      <Main style="h-full flex overflow-x-hidden flex-col items-center px-4 sm:px-6 md:px-8">
        <ItemText
          style="text-center text-[30px] mt-20"
          content="Mi experiencia"
        />
        <div className="w-full max-w-screen-lg mt-10">
          <ItemText
            style="text-center"
            content="En este apartado encontrarás una selección de proyectos en los que he trabajado, cada uno reflejando mis habilidades y dedicación. Desde el diseño de páginas web interactivas hasta el desarrollo de aplicaciones funcionales, cada uno de estos trabajos es una muestra de mi aprendizaje y crecimiento profesional. A través de estos proyectos, he aplicado tecnologías como HTML, CSS, JavaScript, React, y más, buscando siempre mejorar la experiencia de usuario y la calidad del código. ¡Explora y descubre lo que he creado!"
          />
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 w-full max-w-screen-lg">
          <ItemTarjet
            IMG={poyect1}
            style2="rounded-t-lg"
            content={
              <ItemNavbar
                route="https://michaelconde.github.io/Api-Rick-and-Morty-JS/"
                content="Este proyecto se basa en el consumo de Apis, en este caso es una api de la serie RICK AND MORTY, donde se encuentra alguna informacion de sus personajes"
              />
            }
          />
          <ItemTarjet
            IMG={poyect2}
            style2="rounded-t-lg"
            content={
              <ItemNavbar
                route="https://michaelconde.github.io/Proyecto-Atlas/"
                content="Este proyecto es una maquetacion web agradable a la vista, completamente responsive para diferentes dispositivos y pantallas hecho con HTML5 y CSS3"
              />
            }
          />
          <ItemTarjet
            IMG={poyect3}
            style2="rounded-t-lg h-full"
            content={
              <ItemNavbar
                route="https://michaelconde.github.io/Reproductor-js/"
                content="Este proyecto es un reproductor musical completamente funcional, hecho completamente con JavaScript y DOM"
              />
            }
          />
          <ItemTarjet
            IMG={poyect4}
            style2="rounded-t-lg h-full"
            content={
              <ItemNavbar
                route="https://github.com/MichaelConde/Encapsulaci-n-Java"
                content="Este es un proyecto hecho con Java, fue hecho con encapsulamiente y orientado a objetos"
              />
            }
          />
        </div>
      </Main>
  );
};
