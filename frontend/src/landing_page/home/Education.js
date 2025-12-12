import React from 'react'


function Education() {
    return ( 
        <div className='container p-3 p-md-2'>
                 <div className='row justify-content-md-between py-md-5 px-xl-5'>
                          <div className='col-md-5 mt-5 pt-md-5 pt-lg-0 mt-lg-0 mb-5 text-center'>
                             <img src='media/images/education.svg' alt='Education' className='img-fluid' style={{maxHeight:"325px"}}/>
                          </div>
                          <div className='col-md-6 mt-5 mt-md-0'>
                               <h1 className='zerodha-heading'>Free and open market education</h1>
                               <p className='mt-4 text-muted zerodha-subtext'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                               <a href='#' style={{textDecoration:"none" , color:"#387ED1"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                               <p className='mt-5 text-muted zerodha-subtext'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                               <a href='#' style={{textDecoration:"none" , color:"#387ED1"}}>TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
                          </div>
                 </div>
        </div>
    );
}

export default Education;

// px-0