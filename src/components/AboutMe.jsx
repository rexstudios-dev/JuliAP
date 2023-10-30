import React from 'react';
//si no rompen nada joya
function AboutMe() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 font-serif">Sobre Mí</h2>
        <p className="text-lg font-normal text-gray-600 mb-6">
          ¡Hola! Soy Julieta Hernández, una fotógrafa apasionada con sede en Palermo, Ciudad Autónoma de Buenos Aires.
        </p>
        <p className="text-lg font-normal text-gray-600 mt-4">
          A pesar de los desafíos que enfrento debido a mi discapacidad, he dedicado mi vida a la fotografía y he participado en exposiciones locales, mostrando mi creatividad y talento.
        </p>
        <p className="text-lg font-normal text-gray-600 mt-4">
          Mi sueño es ser reconocida por mi trabajo en la fotografía y demostrar que las personas con discapacidades pueden alcanzar sus metas profesionales. ¡Gracias por visitar mi portafolio!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
