export default function GalleryPage() {
  const images = [
    "/gallery-1.webp",
    "/gallery-2.webp",
    "/pool.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
    "/gallery/7.webp",
    "/gallery/8.webp",
    "/gallery/9.webp",
    "/gallery/10.webp",
    "/gallery/11.webp",
    "/gallery/12.webp",
    "/gallery/13.webp",
    "/gallery/14.webp",
    "/gallery/15.webp",
    "/gallery/16.webp",
    "/gallery/17.webp",
    "/gallery/18.webp",
    "/gallery/19.webp",
    "/gallery/20.webp",
  ];

  return (
    <section className="min-h-screen bg-[#eef9fa] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Masonry layout */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid overflow-hidden rounded-md bg-white"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
