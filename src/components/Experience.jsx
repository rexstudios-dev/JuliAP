import React from 'react';

function Experience() {
  const experienceData = [
    {
      title: "Fotografía de Paisajes",
      description: "Captura de paisajes naturales en todo el país. Uso de técnicas de larga exposición para crear imágenes impresionantes.",
      year: "2019",
    },
    {
      title: "Retratos Creativos",
      description: "Sesiones de retratos creativos con un enfoque en la individualidad de cada sujeto. Edición personalizada para resaltar la personalidad de los retratados.",
      year: "2022",
    },
    {
      title: "Fotografía de Eventos",
      description: "Cubrimiento de eventos especiales, incluyendo bodas, conciertos y exposiciones. Captura de momentos únicos para crear recuerdos duraderos.",
      year: "2023",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Experiencia</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-600">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
