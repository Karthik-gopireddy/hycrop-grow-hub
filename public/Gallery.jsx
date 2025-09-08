import React from 'react';

function Gallery() {
  return (
    <section className="text-gray-700 body-font bg-green-50">
      <div className="container px-5 py-20 mx-auto flex flex-col">
        {/* Heading */}
        <div className="w-full mb-12 text-center">
          <h1 className="text-3xl font-bold title-font text-green-900 mb-4">
            Our Product Gallery
          </h1>
          <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-600">
            Browse some of our best-selling organic fertilizers, eco-friendly pesticides, and agricultural solutions that promote healthy, sustainable farming.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap md:-m-2 -m-1">
          {/* Left Grid */}
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Organic Fertilizer"
                className="w-full h-full object-cover object-center rounded"
                src="./g1.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Bio Pesticide"
                className="w-full h-full object-cover object-center rounded"
                 src="./g2.png"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="Farm Field Application"
                className="w-full h-full object-fit object-center rounded"
                src="./g5.png"
              />
            </div>
          </div>

          {/* Right Grid */}
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="Healthy Crop Field"
                className="w-full h-full object-fit object-center rounded"
                src="./g4.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Compost Fertilizer"
                className="w-full h-full object-fit object-center rounded"
             src="./g3.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Spraying Equipment"
                className="w-full h-full object-fit object-center rounded"
                 src="./g6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
