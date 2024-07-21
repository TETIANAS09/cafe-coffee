import React from 'react';
import Appstore from '../../assets/app_store.png';
import Playstore from '../../assets/play_store.png';
import BgPng from '../../assets/Coffee-App.jpg';

const bgrImg = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Info = () => {
  return (
    <>
      <div style={bgrImg} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div data-aos="fade-right" className="space-y-6 max-w-xl mx-auto">
              {/* text content */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white tracking-wider">
                <span className=" font-bold pr-3 ">Coffee</span>
                is available for Android and IOS
              </h1>
              {/* logo */}
              <div className="flex  flex-wrap justify-center sm:justify-start items-center cursor-pointer">
                <a href="https://www.apple.com/app-store/" target="blank">
                  <img
                    src={Appstore}
                    alt="img app"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="https://play.google.com/" target="blank">
                  <img
                    src={Playstore}
                    alt="img app"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
