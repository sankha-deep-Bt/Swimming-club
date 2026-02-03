import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.webp" // place in public/
            alt="Midnapore Swimming Club"
            className="h-10 w-10"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          <li className="cursor-pointer hover:text-cyan-300">Home</li>

          <li className="flex cursor-pointer items-center gap-1 hover:text-cyan-300">
            Our Facilities <ChevronDown size={14} />
          </li>

          <li className="cursor-pointer hover:text-cyan-300">Notice Board</li>

          <li className="cursor-pointer hover:text-cyan-300">Gallery</li>

          <li className="cursor-pointer hover:text-cyan-300">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
