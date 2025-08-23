import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Porfolio from "./components/Porfolio";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";


const App = () => {
  return (
    <>
    <NavBar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Porfolio />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="reviews">
        <Reviews/>
      </div>
      <div id="contactus">
        <ContactUs/>
      </div>
    </>
  );
};

export default App;
