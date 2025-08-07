import { motion } from "framer-motion";
import bikeHero from "../assets/bike-hero.jpg";

// Utility function to check if the device is mobile
const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80; // scroll a bit higher
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const mobile = isMobile(); // Check if the device is mobile

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen px-6 md:px-16 flex items-center"
      style={{ backgroundImage: `url(${bikeHero})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        
      {/* Content aligned left */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
        <motion.div
          initial={mobile ? {} : { opacity: 0, x: -50 }} // No animation on mobile
          animate={mobile ? {} : { opacity: 1, x: 0 }} // No animation on mobile
          transition={mobile ? {} : { duration: 0.8 }} // No transition on mobile
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-left">
            Ride Smart. <br /> Explore Freely with{" "}
            <span className="text-[#ff6b00]">PedalUp</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg text-left">
            Rent premium bikes easily, anywhere in the city. Perfect for commuting,
            weekend rides, or just exploring new roads.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("bikes")}
              className="bg-[#ff6b00] text-white px-6 py-3 font-semibold hover:bg-[#CC8400] transition"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
