import React from 'react';
import { Main } from '../../layout/Main/Main';
import { ItemCart } from '../../components/ItemCart/ItemCart';

export const EnglishLevel = () => {
  return (
    <Main style='w-auto h-full overflow-x-hidden'>
      {/* Sección de título */}
      <section className="bg-gray-100 text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Mi Nivel de Inglés A2</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          En esta sección, te presento mis habilidades en inglés, que he desarrollado a lo largo de los años, tanto en el ámbito académico como profesional.
        </p>
      </section>

      {/* Sección de habilidades */}
      <section className="max-sm:h-full my-10 max-w-7xl flex-grow mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 justify-items-center lg:grid-cols-3 gap-5">
        {/* Comprensión Oral */}
        <ItemCart
          title="Comprensión Oral"
          content2="Capacidad Basica para entender conversaciones y audios en inglés."
        />

        {/* Expresión Oral */}
        <ItemCart
          title="Expresión Oral"
          content2="Habilidad basica para mantener conversaciones"
        />

        {/* Escritura */}
        <ItemCart
          title="Escritura"
          content2="Experiencia basica escribiendo correos electrónicos, informes y otros documentos en inglés."
        />

        {/* Lectura */}
        <ItemCart
          title="Lectura"
          content2="Capacidad para leer y entender textos Intermedios en inglés."
        />

        {/* Traducción */}
        <ItemCart
          title="Traducción"
          content2="Habilidad Basica para traducir textos entre inglés y español, manteniendo el contexto y la coherencia de las ideas."
        />
      </section>
    </Main>
  );
};