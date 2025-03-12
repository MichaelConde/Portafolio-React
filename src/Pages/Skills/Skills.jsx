import React from 'react';
import ItemTarjet from '../../components/Tarjet/ItemTarjet';
import { ItemText } from '../../components/Text/ItemText';

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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> {/* Contenedor principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-20">
        <ItemTarjet
          IMG={img}
          style2="w-50"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
        <ItemTarjet
          IMG={img2}
          style2="w-30"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
        <ItemTarjet
          IMG={img3}
          style2="w-70"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
        <ItemTarjet
          IMG={img4}
          style2="w-50"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
        <ItemTarjet
          IMG={img5}
          style2="w-50"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
        <ItemTarjet
          IMG={img6}
          style2="w-50"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
        <ItemTarjet
          IMG={img7}
          style2="w-50"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
        <ItemTarjet
          IMG={img8}
          style2="w-50"
          content={<ItemText style="p-5" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolorem repellendus illo reprehenderit dolor labore maxime non perferendis eum soluta minima in, consequuntur impedit modi." />}
        />
      </div>
    </div>
  );
};