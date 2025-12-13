import React from "react";

import Hero from "./Hero";
import Team from "./Team";
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import ScrollToTop from "../ScrollToTop.js";

function AboutPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Team />
      <Footer />
    </>
  );
}

export default AboutPage;
