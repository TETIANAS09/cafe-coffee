import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Menu from './components/menu/Menu';
import Offers from './components/offers/Offers';
import Phone from './components/phone/Phone';
import Footer from './components/footer/Footer';
const App = () => {
  //  animation
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  });

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Offers />
      <Phone />
      <Footer />
    </div>
  );
};

export default App;
