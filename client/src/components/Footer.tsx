import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5582c3] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start">
          {/* LEFT: Logo + Info */}
          <div>
            <img
              src="/logo.webp"
              alt="Midnapore Swimming Club"
              className="w-55 "
            />

            <p className="text-sm mb-4 leading-relaxed">
              Address: Hospital Rd, Keranitola, Midnapore, West Bengal 721101
            </p>

            <p className="text-sm mb-4">Phone: 03222 297 741</p>

            <p className="text-sm">Email: info@midnaporeswimmingclub.org</p>
          </div>

          {/* MIDDLE: Empty spacer (matches screenshot) */}
          <div />

          {/* RIGHT: Links */}
          <div className="md:text-left">
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>Our Facilities</li>
              <li>Notice Board</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">Copyright © 2026 Midnapore Swimming Club</p>

          <div className="flex items-center gap-6 text-black">
            <Facebook size={13} />
            <h1>Facebook</h1>
            <Instagram size={13} />
            <h1>Instagram</h1>
            <Youtube size={13} />
            <h1>Youtube</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
