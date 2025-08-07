import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import urbanCruiser from "../assets/urban-cruiser.png";
import mountainBeast from "../assets/mountain-beast.png";
import electricCommuter from "../assets/electric-commuter.png";

const bikes = [
  {
    title: "FAST & AFFORDABLE",
    image: electricCommuter,
    name: 'Electric Commuter',
    price: '₱499 / Day',
    cta: 'Rent Now',
  },
  {
    title: "TRAIL CONQUEROR",
    image: mountainBeast,
    name: 'Mountain Beast',
    price: '₱599 / Day',
    cta: 'Book Today',
  },
  {
    title: "URBAN BEAST",
    image: urbanCruiser,
    name: 'Urban Cruiser',
    price: '₱459 / Day',
    cta: 'Ride Now',
  },
];

export default function BikeSlider() {
  return (
    <section id="bikes" className="bg-[#1f1f1f] text-white py-16 px-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm md:text-base font-normal text-[#ff6b00]">BOOK A BIKE NOW</h3>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {bikes.map((bike, index) => (
          <SwiperSlide key={index}>
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase">
                {bike.title}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 px-6 md:px-20">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full md:w-[1000px] h-[500px] object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="uppercase text-3xl md:text-4xl font-bold mb-4 text-[#ff6b00]">{bike.name}</h3>
                <p className="uppercase text-3xl font-medium mb-6">{bike.price}</p>
                <button className="bg-[#ff6b00] hover:bg-white hover:text-black transition-colors px-6 py-3 font-semibold">
                  {bike.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #ff6b00;
            transform: scale(1.5);
          }

          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </section>
  );
}
