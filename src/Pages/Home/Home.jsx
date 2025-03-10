import React from 'react';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/images.jpg';
import { ItemText } from '../../components/Text/ItemText';

export const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col sm:flex-row sm:justify-between sm:items-center">

      <div className="sm:ml-20 text-center sm:text-left p-4">

        <h1 className="text-4xl sm:text-5xl mb-6">Hola mi nombre es Michael</h1>

        <ItemText style="text-base sm:text-lg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos quas culpa sequi iste ullam aut explicabo fugiat iusto similique dolorum, numquam, consectetur est neque dicta. Placeat eos voluptas doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio iusto fugiat a error saepe nemo odio dignissimos molestiae quis earum reprehenderit iure quam fuga ex itaque accusantium placeat corporis." />
      </div>

      <ImgComponent component={img} style="h-auto sm:h-81 p-4 sm:p-10 ml-0 sm:ml-20 mt-4 sm:mt-0" />

    </div>
  );
}

