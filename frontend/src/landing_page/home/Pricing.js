import React from 'react'


function Pricing() {
    return (
        <div className='container pb-0 pb-md-5 py-5'>
              <div className='row justify-content-xl-evenly justify-content-lg-between justify-content-around pb-5 px-3 px-sm-0'>
                    <div className='col-md-4 pt-4 px-0 p-lg-4 '>
                           <h1 className='mb-3 zerodha-heading_2'>Unbeatable pricing</h1>
                           <p className='text-muted mb-xl-4 zerodha-subtext'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                           <a href='#' style={{textDecoration:"none" , color:"#387ED1"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='col-md-6 mt-5 mt-md-0'>'
                         <div className='row text-center'>
                                 <div className='col-sm-6 border p-3'>
                                       <h1 className='mb-3'>₹0</h1>
                                       <p>Free equity delivery and <br />direct mutual funds</p>
                                 </div>
                                 <div className='col-sm-6 mt-5 mt-sm-0 border p-3 d-flex flex-column justify-content-evenly'>
                                       <h1 className='mb-3'>₹20</h1>
                                       <p>Intraday and F&O</p>
                                 </div>
                         </div>
                    </div>
              </div>
        </div>
    );
}

export default Pricing;