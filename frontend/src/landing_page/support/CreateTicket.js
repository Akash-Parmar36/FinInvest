import React from 'react'


function CreateTicket() {
    return (
         <div className='container px-5'>
                 <div className='row mt-3 p-5 px-5'>
                         <h4 className='text-muted fw-normal'>To create a ticket, select a relevant topic</h4>

                         <div className='col-4 mt-5 pt-5 ps-4'>
                                 <h4 className='text-muted fs-5'><i class="fa-solid fa-circle-plus pe-1"></i> Account Opening</h4>
                                 <div className='mt-4 pt-2 ps-4 ms-2'>
                                      <a href='' className='d-block text-decoration-none supportAnchor'>Resident individual</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Minor</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Non Resident Indian (NRI)</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Company, Partnership, HUF and LLP</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Glossary</a>                                 
                                 </div>
                         </div>

                         <div className='col-4 mt-5 pt-5 ps-4'>
                                 <h4 className='text-muted fs-5'><i class="fa-regular fa-user pe-1"></i> Your Zerodha Account</h4>
                                 <div className='mt-4 pt-2 ps-4 ms-2'>
                                      <a href='' className='d-block text-decoration-none   supportAnchor'>Your Profile</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Account modification</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Client Master Report (CMR) and Depository Participant (DP)</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Nomination</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Transfer and conversion of securities</a>                                 
                                 </div>
                         </div>

                         <div className='col-4 mt-5 pt-5 ps-4'>
                                 <h4 className='text-muted fs-5'><i class="fa-solid fa-chart-simple pe-1"></i> Kite</h4>
                                 <div className='mt-4 pt-2 ps-4 ms-2'>
                                      <a href='' className='d-block text-decoration-none   supportAnchor'>IPO</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Trading FAQs</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Margin Trading Facility (MTF) and Margins</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Charts and orders</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Alerts and Nudges</a>                                 
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>General</a>                                 
                                 </div>
                         </div>

                         <div className='col-4 mt-5 pt-5 ps-4'>
                                 <h4 className='text-muted fs-5'><i class="fa-solid fa-wallet pe-1"></i> Funds</h4>
                                 <div className='mt-4 pt-2 ps-4 ms-2'>
                                      <a href='' className='d-block text-decoration-none  supportAnchor'>Add money</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Withdraw money</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Add bank accounts</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>eMandates</a>                               
                                 </div>
                         </div>

                         <div className='col-4 mt-5 pt-5 ps-4'>
                                 <h4 className='text-muted fs-5'>&#x40; Console</h4>
                                 <div className='mt-4 pt-2 ps-4 ms-2'>
                                      <a href='' className='d-block text-decoration-none  supportAnchor'>Portfolio</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Corporate actions</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Funds statement</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Reports</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Profile</a>                                 
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Segments</a>                                 
                                 </div>
                         </div>

                         <div className='col-4 mt-5 pt-5 ps-4'>
                                 <h4 className='text-muted fs-5'><i class="fa-solid fa-coins pe-1"></i> Coin</h4>
                                 <div className='mt-4 pt-2 ps-4 ms-2'>
                                      <a href='' className='d-block text-decoration-none  supportAnchor'>Mutual funds</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>National Pension Scheme (NPS)</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Features on Coin</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>Payments and Orders</a>
                                      <a href='' className='d-block text-decoration-none mt-3 supportAnchor'>General</a>                                 
                                 </div>
                         </div> 
                 </div>
         </div>
    );
}

export default CreateTicket;