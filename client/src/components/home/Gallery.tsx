// import { ChevronLeft } from "lucide-react";

// export default function Gallery() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#4f7fc3] py-16 md:py-24">
//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Header */}
//         <div className="mb-10">
//           <h3 className="text-3xl font-extrabold uppercase text-white md:text-4xl">
//             GALLERY
//           </h3>
//           <div className="mt-3 h-0.5 w-14 bg-emerald-400" />

//           {/* Button below heading */}
//           <button className="mt-6 inline-block rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-teal-500">
//             View More
//           </button>
//         </div>

//         {/* Images Row */}
//         <div className="relative">
//           {/* Left arrow (desktop only) */}
//           <button className="absolute -left-10 top-1/2 hidden -translate-y-1/2 text-teal-300 hover:text-teal-400 md:block">
//             <ChevronLeft size={28} />
//           </button>

//           {/* Images container */}
//           <div className="flex gap-6 overflow-x-auto pb-4 md:justify-center md:overflow-visible">
//             <img
//               src="/gallery-1.webp"
//               alt="Gallery image 1"
//               className="h-56 w-80 shrink-0 rounded-md object-cover shadow-lg md:h-72 md:w-105"
//             />

//             <img
//               src="/gallery-2.webp"
//               alt="Gallery image 2"
//               className="h-56 w-105 shrink-0 rounded-md object-cover shadow-lg md:h-72 md:w-140"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ChevronLeft } from "lucide-react";

export default function Gallery() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4f7fc3] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header (shifted only) */}
        <div className="mb-10 md:ml-32 lg:ml-40">
          <h3 className="text-3xl font-extrabold uppercase text-white md:text-4xl">
            GALLERY
          </h3>
          <div className="mt-3 h-0.5 w-14 bg-emerald-400" />

          <button className="mt-6 inline-block rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-teal-500">
            View More
          </button>
        </div>

        {/* Images Row (UNCHANGED) */}
        <div className="relative">
          <button className="absolute -left-10 top-1/2 hidden -translate-y-1/2 text-teal-300 hover:text-teal-400 md:block">
            <ChevronLeft size={28} />
          </button>

          <div className="flex gap-6 overflow-x-auto pb-4 md:justify-center md:overflow-visible">
            <img
              src="/gallery-1.webp"
              alt="Gallery image 1"
              className="h-56 w-80 shrink-0 rounded-md object-cover shadow-lg md:h-72 md:w-105"
            />

            <img
              src="/gallery-2.webp"
              alt="Gallery image 2"
              className="h-56 w-105 shrink-0 rounded-md object-cover shadow-lg md:h-72 md:w-140"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
