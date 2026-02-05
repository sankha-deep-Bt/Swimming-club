import { ChevronRight, Dumbbell } from "lucide-react";

const Equipments = () => {
  const facilityList = [
    "Weight Loss/ Management",
    "Toning & Sculpting",
    "Resistance Training",
    "Muscle Building",
    "Mobility / Flexibility",
    "Swimming Pool Activity",
    "Water Polo",
    "Speed, Strength, Power Development",
    "Competetive Coaching",
    "Nutritional Advice",
  ];

  return (
    <div className="w-full">
      {/* --- Section 1: Top Notch Equipments (The List) --- */}
      <section className="bg-[#5a84c3] py-16 text-white">
        <div className="container mx-auto max-w-5xl px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-start">
            <div className="space-y-6">
              <div className="relative">
                <h1 className=" text-5xl font-medium uppercase leading-none text-[#ff9100]">
                  TOP NOTCH <br /> FACILITIES
                </h1>
                <div className="h-1 w-20 bg-yellow-400 mt-6"></div>
              </div>
              <p className="text-gray-100 text-sm  leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                possimus nisi suscipit sapiente enim blanditiis odio laborum.
                Explicabo aliquid eveniet repellat aliquam aut dolor a facilis
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              {facilityList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center group cursor-default"
                >
                  <ChevronRight className="w-3 h-3 text-yellow-400 mr-3 shrink-0" />
                  <span className="text-xs font-medium group-hover:text-yellow-200 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Visual Highlights (The Swimmer & Gym) --- */}
      <section className="relative h-100 flex items-center overflow-hidden">
        {/* Background with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.80), rgba(30, 58, 138, 0.80)), url('bg1.webp')`,
          }}
        ></div>

        <div className="container max-w-5xl mx-auto px-6 lg:px-24 relative z-10 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
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

              {/* Gym Block */}
              <div className="flex gap-6">
                <div className="shrink-0 flex flex-col items-center">
                  <Dumbbell className="w-12 h-12 text-orange-500" />
                  <span className="text-orange-500 font-black mt-2 text-sm uppercase tracking-widest">
                    Gym
                  </span>
                </div>
                <div className="border-l border-gray-500 pl-6 self-center">
                  <p className="text-white text-sm md:text-base max-w-xs font-light">
                    A state of the art facility where people can train, do
                    weight management and work on their physique.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: The Swimmer in Red Circle */}
            <div className="relative flex justify-center items-center w-full md:w-1/2">
              {/* The Big Red Ring */}
              <div className="relative w-100 h-64 md:w-100 md:h-96 rounded-full border-30 md:border-70 border-[#ff3d2e] flex items-center justify-center">
                {/* Swimmer Image - Masked/Overflowing */}
                <img
                  src="swimmer.webp"
                  alt="Swimmer"
                  className="absolute  w-auto h-auto z-20 translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipments;
