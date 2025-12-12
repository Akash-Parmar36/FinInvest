import React from "react";
import AccordionUsage from "./AccordionUsage";

function Faq() {
  return (
    <div className="container-xl py-5 px-5 px-sm-5">
      <div className="row px-xxl-5">
        <h2 className="px-0 demat-account_h2" style={{ color: "#424242"}}>FAQs</h2>
      </div>
      <div className="row pt-5 px-xxl-5">
        <AccordionUsage
          Title="What is a Zerodha account?"
          Details="A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally."
        />
      </div>
      <div className="row px-xxl-5">
        <AccordionUsage
          Title="What documents are required to open a demat account?"
          Details="The following documents are required to open a Zerodha account online:

                  PAN number,
                  Aadhaar Card (Linked with a phone number for OTP verification),
                  Cancelled cheque or bank account statement (To link your bank account),
                  Income proof (Required only if you wish to trade in Futures & options)"
        />
      </div> 
      <div className="row px-xxl-5">
        <AccordionUsage
          Title="Is Zerodha account opening free?"
          Details="Yes, It is completely free."
        />
      </div>
      <div className="row px-xxl-5">
        <AccordionUsage
          Title="Are there any maintenance charges for a demat account?"
          Details="The account maintaince charges is appliacable based on the account type.
                                            For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
                                            For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.
                                            To learn more about BSDA, Click here."
        />
      </div>
      <div className="row px-xxl-5">
        <AccordionUsage
          Title="Can I open a demat account without a bank account?"
          Details="To open a demat account, you must have a bank account in your name.
                              If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha."
        />
      </div>
    </div>
  );
}

export default Faq;
