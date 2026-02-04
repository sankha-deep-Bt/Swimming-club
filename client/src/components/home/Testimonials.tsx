export default function Testimonial() {
  return (
    <section className="relative h-162.5 w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg1.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3f4f63]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl text-white">
          <h2 className="mb-8 text-4xl font-extrabold uppercase leading-tight tracking-wide md:text-5xl">
            What People Say <br /> About Us
          </h2>

          <span className="mb-6 block text-5xl text-teal-400">“</span>

          <p className="mb-10 text-sm leading-7 text-white/90 md:text-base">
            Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            quis gravida magna mi a libero.
          </p>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest">
              Britteny Simmons
            </p>
            <p className="text-sm text-white/70">Model</p>
          </div>
        </div>
      </div>
    </section>
  );
}
