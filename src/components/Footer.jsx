// components/Footer.jsx
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand and Description */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-orange-500">Pedal<span className="text-[#ff6b00]">Up</span></h1>
          <p className="text-gray-400 mt-2 text-sm max-w-xs">
            Explore the joy of biking — where every pedal moves you forward.
          </p>
        </div>

        <nav className="flex flex-col md:flex-row gap-4 text-sm text-gray-300 text-center">
        <a
            href="#"
            onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-[#ff6b00] transition"
        >
            Home
        </a>
        <a href="#about" className="hover:text-[#ff6b00] transition">About</a>
        <a href="#featured" className="hover:text-[#ff6b00] transition">Bikes</a>
        <a href="#services" className="hover:text-[#ff6b00] transition">Services</a>
        </nav>

        {/* Social Links with borders */}
        <div className="flex items-center text-orange-500 gap-3">
        <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff6b00] transition"
            aria-label="Facebook"
        >
            <Facebook size={18} />
        </a>
        <span className="text-gray-500">|</span>
        <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff6b00] transition"
            aria-label="Instagram"
        >
            <Instagram size={18} />
        </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        &copy; 2025 PedalUp. All rights reserved. | Made with ❤️ in the Philippines by <span className="text-white font-medium">John Alexis Manansala</span>
      </div>
    </footer>
  );
};

export default Footer;
