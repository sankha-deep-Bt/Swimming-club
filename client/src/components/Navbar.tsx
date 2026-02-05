import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ variant }: { variant?: string }) {
  const [open, setOpen] = useState(false);

  const isImageBg = variant === "image";

  // const textColor = isImageBg ? "text-white" : "text-black";
  // const hoverColor = isImageBg ? "hover:text-cyan-300" : "hover:text-blue-600";
  // const mobileBg = isImageBg ? "bg-[#003d5b]/95" : "bg-white";

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="Midnapore Swimming Club"
            className="h-10 w-10"
          />
        </div>

        {/* Desktop Nav */}
        <ul
          className={`hidden items-center gap-6 text-xs font-sm  md:flex ${isImageBg ? "text-white" : "text-black"}`}
        >
          <Link to="/">
            <li className="cursor-pointer hover:text-cyan-300">Home</li>
          </Link>

          <li className="flex cursor-pointer items-center gap-1 hover:text-cyan-300">
            Our Facilities <ChevronDown size={14} />
          </li>

          <Link to="/noticeboard">
            <li className="cursor-pointer hover:text-cyan-300">Notice Board</li>
          </Link>
          <Link to="/gallery">
            <li className="cursor-pointer hover:text-cyan-300">Gallery</li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer hover:text-cyan-300">Contact</li>
          </Link>
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
          <Link to="/">
            <li className="cursor-pointer hover:text-cyan-300">Home</li>
          </Link>

          <li className="flex cursor-pointer items-center gap-1 hover:text-cyan-300">
            Our Facilities <ChevronDown size={14} />
          </li>

          <Link to="/noticeboard">
            <li className="cursor-pointer hover:text-cyan-300">Notice Board</li>
          </Link>
          <Link to="/gallery">
            <li className="cursor-pointer hover:text-cyan-300">Gallery</li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer hover:text-cyan-300">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
