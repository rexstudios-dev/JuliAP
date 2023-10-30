import React from 'react';

function Gallery() {
  // aca van gil
  const galleryImages = [
    {
      id: 1,
      src: '/images/image1.jpg',
      alt: 'Retrato de una modelo',
      description: 'Esta imagen captura la elegancia de una modelo en una sesión de fotos de moda.',
    },
    {
      id: 2,
      src: '/images/image2.jpg',
      alt: 'Paisaje urbano de la ciudad',
      description: 'Una vista panorámica de la ciudad al atardecer, con rascacielos y luces brillantes.',
    },
    {
      id: 3,
      src: '/images/image3.jpg',
      alt: 'Flor en primer plano',
      description: 'Detalle de una hermosa flor con colores vibrantes y detalles delicados.',
    },
    {
      id: 4,
      src: '/images/image4.jpg',
      alt: 'Fotografía de comida gourmet',
      description: 'Una deliciosa creación culinaria con una presentación artística en un elegante restaurante.',
    },
    {
      id: 5,
      src: '/images/image5.jpg',
      alt: 'Paisaje natural montañoso',
      description: 'Vistas impresionantes de montañas cubiertas de nieve y un cielo azul claro.',
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
