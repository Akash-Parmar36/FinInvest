import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import ScrollToTop from "../ScrollToTop.js";

function PricingPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <CreateTicket />
      <Footer />
    </>
  );
}

export default PricingPage;
