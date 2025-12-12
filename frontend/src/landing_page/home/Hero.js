// import React from 'react'
// import { Link } from 'react-router-dom';

// function Hero() {
//     return (
//          <div className="container p-5 mb-5">
//                 <div className="row text-center">
//                         <img src='media/images/homeHero.png' alt="Hero" className='mb-5'/>
//                         <h1 className='mt-5'>Invest in everything</h1>
//                         <p className='mt-2 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
//                         <Link to="/signup" ><button className='btn text-white fs-5 mb-5 mt-3' style={{width:"17%",margin:"0 auto",backgroundColor:"#387ED1"}}>Sign up for free</button></Link>
//                 </div>
//          </div>
//     );
// }

// export default Hero;



import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxHeight: '330px' }}
          />
          <h1 className="mt-4 fw-semibold zerodha-heading">Invest in everything</h1>
          <p className="mt-2 text-muted fs-5" style={{lineHeight: "1.8"}}>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <Link to="/signup">
            <button
              className="btn text-white fs-5 px-4 py-2 mt-3"
              style={{ backgroundColor: '#387ED1' }}
            >
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
