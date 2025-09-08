import React from "react"

const images = [
  { id: 1, src: "https://picsum.photos/600/400?random=1", alt: "Image 1" },
  { id: 2, src: "https://picsum.photos/600/400?random=2", alt: "Image 2" },
  { id: 3, src: "https://picsum.photos/600/400?random=3", alt: "Image 3" },
  { id: 4, src: "https://picsum.photos/600/400?random=4", alt: "Image 4" },
  { id: 5, src: "https://picsum.photos/600/400?random=5", alt: "Image 5" },
  { id: 6, src: "https://picsum.photos/600/400?random=6", alt: "Image 6" },
  { id: 7, src: "https://picsum.photos/600/400?random=7", alt: "Image 7" },
  { id: 8, src: "https://picsum.photos/600/400?random=8", alt: "Image 8" },
]

const ImageGallery = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Image Gallery
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
