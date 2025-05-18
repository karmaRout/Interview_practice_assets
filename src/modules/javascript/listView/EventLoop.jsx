import React, { useState } from "react";

const ImageDisplay = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Media Display</h2>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {["/photo_2025-05-19_00-13-18.jpg", "/photo_2025-05-19_00-13-34.jpg"].map((src, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt={`Image ${idx + 1}`}
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* YouTube Video */}
      <a
        href="https://www.youtube.com/watch?si=sscKS4kbdgXmBBNF&v=jS0xtO_NgmE&feature=youtu.be"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-4 inline-block"
        >
        🔗 Click here for more info
        </a>
        <a
        href="https://www.youtube.com/watch?v=j-z8flppvPs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-4 inline-block"
        >
        🔗 Click here for more info
        </a>


      {/* Modal for Zoomed Image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={modalImage}
              alt="Zoomed"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red text-2xl font-bold bg-black bg-opacity-60 px-3 py-1 rounded-full hover:bg-opacity-90"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
