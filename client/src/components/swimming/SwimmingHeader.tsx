const SwimmingHeader = () => {
  return (
    <section className="relative min-h-100 flex items-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('your-club-night-bg.jpg')`,
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Icons and Descriptions */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Swimming Pool Block */}
            <div className="flex gap-6">
              <div className="shrink-0 flex flex-col items-center">
                {/* <Swimmer className="w-12 h-12 text-orange-500" /> */}
                <span className="text-orange-500 font-black mt-2 text-sm uppercase tracking-widest">
                  Swimming Pool
                </span>
              </div>
              <div className="border-l border-gray-500 pl-6 self-center">
                <p className="text-white text-sm md:text-base max-w-xs font-light">
                  A one stop destination of aquatic talents. Our students went
                  to domestic as well as State competition.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Swimmer in Red Circle */}
          <div className="relative flex justify-center items-center w-full md:w-1/2">
            {/* The Big Red Ring */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-30 md:border-50 border-[#ff3d2e] flex items-center justify-center">
              {/* Swimmer Image - Masked/Overflowing */}
              <img
                src="swimmer.webp"
                alt="Swimmer"
                className="absolute bottom-0 w-[80%] h-auto z-20 translate-y-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwimmingHeader;
