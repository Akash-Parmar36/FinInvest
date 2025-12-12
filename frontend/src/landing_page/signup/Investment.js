import React from "react";
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";

function Investment() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleClick = () => {
      if (location.pathname === "/signup") {
        // Already on signup page
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/signup");
      }
    };

  return (
    <div className="container-lg px-4 px-sm-5 px-lg-0 mt-5 py-5 px-xl-5">
        <h2 className="investment_heading text-center py-5"> {/*px-5*/}
          Investment options with Zerodha demat account
        </h2>
      <div className="py-3 d-flex d-md-block flex-column gap-4 d-md-grid gap-md-5 px-3 mt-md-5 ms-lg-4 ps-lg-4 ms-xl-5 ps-xl-5" style={{gridTemplateColumns:"1fr 1fr"}}>
         
          <div className="d-flex column-gap-5 signup_div"> 
               <img src="./media/images/signup_stocks-acop.svg" className="img-fluid signup_img" />
            <div className="d-flex flex-column justify-content-center" >
                  <h3 className="fs-5" style={{color:"#424242"}}>Stocks</h3>
                  <p className="zerodha-subtext_2" style={{color:"#666666"}}>Invest in all exchange-listed securities</p>
            </div>
          </div>

          <div className="d-flex column-gap-5 signup_div">
              <img src="./media/images/signup_mf-acop.svg" className="img-fluid signup_img"/>
            <div className="">
                  <h3 className="fs-5" style={{color:"#424242"}}>Mutual funds</h3>
                  <p className="zerodha-subtext_2" style={{color:"#666666"}}>Invest in commission-free direct mutual funds</p>
            </div>
          </div>

          <div className="d-flex column-gap-5 signup_div">
              <img src="./media/images/signup_ipo-acop.svg" className="img-fluid signup_img"/>
            <div className="d-flex flex-column justify-content-center">
                  <h3 className="fs-5" style={{color:"#424242"}}>IPO</h3>
                  <p className="zerodha-subtext_2" style={{color:"#666666"}}>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
         
           <div className="d-flex column-gap-5 signup_div" >
              <img src="./media/images/signup_fo-acop.svg" className="img-fluid signup_img"/>
            <div className="">
                  <h3 className="fs-5" style={{color:"#424242"}}>Futures & options</h3>
                  <p className="zerodha-subtext_2" style={{color:"#666666"}}>Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
           </div>

      </div>
         <div className="mt-5 signup_button">
             <button onClick={handleClick} className='btn text-white fs-5' style={{width:"250px", backgroundColor:"#387ED1"}}>Sign up for free</button>
         </div> 
    </div>
  );
}

export default Investment;
