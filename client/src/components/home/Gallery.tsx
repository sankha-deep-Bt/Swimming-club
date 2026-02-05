import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/gallery/gallery-1.webp",
  "/gallery/gallery-2.webp",
  "/gallery/gallery-3.JPG",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpeg",
  "/gallery/gallery-8.jpeg",
  "/gallery/gallery-9.jpeg",
  "/gallery/gallery-10.jpeg",
  "/gallery/gallery-11.jpeg",
  "/gallery/gallery-12.jpeg",
  "/gallery/gallery-13.jpeg",
  "/gallery/gallery-14.jpeg",
];

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleImages = galleryImages.slice(startIndex, startIndex + 2);

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 2);
    }
  };

  const next = () => {
    if (startIndex + 2 < galleryImages.length) {
      setStartIndex(startIndex + 2);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#4f7fc3] py-16 md:py-24">
      <div className="relative mx-auto max-w-8xl px-6">
        {/* HEADER */}
        <div className="mb-10 md:ml-32 lg:ml-40">
          <h3 className="text-3xl font-bold uppercase text-white md:text-7xl">
            GALLERY
          </h3>
          <div className="mt-3 h-0.5 w-14 bg-emerald-400" />
          <Link to="/gallery">
            <button className="mt-6 inline-block bg-teal-400/90 px-8 py-2 text-sm font-medium uppercase tracking-wide text-white hover:bg-teal-500">
              View More
            </button>
          </Link>
        </div>

        {/* GALLERY SLIDER */}
        <div className="relative flex items-center justify-center gap-6">
          {/* LEFT */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="hidden md:block text-teal-300 hover:text-teal-400 disabled:opacity-40"
          >
            <ChevronLeft size={28} />
          </button>

          {/* IMAGES */}
          <div className="flex items-start ">
            {visibleImages.map((image, index) => (
              <img
                key={image}
                src={`${image}`}
                alt={`Gallery image ${startIndex + index + 1}`}
                className="
                  max-w-104
                  max-h-112
                  rounded-md
                  object-contain
                  shadow-lg
                "
              />
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={next}
            disabled={startIndex + 2 >= galleryImages.length}
            className="hidden md:block text-teal-300 hover:text-teal-400 disabled:opacity-40"
          >
            <ChevronLeft size={28} className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}
