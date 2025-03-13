import React from 'react'
import { ItemText } from '../../components/Text/ItemText';
import { Main } from '../../layout/Main/Main';
import { ItemCart } from '../../components/ItemCart/ItemCart';

export const SocialAbilities = () => {
  return (
    <Main style='w-auto h-full overflow-x-hidden'>
      <div className='xl:grid-cols-3 max-sm:gap-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 mt-10 px-4 sm:px-10 w-full h-auto content-center justify-items-center'>
        <ItemCart content2='Comunicación Eficaz:
Considero que la comunicación es una de mis fortalezas. Me esfuerzo por expresar mis ideas de manera clara y respetuosa, tanto de forma verbal como no verbal. Sé escuchar activamente, lo que me permite comprender mejor las necesidades de los demás y responder de manera adecuada.' />
        
        <ItemCart content2='Empatía:
Me gusta ponerme en el lugar de los demás. La empatía me permite conectar de manera genuina con las personas, entender sus emociones y brindarles apoyo cuando lo necesitan. Esto ha sido fundamental para construir relaciones fuertes y saludables tanto en lo personal como en lo profesional.' />
        
        <ItemCart content2='Trabajo en Equipo:
Me siento cómodo colaborando con otros para alcanzar objetivos comunes. Valoro las opiniones de mis compañeros y siempre busco soluciones en conjunto. Disfruto de los desafíos que surgen al trabajar en equipo, y trato de aportar lo mejor de mí para el bienestar del grupo.' />
        
        <ItemCart  content2='Resolución de Conflictos:
Sé cómo manejar situaciones de tensión o desacuerdo de manera constructiva. Mi enfoque está en escuchar ambas partes, identificar puntos de consenso y trabajar hacia una solución que beneficie a todos. Me esfuerzo por mantener un ambiente positivo y colaborativo.' />
        
        <ItemCart content2='Adaptabilidad:
La capacidad de adaptarme a nuevas situaciones y ambientes es una de mis principales habilidades. No me asusta el cambio; al contrario, lo considero una oportunidad para aprender y crecer. Esta flexibilidad me permite relacionarme con diversas personas y contextos sin dificultades.' />
        
        <ItemCart content2='Gestión de Relaciones Interpersonales:
Me esfuerzo por mantener relaciones saludables, basadas en la confianza y el respeto mutuo. Soy consciente de la importancia de ofrecer apoyo cuando es necesario y de ser agradecido. Estas relaciones me han permitido crecer tanto a nivel personal como profesional, creando un entorno positivo alrededor de mí.' />
      </div>
    </Main>
  );
}
