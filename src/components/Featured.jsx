import { motion } from "framer-motion";
import urbanCruiser from "../assets/urban-cruiser.png";
import mountainBeast from "../assets/mountain-beast.png"; 
import electricCommuter from "../assets/electric-commuter.png";

const bikes = [
  {
    name: "Urban Cruiser",
    desc: "Perfect for daily city rides with style and comfort.",
    img: urbanCruiser,
  },
  {
    name: "Mountain Beast",
    desc: "Built to dominate rugged terrain and adventure trails.",
    img: mountainBeast,
  },
  {
    name: "Electric Commuter",
    desc: "Zip through traffic effortlessly with our e-bike.",
    img: electricCommuter,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Featured = () => {
  return (
    <section id="featured" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ff6b00] text-center mb-16">
          Featured Bikes
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {bikes.map((bike, i) => (
            <motion.div
              key={bike.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#ff6b00]/30 transition-shadow duration-300"
            >
              <div className="h-[400px] overflow-hidden">
                <img
                  src={bike.img}
                  alt={bike.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{bike.name}</h3>
                <p className="text-gray-400 text-sm">{bike.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
