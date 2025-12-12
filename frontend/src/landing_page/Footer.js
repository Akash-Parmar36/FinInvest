import React from "react";

function Footer() {
  return (
   <footer style={{backgroundColor:"#F8F8F8"}}>
    <div className="container border-top">
      <div className="row m-5 px-5 ">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "80%" }}
          />
          <p className="mt-4 text-muted" style={{fontSize:"0.75rem"}}>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <div>
              <a href="" className="text-decoration-none  me-4 fs-5 custom-hover"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="" className="text-decoration-none  me-4 fs-5 custom-hover"><i class="fa-brands fa-square-facebook"></i></a>
              <a href="" className="text-decoration-none  me-4 fs-5 custom-hover"><i class="fa-brands fa-instagram"></i></a>
              <a href="" className="text-decoration-none  me-4 fs-5 custom-hover"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div className="mt-4">
              <a href="" className="text-decoration-none  me-4 fs-5 custom-hover"><i class="fa-brands fa-youtube"></i></a>
              <a href="" className="text-decoration-none  me-4 fs-5 custom-hover"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="" className="text-decoration-none  me-4 fs-5 custom-hover"><i class="fa-brands fa-telegram"></i></a>
          </div>
        </div>
        <div className="col ms-5">
          <p className="fs-5">Account</p>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">Open demat account</a>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">Minor demat account</a>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">NRI demat account</a>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">Commodity</a>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">Dematerialisation</a>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">Fund transfer</a>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">MTF</a>
          <a href="#" className="text-decoration-none   d-block   mt-3 custom-hover">Referral program</a>
        </div>
        <div className="col">
          <p className="fs-5">Support</p>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Contact us</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Support portal</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">How to file a complaint?</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Status of your complaints</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Bulletin</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Circular</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Z-Connect blog</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Downloads</a>
        </div>
        <div className="col">
          <p className="fs-5">Company</p>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">About</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Philosophy</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Press & media</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Careers</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Zerodha Cares (CSR)</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Zerodha.tech</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Open source</a>
        </div>
        <div className="col">
          <p className="fs-5">Quick links</p>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Upcoming IPOs</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Brokerage charges</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Market holidays</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Economic calendar</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Calculators</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Markets</a>
          <a href="#" className="text-decoration-none  d-block  mt-3 custom-hover">Sectors</a>
        </div>
      </div>
  
    <div className="mx-5 px-5 text-muted " style={{fontSize:"0.8rem"}}>
      <p>ing  custom-hoverLtd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to complaints@zerodha.com,
        for DP related to dp@zerodha.com. Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICF
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>

      <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>

      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
       </p>
      </div>
       
      <div className="mx-5 px-5 pb-3 text-muted text-center">
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>NSE</a> 
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>BSE</a> 
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>MCX</a> 
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>Terms & conditions</a>
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>Policies & procedures</a> 
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>Privacy policy</a> 
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>Disclosure</a> 
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>For investor's attention</a> 
      <a href="" className="text-decoration-none me-4 custom-hover" style={{fontSize:"80%"}}>Investor charter</a>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
