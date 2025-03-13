import React from 'react';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/images.jpg';
import { ItemText } from '../../components/Text/ItemText';
import { Main } from '../../layout/Main/Main';
export const Home = () => {
  return (
    
      <Main style="w-full h-screen flex justify-center items-center flex-col md:flex-row md:justify-between md:items-center px-4 md:px-8 lg:px-10">

        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Hola mi nombre es Michael
          </h1>

          <ItemText 
            style="text-sm md:text-base lg:text-lg" 
            content="Aprendiz SENA con conocimientos en desarrollo web y programación, con un enfoque en tecnologías como JavaScript, Java, HTML, CSS, React y Python. Posee una comprensión sólida de bases de datos relacionales, con capacidad para diseñar, consultar y administrar datos. Con una mentalidad proactiva y habilidades técnicas en constante crecimiento, está preparado para enfrentar desafíos en el desarrollo de aplicaciones web y soluciones de software, buscando siempre mejorar y ampliar su experiencia." 
          />
        </div>

        <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center">
          <ImgComponent 
            component={img} 
            style="w-full max-w-md h-auto p-4 md:p-10 ml-0 md:ml-10" 
          />
        </div>
      </Main>
    
  );
}
