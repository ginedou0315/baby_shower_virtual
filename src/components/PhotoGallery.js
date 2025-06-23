import React from "react";

function PhotoGallery() {
  const photos = [
    {
      id: 1,
      src: "https://i.ibb.co/N2vHfSx7/pexels-becerragoveaphoto-5769090.jpg",
      alt: "Baby shoes",
      caption: "Tiny shoes for tiny feet 👶",
    },
    {
      id: 2,
      src: "https://i.ibb.co/dwHFw1sv/Baby-clothes.jpg",
      alt: "Baby clothes",
      caption: "Sweet little outfits 👗",
    },
    {
      id: 3,
      src: "https://i.ibb.co/TqWmccSH/IMG-1044.jpg",
      alt: "Baby toys",
      caption: "Ready to play! 🧸",
    },
    {
      id: 4,
      src: "https://i.ibb.co/bgyfJHbw/wall-room.jpg",
      alt: "Nursery setup",
      caption: "Her special room 🌸",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="dancing-script text-4xl md:text-5xl font-bold text-pink-600 mb-6">
            Preparing for Princess 📸
          </h2>
          <p className="text-lg text-gray-700">
            Take a peek at how we're getting ready for our little angel!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-center text-pink-600 font-medium">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className=" inline-block bg-white rounded-full p-6 shadow-lg">
            <div className="row text-6xl text-pink-500">
              <img
                className="col-sm-4"
                src="https://i.ibb.co/Vp90zbVD/IMG-1150.jpg"
              />
              <img
                className="col-sm-4"
                src="https://i.ibb.co/Vp90zbVD/IMG-1150.jpg"
              />
              <img
                className="col-sm-4"
                src="https://i.ibb.co/Vp90zbVD/IMG-1150.jpg"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            More photos coming soon as we prepare for our little one! 💕
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
