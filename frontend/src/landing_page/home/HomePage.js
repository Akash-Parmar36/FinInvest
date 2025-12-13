import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import ScrollToTop from "../ScrollToTop.js";


function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
