// import React from "react";
// import { Facebook, Instagram, Youtube } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#5a84c3] text-white pt-16 pb-8">
//       <div className="container mx-auto px-6 lg:px-24">
//         <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/20 pb-12">
//           {/* Left Column: Logo and Contact Info */}
//           <div className="flex flex-col items-center md:items-start space-y-6 max-w-sm">
//             <div className="bg-white rounded-full p-2 shadow-xl">
//               <img
//                 src="logo.webp"
//                 alt="Midnapore Swimming Club Logo"
//                 className="w-48 h-48 object-contain"
//               />
//             </div>
//             <div className="space-y-3 text-center md:text-left">
//               <p className="text-sm font-medium leading-relaxed">
//                 <span className="block font-bold">Address:</span>
//                 Hospital Rd, Keranitola, Midnapore, West Bengal 721101
//               </p>
//               <p className="text-sm font-medium">
//                 <span className="font-bold">Phone:</span> 03222 297 741
//               </p>
//               <p className="text-sm font-medium">
//                 <span className="font-bold">Email:</span>{" "}
//                 info@midnaporeswimmingclub.org
//               </p>
//             </div>
//           </div>

//           {/* Right Column: Navigation Links */}
//           <div className="w-full md:w-auto">
//             <nav className="flex flex-col space-y-4 text-center md:text-left">
//               <a
//                 href="#"
//                 className="hover:text-yellow-400 transition-colors font-semibold"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-yellow-400 transition-colors font-semibold"
//               >
//                 Our Facilities
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-yellow-400 transition-colors font-semibold"
//               >
//                 Notice Board
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-yellow-400 transition-colors font-semibold"
//               >
//                 Gallery
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-yellow-400 transition-colors font-semibold"
//               >
//                 Contact
//               </a>
//             </nav>
//           </div>
//         </div>

//         {/* Bottom Bar: Copyright and Socials */}
//         <div className="mt-8 flex flex-col md:row items-center justify-between gap-6">
//           <p className="text-xs opacity-80">
//             Copyright © 2026 Midnapore Swimming Club
//           </p>

//           <div className="flex items-center gap-8">
//             <a
//               href="#"
//               className="flex items-center gap-2 hover:text-blue-200 transition-colors"
//             >
//               <Facebook className="w-5 h-5" />
//               <span className="text-sm font-bold uppercase tracking-wider">
//                 Facebook
//               </span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center gap-2 hover:text-pink-200 transition-colors"
//             >
//               <Instagram className="w-5 h-5" />
//               <span className="text-sm font-bold uppercase tracking-wider">
//                 Instagram
//               </span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center gap-2 hover:text-red-400 transition-colors"
//             >
//               <Youtube className="w-5 h-5" />
//               <span className="text-sm font-bold uppercase tracking-wider">
//                 YouTube
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5582c3] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* LEFT: Logo + Info */}
          <div>
            <img
              src="/logo.webp"
              alt="Midnapore Swimming Club"
              className="w-40 mb-6"
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
            <ul className="space-y-2 text-sm">
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
            <Facebook size={18} />
            <Instagram size={18} />
            <Youtube size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
