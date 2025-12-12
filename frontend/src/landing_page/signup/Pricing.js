import React from 'react'


function Pricing() {
    return (
        <div className='container-xl p-5'>
                 <div className='row justify-content-between justify-content-xl-around justify-content-xxl-center py-lg-5'>
                          <div className='col-lg-5 px-0 align-self-center mb-5 mb-lg-0'>
                               <p className='text-center'><img src='./media/images/signup_acop-benefits.svg' className='img-fluid demat-account_img'/></p>
                               <h2 className='demat-account_h2 ms-1 mt-5 text-lg-center px-2' style={{color:"#424242"}}>Benefits of opening a Zerodha demat account</h2>
                          </div>
                           
                          <div className='col-lg-6 px-xxl-5 '>
                                <h3 className='fs-5 mb-4' style={{color:"#424242"}}>Unbeatable pricing</h3>
                                <p className='zerodha-subtext text-muted'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                                
                                <h3 className='fs-5 mb-4 mt-5' style={{color:"#424242"}}>Best investing experience</h3>
                                <p className='zerodha-subtext text-muted'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                                
                                <h3 className='fs-5 mb-4 mt-5' style={{color:"#424242"}}>No spam or gimmicks</h3>
                                <p className='zerodha-subtext text-muted'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                                
                                <h3 className='fs-5 mb-4 mt-5' style={{color:"#424242"}}>The Zerodha universe</h3>
                                <p className='zerodha-subtext text-muted'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                          </div>
                 </div> 
        </div>
    );
}

export default Pricing;