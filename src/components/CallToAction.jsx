import { motion } from "framer-motion";
import calltoactionBg from "../assets/calltoaction-bg.jpg";

const CallToAction = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-6 md:px-16"
      style={{ backgroundImage: `url(${calltoactionBg})` }}
    >
      {/* Top & bottom gradient fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/100 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-10" />

      {/* Main content box */}
      <div className="relative z-20 bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 md:p-16 max-w-3xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Ready to Ride with <span className="text-orange-600">PedalUp</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 text-lg mb-6"
        >
          Find the perfect ride and start your journey today. Whether for adventure, fun, or fitness – we’ve got the bike for you.
        </motion.p>

        <motion.a
          href="#bikes"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block bg-[#ff6b00] text-white px-8 py-4 text-lg rounded-xl hover:bg-[#2e2e2e] transition duration-300"
        >
          Book Now
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
