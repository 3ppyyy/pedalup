// components/About.jsx
import { motion } from "framer-motion";
import bikeAbout from "../assets/about-bike.png";

const About = () => {
  return (
    <>
      {/* Gradient Overlay from black to section bg */}
      <div className="h-12 bg-gradient-to-b from-black to-[#1f1f1f] w-full"></div>

      <section id="about" className="bg-[#1f1f1f] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Image Section */}
          <motion.div
            className="flex-1 w-full max-w-xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={bikeAbout}
                alt="About PedalUp"
                className="w-full h-full md:h-[440px] object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-[#ff6b00]">PedalUp</span> Your Journey
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Discover the thrill of the ride with <span className="text-white font-medium">PedalUp</span> — your go-to for premium kit bikes. Built for city commutes, weekend escapes, and everything in between. Ride smarter, bolder, and greener.
            </p>
            <p className="text-sm text-gray-400 italic">
              Where performance meets style. Where every journey begins.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
