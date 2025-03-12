import React from 'react';
import { ItemText } from '../../components/Text/ItemText';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/Colegio2.png';

export const Studies = () => {
  return (
    <>
      <div className="h-full flex justify-center px-4 sm:px-6 md:px-8">
       
        <div className="shadow-xl w-full sm:w-auto h-auto mt-20 p-4 rounded-lg">
         
          <ImgComponent component={img} style="w-full h-auto rounded-lg" />
          
         
          <ItemText 
            style="whitespace-pre-line text-center text-[30px] sm:text-[40px] md:text-[50px] mt-6"
            content="Bachillerato: Institucion Educativa Marcelino Champagnat
            Técnico Programación de software: Institución Educativa Marcelino Champagnat"
          />
        </div>
      </div>
    </>
  );
};
