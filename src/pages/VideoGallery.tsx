import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Nature Video 1",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Nature Video 2",
  },
  {
    id: 3,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Nature Video 3",
  },
  {
    id: 4,
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Nature Video 4",
  },
];

const VideoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + videos.length) % videos.length : null
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % videos.length : null
    );

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold text-center mb-8"> Video Gallery</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => openModal(index)}
          >
            {/* Thumbnail (using <video> poster frame) */}
            <video
              src={video.src}
              className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-transform"
              muted
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-medium">{video.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          <video
            src={videos[selectedIndex].src}
            controls
            autoPlay
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-lg"
          />

          <button
            onClick={showNext}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
