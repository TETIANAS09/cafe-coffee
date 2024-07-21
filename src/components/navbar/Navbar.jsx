import React, { useState } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import { BiSolidCoffeeAlt } from 'react-icons/bi';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

const List = [
  {
    id: 1,
    name: 'Home',
    link: '#home',
  },
  {
    id: 2,
    name: 'Menu',
    link: '#menu',
  },
  {
    id: 3,
    name: 'Offers',
    link: '#offers',
  },
  {
    id: 4,
    name: 'Contacts',
    link: '#contacts',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-brand shadow-xl text-primary">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* logo  */}
          <div className="z-20 ">
            <a
              href="#"
              className="font-bold  text-branddark text-3xl sm:text-4xl flex   gap-1 tracking-wider  "
            >
              <GiCoffeeCup className="text-3xl fill-branddark  " />
              Coffee
            </a>
          </div>
          {/* Link section  */}
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden md:flex items-center gap-4">
              {List.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-xl font-bold p-4 text-branddark hover:text-primary active:text-primary duration-200 "
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <button className="hidden bg-transparent px-4 py-2 text-xl font-bold text-[#3f2613] border border-[#3f2613] shadow-lg  hover:scale-105  active:scale-105 duration-200 md:flex items-center gap-3 ">
                Order
                <BiSolidCoffeeAlt className="cursor-pointer " />
              </button>
            </ul>
            <div onClick={handleNav} className="flex  md:hidden">
              {nav ? (
                <IoMdClose className="text-branddark size-6 relative z-10 " />
              ) : (
                <TiThMenu className="text-branddark size-7 " />
              )}
            </div>
            {nav && (
              <ul className="flex flex-col  items-center  bg-brandlight py-10 absolute  top-0 right-0 w-full  md:h-[500px] sm:h-[450px] h-[400px] z-[4]">
                {List.map((data, index) => (
                  <li key={index} className=" px-9 py-2 ">
                    <a
                      href={data.link}
                      className="text-xl font-semibold text-branddark hover:text-primary  flex justify-center  "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                <button className="w-[150px] flex items-center gap-2  bg-brand px-7 py-2 text-xl font-semibold text-branddark  hover:scale-105  active:scale-105  duration-200  ">
                  Order
                  <BiSolidCoffeeAlt />
                </button>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
