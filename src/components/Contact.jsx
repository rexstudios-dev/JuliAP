import React from 'react';

function Contact() {
  //aca irian los numeors ya las cuentas
  const whatsappNumber = '123456789'; 
  const instagramUsername = 'julieta_photographer'; 

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Contáctame</h2>
        <div className="max-w-md mx-auto">
          <p className="text-gray-600 mb-4">
            Puedes contactarme por WhatsApp o seguirme en Instagram para mantenernos en contacto.
          </p>
          <div className="flex space-x-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 inline-block"
            >
              Contactar por WhatsApp
            </a>
            <a
              href={`https://www.instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600 inline-block"
            >
              Sígueme en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;