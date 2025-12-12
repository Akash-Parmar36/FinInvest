import React , {useState , useEffect} from 'react'
 

function DematAccount() {

        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleResize);
          
          // Cleanup
          return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <div style={{backgroundColor:"#fafafb"}} className='my-5'>
        <div className='container-lg p-5'> 
                <div className='row p-lg-5 justify-content-evenly justify-content-lg-between justify-content-xl-evenly'>
                          <h2 className='fs-4 text-center mb-5' style={{color:"#424242" , position:"relative" ,  left: windowWidth > 1300 ? "-70px" : "0px"}}>Steps to open a demat account with Zerodha</h2>

                          <div className='col-md-5 col-lg-6 col-xl-5 mt-5'>
                               <img src='./media/images/signup_steps-acop.svg' className='img-fluid w-100 h-100' />    
                          </div>

                          <div className='col-md-6 col-lg-5 mt-5'>
                                  <div className='row justify-content-around justify-content-sm-between justify-content-md-start border border-0 border-bottom d-flex align-center flex-row align-items-center' style={{height: windowWidth <= 576 ? "3rem" : "4.48rem"}}> 
                                          <div className='col-1 border border-1 rounded-circle text-center p-0' style={{width:"1.85rem",height:"1.85rem",color:"#424242"}} >
                                                   01
                                          </div>
                                          <div className='col-10 col-sm-11 col-md-10 col-xl-8 p-0 ms-md-3 demat-account'>
                                                  Enter the requested details
                                          </div>
                                  </div>
                                  <div className='row justify-content-around justify-content-sm-between justify-content-md-start border border-0 border-bottom  d-flex align-center flex-row align-items-center' style={{height: windowWidth <= 576 ? "3rem" : "4.48rem"}}>
                                          <div className='col-1 border border-1 rounded-circle text-center p-0' style={{width:"1.85rem",height:"1.85rem",color:"#424242"}} >
                                                   02
                                          </div>
                                          <div className='col-10 col-sm-11 col-md-10 col-xl-8 p-0 ms-md-3 demat-account'>
                                                 Complete e-sign & verification
                                          </div>
                                  </div>
                                  <div className='row justify-content-around justify-content-sm-between justify-content-md-start border border-0 border-bottom  d-flex align-center flex-row align-items-center' style={{height: windowWidth <= 576 ? "3rem" : "4.48rem"}}>
                                          <div className='col-1 border border-1 rounded-circle text-center p-0' style={{width:"1.85rem",height:"1.85rem",color:"#424242"}} >
                                                   03
                                          </div>
                                          <div className='col-10 col-sm-11 col-md-10 col-xl-8 p-0 ms-md-3 demat-account'>
                                                Start investing!
                                          </div>
                                  </div>

                          </div>
                </div>
        </div>
    </div>
    );
}


export default DematAccount;

// style={{width:"373px",maxHeight:"100%"}}

// style={{height:"4.48rem"}}