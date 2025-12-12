import React from 'react'

import { useLocation, useNavigate } from "react-router-dom";

function OpenAccount() {
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
        <div className="container p-5">
        <div className="row text-center">
                <h2 className='zerodha-heading_openAccount' style={{color:"#424242"}}>Open a Zerodha account</h2>
                <p className='mt-3 text-muted zerodha-subtext'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button onClick={handleClick} className='btn text-white fs-5 px-4 py-2 mt-3 mx-auto' style={{width:"200px", backgroundColor:"#387ED1"}}>Sign up for free</button>
        </div>
 </div>
    );
}

export default OpenAccount;

// fs-5