import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="Midnapore Swimming Club"
            className="h-10 w-10"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          <li className="cursor-pointer hover:text-cyan-300">Home</li>

          <li className="flex cursor-pointer items-center gap-1 hover:text-cyan-300">
            Our Facilities <ChevronDown size={14} />
          </li>

          <li className="cursor-pointer hover:text-cyan-300">Notice Board</li>
          <li className="cursor-pointer hover:text-cyan-300">Gallery</li>
          <li className="cursor-pointer hover:text-cyan-300">Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 bg-[#003d5b]/95 px-6 py-6 text-sm font-medium text-white">
          <li className="cursor-pointer hover:text-cyan-300">Home</li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-cyan-300">
            Our Facilities <ChevronDown size={14} />
          </li>

          <li className="cursor-pointer hover:text-cyan-300">Notice Board</li>
          <li className="cursor-pointer hover:text-cyan-300">Gallery</li>
          <li className="cursor-pointer hover:text-cyan-300">Contact</li>
        </ul>
      </div>
    </header>
  );
}
