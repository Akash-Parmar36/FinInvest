import React from 'react'

function Hero() {
    return (
        <div className='container  mb-5 pb-5  border-bottom'>
               <div className='text-center mt-5 pt-5'>
                     <h1>Zerodha Products</h1>
                     <h2 className='mt-4 text-muted fs-5 fw-normal'>Sleek, modern, and intuitive trading platforms</h2>
                     <p className='mt-4 mb-5 pb-5'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings <i className="fa-solid fa-arrow-right"></i></a></p>
               </div>
        </div>
    );
}

export default Hero;