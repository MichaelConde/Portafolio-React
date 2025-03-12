import React from 'react';
import { ImgComponent } from '../../assets/ImgComponent/ImgComponent';
import img from '../../assets/ImgComponent/images.jpg';
import { ItemText } from '../../components/Text/ItemText';

export const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col md:flex-row md:justify-between md:items-center px-4 md:px-8 lg:px-10">

        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Hola mi nombre es Michael
          </h1>

          <ItemText 
            style="text-sm md:text-base lg:text-lg" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eos quas culpa sequi iste ullam aut explicabo fugiat iusto similique dolorum, numquam, consectetur est neque dicta. Placeat eos voluptas doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio iusto fugiat a error saepe nemo odio dignissimos molestiae quis earum reprehenderit iure quam fuga ex itaque accusantium placeat corporis." 
          />
        </div>

        <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center">
          <ImgComponent 
            component={img} 
            style="w-full max-w-md h-auto p-4 md:p-10 ml-0 md:ml-10" 
          />
        </div>
      </div>
    </>
  );
}
