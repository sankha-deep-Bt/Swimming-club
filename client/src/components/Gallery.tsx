import { ChevronLeft } from "lucide-react";

export default function Gallery() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4f7fc3] py-24">
      {/* Watermark Text */}
      <h2 className="pointer-events-none absolute right-12 top-24 select-none text-[140px] font-extrabold uppercase tracking-widest text-white/5">
        GALLERY
      </h2>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h3 className="text-4xl font-extrabold uppercase text-white">
              GALLERY
            </h3>
            <div className="mt-3 h-0.5 w-14 bg-emerald-400" />
          </div>

          <button className="rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-teal-500">
            View More
          </button>
        </div>

        {/* Images Row */}
        <div className="relative flex items-center gap-6">
          {/* Left arrow */}
          <button className="absolute -left-10 hidden text-teal-300 hover:text-teal-400 md:block">
            <ChevronLeft size={28} />
          </button>

          <img
            src="/gallery-1.webp"
            alt="Gallery image 1"
            className="h-65 w-90 flex shrink-0 rounded-md object-cover shadow-lg md:h-75 md:w-120"
          />

          <img
            src="/gallery-2.webp"
            alt="Gallery image 2"
            className="h-65 w-130 flex shrink-0 rounded-md object-cover shadow-lg md:h-75 md:w-160"
          />
        </div>
      </div>
    </section>
  );
}
