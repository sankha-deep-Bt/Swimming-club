import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden md:h-[125vh]">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.webp')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003d5b]/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full ">
        <div className="mx-auto w-full px-6">
          <div className="max-w-4xl md:ml-32 lg:ml-40">
            <h1 className="mt-40 text-6xl font-bold leading-tight text-orange-400 md:text-9xl">
              MIDNAPORE
              <br />
              SWIMMING
              <br />
              CLUB
            </h1>
            <Link to="/contact">
              <button className="mt-7 font-medium rounded-sm bg-orange-400 px-8 py-4 text-xs  text-black transition hover:bg-orange-400">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="w-full h-60 md:h-72"
        >
          <path
            fill="#ffffff"
            d="M0,176L60,197.3C120,219,240,261,360,256C480,251,600,197,720,208C840,219,960,293,1080,304C1200,315,1320,261,1380,234.7L1440,208L1440,400L0,400Z"
          />
        </svg>
      </div>
    </section>
  );
}
