export const AboutUs = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-wide text-[#0b1a33]">
            ABOUT US
          </h2>

          {/* underline */}
          <div className="mt-3 h-0.75 w-16 bg-yellow-400" />

          <p className="mt-8 text-base leading-relaxed text-[#1f2a44]">
            Midnapore Swimming Club (MSC), a pioneer in the field aquatics, was
            established way back on 15th August 1948 by Sri Rajaram Sahu, Pravat
            Chandra, Rabindranath Bose, Lalmohan Mukherjee, Sibaji Singh,
            Basanta Barman, Mantu Banerjee at Kella Pukur(Kelka pond), Colonel
            gola, Midnapore. Thereafter the club was moved to Rajar Pukur,
            Colonel gola and during summer swimmers used to practice in Saha
            Pukur due to lesser water in Rajar Pukur. And in the year 1975, the
            Midnapore Swimming Club was moved to its present premises at
            Keranitola.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">
          <img
            src="/pool.webp" // put image in public/
            alt="Midnapore Swimming Club Pool"
            className="w-full rounded-xl object-cover shadow-md"
          />

          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Since 1948 till today, Midnapore Swimming Club has demonstrated
            itself to be one of the best institutions of aquatic talents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
