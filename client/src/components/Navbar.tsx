import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-amber-50">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src="/logo.webp"
          alt="Midnapore Swimming Club"
          className="h-30 w-30"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-xl font-medium text-blue">
          <li>
            <Link to="/" className="hover:text-cyan-300">
              Home
            </Link>
          </li>

          {/* Facilities Dropdown */}
          <li className="relative group">
            <div className="flex cursor-pointer items-center gap-1 hover:text-cyan-300">
              Our Facilities <ChevronDown size={20} />
            </div>

            {/* Dropdown */}
            <ul className="absolute left-0 top-full  hidden w-40 rounded-md bg-blue-400 py-2 text-black shadow-lg group-hover:block">
              <li>
                <Link
                  to="/swimming"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                >
                  Swimming
                </Link>
              </li>
              <li>
                <Link
                  to="/gym"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                >
                  Gym
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/noticeboard" className="hover:text-cyan-300">
              Notice Board
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="hover:text-cyan-300">
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-cyan-300">
              Contact
            </Link>
          </li>
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
        ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 bg-[#003d5b]/95 px-6 py-6 text-sm font-medium text-white">
          <Link to="/">
            <li className="cursor-pointer">Home</li>
          </Link>

          {/* Mobile Facilities Dropdown */}
          <li>
            <button
              onClick={() => setFacilitiesOpen(!facilitiesOpen)}
              className="flex w-full items-center justify-between"
            >
              Our Facilities
              <ChevronDown
                size={16}
                className={`transition-transform ${facilitiesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {facilitiesOpen && (
              <ul className="mt-2 ml-4 flex flex-col gap-2 text-sm">
                <Link to="/facilities/gym">
                  <li className="cursor-pointer hover:text-cyan-300">Gym</li>
                </Link>
                <Link to="/facilities/swimming">
                  <li className="cursor-pointer hover:text-cyan-300">
                    Swimming
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <Link to="/noticeboard">
            <li className="cursor-pointer">Notice Board</li>
          </Link>

          <Link to="/gallery">
            <li className="cursor-pointer">Gallery</li>
          </Link>

          <Link to="/contact">
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
