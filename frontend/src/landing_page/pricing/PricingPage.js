import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import TableQuantity from "./TableQuantity";
import AccountOpeningTable from "./AccountOpeningTable";
import AddedServiceTable from "./AddedServiceTable";
import DematAMC from "./DematAMC";
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import ScrollToTop from "../ScrollToTop.js";

function PricingPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <TableQuantity />
      <AccountOpeningTable />
      <DematAMC />
      <AddedServiceTable />
      <Brokerage />
      <Footer />
    </>
  );
}

export default PricingPage;
