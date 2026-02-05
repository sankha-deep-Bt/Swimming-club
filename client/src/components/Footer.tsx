import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#5582c3] text-white h-screen">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start">
          {/* LEFT: Logo + Info */}
          <div>
            <img
              src="/logo.webp"
              alt="Midnapore Swimming Club"
              className="w-70 mt-10"
            />

            <p className="text-xl mb-4 leading-relaxed">
              Address: Hospital Rd, Keranitola, Midnapore, West Bengal 721101
            </p>

            <p className="text-xl mb-4">Phone: 03222 297 741</p>

            <p className="text-xl">Email: info@midnaporeswimmingclub.org</p>
          </div>

          {/* MIDDLE: Empty spacer (matches screenshot) */}
          <div />

          {/* RIGHT: Links */}
          <div className="md:text-left">
            <h1 className="text-4xl font-bold mb-4">Quick Links</h1>
            <ul className="space-y-1 text-3xl">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/swimming">
                <li>Swimming</li>
              </Link>
              <Link to="/gym">
                <li>Gym</li>
              </Link>
              <Link to="/noticeboard">
                <li>Notice Board</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
            <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">Copyright © 2026 Midnapore Swimming Club</p>
        </div>
      </div>
    </footer>
  );
}

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";

export function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <SocialButton color="bg-[#1877F2]" icon={<FaFacebookF />} />
      <SocialButton color="bg-[#1DA1F2]" icon={<FaTwitter />} />
      <SocialButton color="bg-[#FF0000]" icon={<FaYoutube />} />
      <SocialButton color="bg-[#000000]" icon={<FaInstagram />} />
      <SocialButton color="bg-[#6B7280]" icon={<FaGoogle />} />
      <SocialButton color="bg-[#0A66C2]" icon={<FaLinkedinIn />} />
    </div>
  );
}

const SocialButton = ({ icon, color }: any) => {
  return (
    <div
      className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl cursor-pointer
      hover:scale-110 transition-transform duration-300 shadow-md`}
    >
      {icon}
    </div>
  );
};
