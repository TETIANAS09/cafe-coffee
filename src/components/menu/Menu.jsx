import React from 'react';
import Img1 from '../../assets/cof-1.png';
import Img2 from '../../assets/cof-2.png';
import Img3 from '../../assets/cof-3.png';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: 'Cappuccino',
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.',
    price: '$8',
    aosDelay: '100',
  },
  {
    id: 2,
    img: Img2,
    name: 'Latte',
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    price: '$10',
    aosDelay: '300',
  },
  {
    id: 3,
    img: Img3,
    name: 'Ice Coffee',
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    price: '$15',
    aosDelay: '500',
  },
];

const Menu = () => {
  return (
    <>
      <span id="menu"></span>
      <div className="bg-white text-branddark  py-10">
        <div
          className="container
            "
        >
          {/* TITLE  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold">Best Coffee For You</h1>
          </div>
          {/* CARD SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
            {ServicesData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className=" hover:bg-brandlight active:bg-brandlight text-dark rounded-tl-2xl rounded-br-2xl shadow-2xl duration-200 max-w-[300px] group relative"
                >
                  {/* image section */}
                  <div className="h-[140px]">
                    <img
                      src={data.img}
                      alt="cup of coffee"
                      className="max-w-[200px] block mx-auto transform -translate-y-12 group-hover:scale-110 group-hover:rotate-12 duration-300"
                    />
                  </div>
                  {/* text content */}
                  <div className="p-4  text-center">
                    <h1 className="text-2xl font-bold  items-center">
                      {data.name}
                    </h1>
                    <p className=" group duration-300 text-sm font-medium ">
                      {data.description}
                    </p>
                    <p className="text-red-400 font-extrabold text-xl my-2 ">
                      {data.price}
                    </p>
                    {/* buttons */}
                    <div className="flex justify-between px-7 gap-4 ">
                      <button className="border border-brandlight  bg-brandlight px-3 rounded-tl-2xl rounded-br-2xl group-hover:border-white group-hover:bg-white/80 text-branddark font-semibold mt-2 ">
                        1
                      </button>

                      <button
                        type="button
                    "
                        className="border border-brandlight px-5 py-2 bg-brandlight rounded-tl-2xl rounded-br-2xl group-hover:border-white group-hover:bg-white/80 text-branddark font-semibold mt-2 "
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className=" flex justify-center items-center  w-[180px]  bg-brand hover:bg-brandlight active:bg-ybrandlight border shadow-lg p-2 hover:scale-105 active:scale-105 duration-200 font-bold">
            Show More
            <HiOutlineArrowLongRight />
          </button>
        </div>
      </div>
    </>
  );
};
export default Menu;
