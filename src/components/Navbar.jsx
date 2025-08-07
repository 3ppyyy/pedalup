import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";

// Utility function to check if the device is mobile
const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobile = isMobile(); // Check if the device is mobile

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -160; // adjust for navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: mobile ? "auto" : "smooth" }); // Remove smooth scroll on mobile
    }
  };

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Contact + Social Bar */}
      <div
        className={`text-white text-sm px-4 md:px-64 py-2 flex flex-col md:flex-row md:justify-between md:items-center gap-2 transition-all duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-300">
          <div className="flex items-center gap-1">
            <Phone size={16} />
            <span>+63 912 345 6789</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <span>hello@pedalup.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center text-orange-500 gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <span className="text-gray-500 hidden md:inline">|</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-[1px] bg-white" />

      {/* Main Navbar */}
      <nav className={`text-white px-4 md:px-64 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-[#2e2e2e]" : "bg-transparent"
      }`}>
        {/* Logo */}
        <div className="text-white font-bold text-xl cursor-pointer" onClick={() => scrollToSection("home")}>
          Pedal<span className="text-[#ff6b00]">Up</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <button onClick={() => scrollToSection("home")} className="hover:text-[#ff6b00] transition">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-[#ff6b00] transition">About</button>
          <button onClick={() => scrollToSection("featured")} className="hover:text-[#ff6b00] transition">Bikes</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-[#ff6b00] transition">Services</button>

          <button
            onClick={() => scrollToSection("bikes")}
            className="border border-[#ff6b00] px-4 py-1.5 text-sm font-medium hover:bg-[#ff6b00] hover:text-white transition"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-3">
          <button onClick={() => scrollToSection("home")} className="block hover:text-[#ff6b00]">Home</button>
          <button onClick={() => scrollToSection("about")} className="block hover:text-[#ff6b00]">About</button>
          <button onClick={() => scrollToSection("featured")} className="block hover:text-[#ff6b00]">Bikes</button>
          <button onClick={() => scrollToSection("services")} className="block hover:text-[#ff6b00]">Services</button>
          <button
            onClick={() => scrollToSection("bikes")}
            className="inline-block border border-[#ff6b00] px-4 py-1.5 text-sm font-medium hover:bg-[#ff6b00] hover:text-white transition"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
