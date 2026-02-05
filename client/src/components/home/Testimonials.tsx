export default function Testimonial() {
  return (
    <section className="relative h-100 w-full overflow-hidden">
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
      <div className="relative z-10 mx-auto flex h-full max-w-4xl items-center px-6">
        <div className="max-w-xl text-white">
          <h2 className="mb-6 text-5xl font-medium uppercase leading-tight tracking-wide md:text-5xl">
            What People Say <br /> About Us
          </h2>

          <span className=" block text-5xl text-teal-400">“</span>

          <p className="mb-8 text-xs font-medium leading-7 text-white/90 md:text-xs ">
            Sed Fringilla Mauris Sit Amet Nibh. Donec Sodales Sagittis Magna.
            Sed Consequat, Leo Eget Bibendum Sodales, Augue Velit Cursus Nunc,
            Quis Gravida Magna Mi A Libero.
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
