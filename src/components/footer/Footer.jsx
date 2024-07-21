import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import { SiFacebook } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTikTok } from 'react-icons/ai';

const FooterLinks = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Menu',
    link: '#menu',
  },
  {
    title: 'Offers',
    link: '#offers',
  },
  {
    title: 'Contacts',
    link: '#contacts',
  },
];

const Footer = () => {
  return (
    <>
      <span id="contacts"></span>
      <div className=" text-branddark  bg-brand ">
        <div className=" min-h-[400px] py-6 ">
          <div className="container grid grid-cols-1 text-center pb-15 pt-5 sm:grid-cols-3 justify-items-center ">
            {/* info         */}
            <div
              data-aos="fade-right"
              className="flex flex-col items-center gap-2 pb-5 text-center  mx-auto "
            >
              <a
                href="#"
                className="font-bold text-3xl sm:text-4xl flex  gap-1 tracking-wider"
              >
                <GiCoffeeCup className="w-11  h-18 fill-dark" />
                Coffee
              </a>
              <p className="font-bold text-lg   sm:text-base border-b-2 border-branddark pb-3 sm:border-0">
                Your Daily Dose of Delight. <br />
                Coffee So Good, It's Criminal
              </p>
            </div>
            {/* links */}
            <div
              data-aos="fade-left"
              className="col-span-2 grid grid-cols-1  sm:grid-cols-2"
            >
              {/* first col */}
              <div className=" flex flex-col items-center pb-5 border-b-2 border-branddark sm:border-0">
                <h1 className="  text-3xl font-bold sm:text-left  sm:pb-2">
                  Links
                </h1>
                <ul className="space-y-2">
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block text-xl font-semibold hover:scale-110 hover:text-primary active:scale-110 active:text-primary duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* second col-address */}
              <div className=" flex flex-col items-center  ">
                <h1 className=" text-3xl font-bold sm:text-left  sm:pb-2 ">
                  Address
                </h1>
                <div className="flex flex-col gap-2 sm:pl-5 border-b-2 border-branddark sm:border-0 pb-3 ">
                  <a
                    href="https://maps.app.goo.gl/9n1whjLKdvyEGMwM7"
                    target="blank "
                  >
                    <p className="address address hover:address active:address">
                      777 Main Street, Warrington,UK
                    </p>
                  </a>
                  <a href="https://mail.google.com" target="blank">
                    <p className="address hover:address active:address">
                      Coffee.com@gmail.com
                    </p>
                  </a>
                  <p className="address hover:address active:address ">
                    + 777 777 77777
                  </p>
                </div>
                {/* SOCIAL LINKS */}
                <div className="flex  justify-start items-center  gap-5 pt-4  px-16">
                  <a href="#">
                    <SiFacebook className=" soc hover:soc active:soc" />
                  </a>
                  <a href="#">
                    <RiInstagramFill className=" soc hover:soc active:soc " />
                  </a>
                  <a href="#">
                    <AiFillTikTok className=" soc hover:soc active:soc" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
