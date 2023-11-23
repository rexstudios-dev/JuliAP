import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpg";
import image17 from "../images/image17.jpg";
import image18 from "../images/image18.jpg";
import image19 from "../images/image19.jpg";
import image20 from "../images/image20.jpg";
import image21 from "../images/image21.jpg";
import image22 from "../images/image22.jpg";

function Gallery() {
 
  const galleryImages = [
    {
      id: 1,
      src: `${image1}`,
      alt: 'Retrato de una modelo.',
      description: 'Esta imagen captura la elegancia de una modelo en una sesión de fotos de moda.',
    },
    {
      id: 2,
      src: `${image2}`,
      alt: 'Paisaje urbano de la ciudad.',
      description: 'Una vista panorámica de la ciudad al atardecer, con rascacielos y luces brillantes.',
    },
    {
      id: 3,
      src: `${image3}`,
      alt: 'Flor en primer plano.',
      description: 'Detalle de una hermosa flor con colores vibrantes y detalles delicados.',
    },
    {
      id: 4,
      src: `${image4}`,
      alt: 'Fotografía de comida gourmet.',
      description: 'Una deliciosa creación culinaria con una presentación artística en un elegante restaurante.',
    },
    {
      id: 5,
      src: `${image5}`,
      alt: 'Paisaje natural montañoso.',
      description: 'Vistas impresionantes de montañas cubiertas de nieve y un cielo azul claro.',
    },
    {
      id: 6,
      src: `${image6}`,
      alt: 'Jardin japones.',
      description: 'Una hermosa vista hacia un parque con tematica japonesa.',
    },
    {
      id: 7,
      src: `${image7}`,
      alt: 'Pareja caminando.',
      description: 'Hermosa pareja disfrutando de su dia.',
    },
    {
      id: 8,
      src: `${image8}`,
      alt: 'Perro jugando.',
      description: 'Perro jugando en el parque.',
    },
    {
      id: 9,
      src: `${image9}`,
      alt: 'Dibujo en blanco y negro.',
      description: 'Dibujo echo a mano en blanco y negro.',
    },
    {
      id: 10,
      src: `${image10}`,
      alt: 'Pelicula en casa.',
      description: 'Viendo una pelicula interesante en casa.',
    },
    {
      id: 11,
      src: `${image11}`,
      alt: 'Centro de Palermo.',
      description: 'Paseando por el centro de Palermo.',
    },
    {
      id: 12,
      src: `${image12}`,
      alt: 'Obra de arte o escultura',
      description: 'Fotografía de una obra de arte o escultura.',
    },
    {
      id: 13,
      src: `${image13}`,
      alt: 'Biblioteca Ateneo.',
      description: 'Hermosa biblioteca El Ateneo.',
    },
    {
      id: 14,
      src: `${image14}`,
      alt: 'Foto desde lo alto.',
      description: 'Fotografía de un paisaje urbano desde un punto de vista elevado.',
    },
    {
      id: 15,
      src: `${image15}`,
      alt: 'Rico pastel.',
      description: 'Que ganas de comerme este pastel.',
    },
    {
      id: 16,
      src: `${image16}`,
      alt: 'Frase del dia.',
      description: 'Frase motivadora.',
    },
    {
      id: 17,
      src: `${image17}`,
      alt: 'Arte urbano.',
      description: 'El arte mas urbano que hay.',
    },
    {
      id: 18,
      src: `${image18}`,
      alt: 'La playa.',
      description: 'Unas vacaciones disfrutando del sol.',
    },
    {
      id: 19,
      src: `${image19}`,
      alt: 'Ropa.',
      description: 'Comprando un poco de ropa.',
    },
    {
      id: 20,
      src: `${image20}`,
      alt: 'Comida',
      description: 'Comida en casa.',
    },
    {
      id: 21,
      src: `${image21}`,
      alt: 'Dibujo',
      description: 'Dibujo de Spider-Man en hoja cuadriculada',
    },
    {
      id: 22,
      src: `${image22}`,
      alt: 'Subte',
      description: 'Por tomar el subte.',
    },
   
    // usa imaginacion kevin ponelas aca alas imagenes
  ];
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Galería</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="bg-gray-100 p-4 rounded-lg">
              <img src={image.src} alt={image.alt} className="w-full h-auto" />
              <p className="text-gray-600 mt-2">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
