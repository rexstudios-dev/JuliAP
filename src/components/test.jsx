import React from "react";


function Jallery() {

    const importAll = (r) => {

        return r.keys().map(r);

    };

    const images = importAll(require.context('../images', false, /\.(jpg|jpeg|png)$/));

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Galería</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg">
                            <img src={image} alt={`Image ${index}`} className="image-gallery" />
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
}
export default Jallery;