import React from 'react';
import BannerImg from '../../assets/bunner.png';
import { BsCup } from 'react-icons/bs';

const Offer = [
  {
    id: 1,
    description:
      'Student Discount: Enjoy 10% off your drink with a valid student ID',
  },
  {
    id: 2,
    description:
      'Loyalty Program: Earn points with every purchase and redeem them for free drinks and treats.',
  },
  {
    id: 3,
    description:
      'Happy Hour: Grab a coffee or tea for a discounted price during weekdays from 2pm to 4pm.',
  },
];

const Offers = () => {
  return (
    <>
      <span id="offers"></span>
      <div className="bg-brandlight">
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center
                 "
          >
            {/* image section */}
            <div data-aos="fade-right" className=" md:order-1">
              <img
                src={BannerImg}
                alt="cup of coffee"
                className="max-w-[430px] w-[350px] mx-auto mb-2"
              />
            </div>
            {/* text content */}
            <div data-aos="fade-left" className="md:order-2">
              <h1 className="font-bold text-branddark text-4xl text-center pb-4">
                Our Offers
              </h1>
              <ul className="text-branddark  sm:text-sm font-extrabold lg:text-lg">
                {Offer.map((offer) => (
                  <li key={offer.id} className="mb-4 ">
                    <BsCup className="size-5" />
                    {offer.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
