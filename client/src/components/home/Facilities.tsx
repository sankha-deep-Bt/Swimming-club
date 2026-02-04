// import { Waves, Dumbbell } from "lucide-react";

// export default function Facilities() {
//   return (
//     <section className="bg-white px-16 py-20">
//       {/* Title */}
//       <h2 className="text-4xl font-bold text-gray-900 mb-12">
//         OUR FACILITIES
//         <span className="block w-16 h-0.75 bg-cyan-500 mt-3"></span>
//       </h2>

//       {/* Grid */}
//       <div className="grid grid-cols-2 gap-6">
//         {/* SWIMMING POOL */}
//         <FlipCard
//           icon={<Waves size={44} />}
//           title="SWIMMING POOL"
//           text="A one stop destination of aquatic talents. Our students went to domestic as well as State competition."
//           bgImage="/images/swimming.jpg"
//         />

//         {/* GYM */}
//         <FlipCard
//           icon={<Dumbbell size={44} />}
//           title="GYM"
//           text="A state of the art facility where people can train, do weight management and work on their physique."
//           bgImage="/images/gym.jpg"
//         />
//       </div>
//     </section>
//   );
// }

// function FlipCard({ icon, title, text, bgImage }: any) {
//   return (
//     <div className="perspective-[1200px] h-60">
//       <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)]">
//         {/* FRONT */}
//         <div className="absolute inset-0 bg-[#4f7fbd]/90 text-white flex flex-col justify-center p-10 [backface-visibility:hidden]">
//           <div className="mb-4">{icon}</div>
//           <h3 className="text-xl font-semibold mb-3">{title}</h3>
//           <p className="text-sm max-w-md">{text}</p>
//         </div>

//         {/* BACK */}
//         <div
//           className="absolute inset-0 text-white flex flex-col justify-center p-10
//                      transform-[rotateX(180deg)] backface-hidden
//                      bg-cover bg-center"
//           style={{ backgroundImage: `url(${bgImage})` }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-[#3a5f99]/85"></div>

//           <div className="relative z-10">
//             <h3 className="text-xl font-semibold mb-3">{title}</h3>
//             <p className="text-sm max-w-md mb-6">{text}</p>

//             <div className="flex justify-center">
//               <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-[#3a5f99] transition">
//                 Know More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Waves, Dumbbell } from "lucide-react";

export default function Facilities() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-20">
      {/* Title */}
      <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
        OUR FACILITIES
        <span className="mt-3 block h-1 w-16 bg-cyan-500"></span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FlipCard
          icon={<Waves size={44} />}
          title="SWIMMING POOL"
          text="A one stop destination of aquatic talents. Our students went to domestic as well as State competition."
          bgImage="/images/swimming.jpg"
        />

        <FlipCard
          icon={<Dumbbell size={44} />}
          title="GYM"
          text="A state of the art facility where people can train, do weight management and work on their physique."
          bgImage="/images/gym.jpg"
        />
      </div>
    </section>
  );
}

// function FlipCard({ icon, title, text, bgImage }: any) {
//   return (
//     <div className="h-72 md:h-60 [perspective:1200px]">
//       <div
//         className="
//           relative h-full w-full transition-transform duration-700
//           [transform-style:preserve-3d]
//           md:hover:[transform:rotateX(180deg)]
//         "
//       >
//         {/* FRONT */}
//         <div className="absolute inset-0 flex flex-col justify-center bg-[#4f7fbd]/90 p-8 text-white md:p-10 [backface-visibility:hidden]">
//           <div className="mb-4">{icon}</div>
//           <h3 className="mb-3 text-xl font-semibold">{title}</h3>
//           <p className="text-sm max-w-md">{text}</p>
//         </div>

//         {/* BACK */}
//         <div
//           className="
//             absolute inset-0 flex flex-col justify-center bg-cover bg-center p-8 text-white
//             [transform:rotateX(180deg)] [backface-visibility:hidden]
//             md:p-10
//           "
//           style={{ backgroundImage: `url(${bgImage})` }}
//         >
//           <div className="absolute inset-0 bg-[#3a5f99]/85"></div>

//           <div className="relative z-10 text-center">
//             <h3 className="mb-3 text-xl font-semibold">{title}</h3>
//             <p className="mx-auto mb-6 max-w-md text-sm">{text}</p>

//             <div className="flex justify-center">
//               <button className="border border-white px-6 py-2 text-sm transition hover:bg-white hover:text-[#3a5f99]">
//                 Know More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

function FlipCard({ icon, title, text, bgImage }: any) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-72 md:h-60 perspective-distant"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`
          relative h-full w-full transition-transform duration-700
          transform-3d
          ${flipped ? "transform-[rotateX(180deg)]" : ""}
          md:hover:transform-[rotateX(180deg)]
        `}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col justify-center bg-[#4f7fbd]/90 p-8 text-white md:p-10 backface-hidden">
          <div className="mb-4">{icon}</div>
          <h3 className="mb-3 text-xl font-semibold">{title}</h3>
          <p className="text-sm max-w-md">{text}</p>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0 flex flex-col justify-center bg-cover bg-center p-8 text-white
            transform-[rotateX(180deg)] backface-hidden
            md:p-10
          "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-[#3a5f99]/85"></div>

          <div className="relative z-10 text-center">
            <h3 className="mb-3 text-xl font-semibold">{title}</h3>
            <p className="mx-auto mb-6 max-w-md text-sm">{text}</p>

            <div className="flex justify-center">
              <button
                className="border border-white px-6 py-2 text-sm transition hover:bg-white hover:text-[#3a5f99]"
                onClick={(e) => e.stopPropagation()} // prevent re-flip
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
