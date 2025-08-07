// components/WhyChooseUs.jsx
import { FaBiking, FaShieldAlt, FaMoneyBillWave, FaMapMarkedAlt } from "react-icons/fa";
import { MdElectricBike, MdSupportAgent } from "react-icons/md";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBiking size={48} />,
      title: "Well-Maintained Bikes",
      description: "All bikes are regularly serviced for peak performance.",
    },
    {
      icon: <FaShieldAlt size={48} />,
      title: "Safety First",
      description: "Helmets and safety gear provided with every rental.",
    },
    {
      icon: <FaMoneyBillWave size={48} />,
      title: "Affordable Rates",
      description: "Competitive pricing with flexible plans.",
    },
    {
      icon: <MdElectricBike size={48} />,
      title: "Electric Options",
      description: "Choose from standard or electric-assisted bikes.",
    },
    {
      icon: <FaMapMarkedAlt size={48} />,
      title: "Explore Freely",
      description: "Ride without limits and discover new paths.",
    },
    {
      icon: <MdSupportAgent size={48} />,
      title: "24/7 Support",
      description: "Always here to help before, during, or after your ride.",
    },
  ];

  return (
    <section id="services"className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 lg:grid-cols-3 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-[#ff6b00] mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
