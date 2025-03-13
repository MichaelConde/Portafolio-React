  import React from 'react';
  import { ItemText } from '../../components/Text/ItemText';
  import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
  import img from '../../assets/ImgComponent/Colegio2.png';
  import { Main } from '../../layout/Main/Main';
  import { PiStudentBold } from "react-icons/pi";
  import { FaLaptopCode } from "react-icons/fa";
  export const Studies = () => {
    return (
      
        <Main style="h-full flex justify-center px-4 sm:px-6 md:px-8">
        
          <div className="shadow-xl w-full sm:w-auto h-auto mt-20 p-4 rounded-lg">
          
            <ImgComponent component={img} style="w-full h-auto rounded-lg" />
            
            <ul className='flex flex-col text-[30px] '>
              <li className='mb-15 mt-10'>  <PiStudentBold />Bachillerato: Institucion Educativa Marcelino Champagnat</li>
              <li> <FaLaptopCode /> Tecnico en Programacion de software: Institucion Educativa Marcelino Champagnat</li>
            </ul>
          </div>
        </Main>
      
    );
  };
