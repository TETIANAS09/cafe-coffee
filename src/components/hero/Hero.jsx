import React from 'react';
import Banner from '../../assets/coffee.png';

const Hero = () => {
  return (
    <>
      <span id="home"></span>
      <div className="bg-brand min-h-[450px] sm:min-h-[600px]flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* TEXT CONTENT */}
            <div className=" flex flex-col justify-center gap-6 pt-12  sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className=" text-5xl sm:text-6xl lg:text-7xl font-bold text-primary pb-3 space-y-4  "
              >
                Indulge in your passion for
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className=" text-5xl sm:text-6xl lg:text-7xl text-branddark  font-bold tracking-wider"
                >
                  <span> Coffee</span>
                </span>
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className=" w-[180px] px-4 py-2 bg-transparent border shadow-lg border-branddark text-branddark text-xl font-bold hover:scale-105  active:scale-105  duration-200">
                  Coffe and Code
                </button>
              </div>
            </div>
            {/* IMAGE SECTION */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[300px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                src={Banner}
                alt="banner"
                className=" w-[500px] sm:w-[550px] my-auto  spin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
