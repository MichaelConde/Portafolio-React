import React from 'react';
import ItemTarjet from '../../components/Tarjet/ItemTarjet';
import { ItemText } from '../../components/Text/ItemText';
import { Main } from '../../layout/Main/Main';

import img from '../../assets/ImgComponent/html.png';
import img2 from '../../assets/ImgComponent/CSS.png';
import img3 from '../../assets/ImgComponent/JavaScript-Logo.png';
import img4 from '../../assets/ImgComponent/java-logo-1.png';
import img5 from '../../assets/ImgComponent/sql.png';
import img6 from '../../assets/ImgComponent/Git_icon.svg.png';
import img7 from '../../assets/ImgComponent/scum2.jpg';
import img8 from '../../assets/ImgComponent/Visual.png';

export const Skills = () => {
  return (
    <Main style="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-20">
        <ItemTarjet
          IMG={img}
          style2="w-50 "
          content={<ItemText style="p-5" content="Conocimiento sólido en la creación de la estructura de páginas web utilizando HTML5, aplicando las mejores prácticas para una correcta semántica y accesibilidad." />}
        />
        <ItemTarjet
          IMG={img2}
          style2="w-30"
          content={<ItemText style="p-5" content="Dominio en la creación de diseños visuales responsivos utilizando CSS3, con experiencia en el uso de herramientas modernas como Flexbox y Grid para la creación de layouts flexibles y adaptables a diferentes tamaños de pantalla. " />}
        />
        <ItemTarjet
          IMG={img3}
          style2="w-70"
          content={<ItemText style="p-5" content="Dominio de los conceptos básicos de JavaScript, como manipulación del DOM, eventos, funciones, objetos, arrays y la integración con APIs para crear experiencias interactivas en la web." />}
        />
        <ItemTarjet
          IMG={img4}
          style2="w-50"
          content={<ItemText style="p-5" content="Experiencia con la sintaxis de Java, creando programas simples, comprensión de clases, objetos, métodos y estructuras de control. Familiaridad con conceptos básicos de programación orientada a objetos (OOP)." />}
        />
        <ItemTarjet
          IMG={img5}
          style2="w-50"
          content={<ItemText style="p-5" content="Capacidad para escribir consultas SQL para interactuar con bases de datos relacionales, con conocimientos en operaciones como SELECT, JOIN, INSERT, UPDATE y DELETE, así como diseño básico de esquemas de bases de datos." />}
        />
        <ItemTarjet
          IMG={img6}
          style2="w-50"
          content={<ItemText style="p-5" content="Uso básico de Git para control de versiones, incluyendo la capacidad para clonar repositorios, realizar commits, manejar ramas y trabajar con flujos de trabajo comunes en Git, como pull requests y merges." />}
        />
        <ItemTarjet
          IMG={img7}
          style2="w-50"
          content={<ItemText style="p-5" content="Conocimiento en el trabajo en equipo bajo el marco de trabajo ágil Scrum, participando en reuniones diarias (daily standups), sprints, planificación de tareas y revisiones de progreso. Colaboración eficaz con otros desarrolladores y equipos." />}
        />
        <ItemTarjet
          IMG={img8}
          style2="w-50"
          content={<ItemText style="p-5" content="Uso de Visual Studio Code como editor de código, aprovechando sus extensiones y características como autocompletado, depuración y control de versiones integrado con Git para mejorar la productividad y la calidad del código." />}
        />
      </div>
    </Main>
  );
};