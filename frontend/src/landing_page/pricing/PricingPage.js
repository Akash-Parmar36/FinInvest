import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import TableQuantity from "./TableQuantity";
import AccountOpeningTable from "./AccountOpeningTable";
import AddedServiceTable from "./AddedServiceTable";
import DematAMC from "./DematAMC";

function PricingPage() {
  return (
    <>
      <Hero />
      <TableQuantity />
      <AccountOpeningTable />
      <DematAMC />
      <AddedServiceTable />
      <Brokerage />
    </>
  );
}

export default PricingPage;
