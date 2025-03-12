import React from 'react';
import { ItemText } from '../../components/Text/ItemText';
import ItemTarjet from '../../components/Tarjet/ItemTarjet';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';
import poyect1 from '../../assets/ImgComponent/Git1.png';

export const ProfesionalExperience = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center px-4 sm:px-6 md:px-8">
        <ItemText
          style="text-center text-[30px] mt-20"
          content="Mi experiencia"
        />
        <div className="w-full max-w-screen-lg mt-10">
          <ItemText
            style="text-center"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto incidunt doloremque laboriosam molestiae non maxime consequuntur illum fugiat quia blanditiis impedit ducimus libero, esse dicta corporis delectus laudantium. Consequatur, libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto incidunt doloremque laboriosam molestiae non maxime consequuntur illum fugiat quia blanditiis impedit ducimus libero, esse dicta corporis delectus laudantium. Consequatur, libero."
          />
        </div>

        {/* Grid layout para las tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 w-full max-w-screen-lg">
          <ItemTarjet
            IMG={poyect1}
            style2="rounded-t-lg"
            content={
              <ItemNavbar
                route="https://github.com/MichaelConde/Cards-Dom/tree/main"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, enim provident, ducimus totam ratione dolorum nobis magni ullam nemo blanditiis eveniet sint aut molestias, facere corporis iste distinctio? Ipsa, harum?"
              />
            }
          />
          <ItemTarjet
            IMG={poyect1}
            style2="rounded-t-lg"
            content={
              <ItemNavbar
                route="https://github.com/MichaelConde/Cards-Dom/tree/main"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, enim provident, ducimus totam ratione dolorum nobis magni ullam nemo blanditiis eveniet sint aut molestias, facere corporis iste distinctio? Ipsa, harum?"
              />
            }
          />
          <ItemTarjet
            IMG={poyect1}
            style2="rounded-t-lg"
            content={
              <ItemNavbar
                route="https://github.com/MichaelConde/Cards-Dom/tree/main"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, enim provident, ducimus totam ratione dolorum nobis magni ullam nemo blanditiis eveniet sint aut molestias, facere corporis iste distinctio? Ipsa, harum?"
              />
            }
          />
          <ItemTarjet
            IMG={poyect1}
            style2="rounded-t-lg"
            content={
              <ItemNavbar
                route="https://github.com/MichaelConde/Cards-Dom/tree/main"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, enim provident, ducimus totam ratione dolorum nobis magni ullam nemo blanditiis eveniet sint aut molestias, facere corporis iste distinctio? Ipsa, harum?"
              />
            }
          />
          <ItemTarjet
            IMG={poyect1}
            style2="rounded-t-lg"
            content={
              <ItemNavbar
                route="https://github.com/MichaelConde/Cards-Dom/tree/main"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, enim provident, ducimus totam ratione dolorum nobis magni ullam nemo blanditiis eveniet sint aut molestias, facere corporis iste distinctio? Ipsa, harum?"
              />
            }
          />
        </div>
      </div>
    </>
  );
};
