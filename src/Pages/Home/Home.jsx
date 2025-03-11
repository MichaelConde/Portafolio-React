import React from 'react';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/images.jpg';
import { ItemText } from '../../components/Text/ItemText';

export const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col md:flex-row md:justify-between md:items-center">

        <div className="md:ml-20 text-center md:text-left p-4">
          <h1 className="text-4xl md:text-5xl mb-6">Hola mi nombre es Michael</h1>

          <ItemText 
            style="text-base md:text-lg" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos quas culpa sequi iste ullam aut explicabo fugiat iusto similique dolorum, numquam, consectetur est neque dicta. Placeat eos voluptas doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio iusto fugiat a error saepe nemo odio dignissimos molestiae quis earum reprehenderit iure quam fuga ex itaque accusantium placeat corporis." 
          />
        </div>

        <ImgComponent component={img} style="h-auto md:h-81 p-4 md:p-10 ml-0 md:ml-20 mt-4 md:mt-0" />
      </div>
    </>
  );
}

