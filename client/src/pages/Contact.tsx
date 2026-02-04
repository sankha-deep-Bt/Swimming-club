import { Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="w-full bg-[#e9f7f9] py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Contact Info */}
          <div className="mb-6 space-y-3 text-sm text-cyan-700">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-black" />
              <span>Call Us: 03222 297 741</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-black" />
              <span>
                Visit Us: Hospital Rd, Keranitola, Midnapore, West Bengal 721101
              </span>
            </div>

            {/* Divider */}
            <div className="mt-4 h-px w-full bg-cyan-200" />
          </div>

          {/* Map */}
          <div className="mt-6 overflow-hidden rounded-md shadow-md">
            <iframe
              title="Midnapore Swimming Club Map"
              src="https://www.google.com/maps?q=Midnapore%20Swimming%20Club&output=embed"
              className="h-100 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
