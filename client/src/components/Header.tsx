import Navbar from "./Navbar";

export default function Header() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/pool.jpg')", // put image in public/
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003d5b]/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight text-orange-400 md:text-6xl">
            MIDNAPORE
            <br />
            SWIMMING
            <br />
            CLUB
          </h1>

          <button className="mt-8 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Bottom geometric slope separator */}
      <div className="absolute bottom-0 left-0 w-full leading-0 pointer-events-none">
        {/* <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[180px] md:h-[300px]"
        >
          <path
            fill="#ffffff"
            d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,128C840,139,960,213,1080,224C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> */}
        <div className="absolute bottom-0 left-0 w-full leading-0">
          <svg
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            className="w-full h-60 md:h-75"
          >
            <path
              fill="#ffffff"
              d="M0,176L60,197.3C120,219,240,261,360,256C480,251,600,197,720,208C840,219,960,293,1080,304C1200,315,1320,261,1380,234.7L1440,208L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
