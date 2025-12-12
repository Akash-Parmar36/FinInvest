import React, { useState } from 'react';
 

function Hero() {
    return (
        <div className='container-xl py-4 py-md-5 px-md-4 px-lg-3 px-xl-5'>
                  <div className='row text-center py-md-5'>
                           <h1 className='pricing_h2 mb-0'>Charges</h1>
                           <p className='my-3' style={{fontSize:"20px" , color:"#9B9B9B"}}>List of all charges and taxes</p>
                  </div>

                  <div className='row_display text-center py-5'>
                           <div className='four columns'>
                                 <img src='media/images/pricing0.svg' alt='price 0 Image' className='pricing_img mb-md-3'/>
                                 <h2 className='mb-4' style={{color:"#424242" , fontSize:"28px"}}>Free equity delivery</h2>
                                 <p className='my-3' style={{fontSize:"17px" , color:"#666666" , lineHeight:"1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                           </div>
                           <div className='four columns'>
                                 <img src='media/images/intradayTrades.svg' alt='price 0 Image' className='pricing_img mb-md-3'/>
                                 <h2 className='mb-4' style={{color:"#424242", fontSize:"28px"}}>Intraday and F&O trades</h2>
                                 <p className='my-3' style={{fontSize:"17px" , color:"#666666" , lineHeight:"1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                           </div>
                            <div className='four columns'>
                                 <img src='media/images/pricing0.svg' alt='price 0 Image' className='pricing_img mb-md-3'/>
                                 <h2 className='mb-4' style={{color:"#424242", fontSize:"28px"}}>Free direct MF</h2>
                                 <p className='my-3' style={{fontSize:"17px" , color:"#666666" , lineHeight:"1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                           </div>
                  </div>
      </div>
    );
}

export default Hero;
