import React from 'react'


function Hero() {
    return (
         <div className='container-fluid p-5 me-5 text-white' id='supportHero'>
              <div className='row px-5 mx-5 '>
                         <h4 className='col-6 ps-5 fs-5'><a href='' className='text-decoration-none text-white'>Support Portal</a></h4>
                         <h4 className='col-6 pe-5 text-end fs-6'><a href='#' className='text-white me-5 text-decoration-none pb-2' style={{borderBottom:"1.5px solid white"}}>Track tickets</a></h4>
              </div>
              <div className='row ps-5 ms-5 mb-5'>
                          <div className='col-6 pt-5 ps-5'>
                                <h4 className='fs-4 fw-normal'>Search for an answer or browse help topics to create a ticket</h4>
                                <div className='d-flex mt-5 w-100'>
                                      <input placeholder='Eg: how do i activate F&O, why is my order getting rejected...' className='w-100 p-3 border-0 rounded-start-2'/>
                                      <span className='bg-white py-2 px-3 border-0 rounded-end-2'><i className="fa-solid fa-magnifying-glass bg-white text-black mt-2 pt-2 text-muted" ></i></span>
                                </div>
                                
                                <div className='mt-3' style={{fontSize:"1.1rem"}}>
                                    <a href='' className='me-3 text-white text-decoration-none pb-2' style={{borderBottom:"1.5px solid white"}}>Track account opening</a>
                                    <a href='' className='me-3 text-white text-decoration-none pb-2' style={{borderBottom:"1.5px solid white"}}>Track segment activation</a>
                                    <a href='' className='text-white text-decoration-none pb-2' style={{borderBottom:"1.5px solid white"}}>Intraday margins</a>
                                    <a href='' className='text-white text-decoration-none d-block mt-3 pb-2' style={{borderBottom:"1.5px solid white" , width:"21.5%"}}>Kite user manual</a> 
                                </div>
                          </div>
                          <div className='col-6 p-5 mt-4 '>
                                 <h4 className='mb-4'>Featured</h4>
                                 <ol className='ps-4 pe-5 me-5'>
                                    <li className='mb-4'><a href='' className='text-white fs-6'>Adjustment of F&O contracts of BAJFINANCE on <br />account of bonus and split</a></li>
                                    <li><a href='' className='text-white'>Surveillance measure on scrips - June 2025</a></li>
                                 </ol>
                          </div>
              </div>
         </div>
    );
}

export default Hero;