import React from 'react'



function AccountTypes() {
    return (
        <div className='container-xl py-5 px-5 px-lg-4 px-xl-0 px-xxl-5'>
              <div className='row px-sm-5 px-lg-0'>
                  <h2 className='demat-account_h2 text-center' style={{color:"#424242"}}>Explore different account types </h2>
              </div>
              <div className='row pt-5 justify-content-around'>

                     <div className='col-sm-11 col-md-10 col-lg-3 rounded-2 account-type'>
                             <img src='./media/images/signup_acop-individual.svg' />
                             <h3 className='mb-3' style={{fontSize:"1.125rem",color:"#444444"}}>Individual Account</h3>
                             <p className='mt-3 mb-0' style={{color:"#666666" , fontSize:"17px" , lineHeight:"1.8"}}>Invest in equity, mutual funds and derivatives</p>
                     </div>
                      
                     <div className='col-sm-11 col-md-10 col-lg-3 rounded-2 account-type mt-5 mt-lg-0'>
                             <img src='./media/images/signup_acop-huf.svg' />
                             <h3 className='mb-3' style={{fontSize:"1.125rem",color:"#444444"}}>HUF Account</h3>
                             <p className='mt-3 mb-0' style={{color:"#666666", fontSize:"17px" , lineHeight:"1.8"}}>Make tax-efficient investments for your family</p>
                     </div>

                     <div className='col-sm-11 col-md-10 col-lg-3 rounded-2 account-type mt-5 mt-lg-0'>
                             <img src='./media/images/signup_acop-nri.svg' />
                             <h3 className='mb-3' style={{fontSize:"1.125rem",color:"#444444"}}>NRI Account</h3>
                             <p className='mt-3 mb-0' style={{color:"#666666", fontSize:"17px" , lineHeight:"1.8"}}>Invest in equity, mutual funds, debentures, and more</p>
                     </div>
              </div>
              <div className='row pt-5 justify-content-around'>
                     
                     <div className='col-sm-11 col-md-10 col-lg-3 rounded-2 account-type'>
                             <img src='./media/images/signup_acop-minor.svg' />
                             <h3 className='mb-3' style={{fontSize:"1.125rem",color:"#444444"}}>Minor Account</h3>
                             <p className='mt-3 mb-0' style={{color:"#666666", fontSize:"17px" , lineHeight:"1.8"}}>Teach your little ones about money & invest for their future with them</p>
                     </div>

                     <div className='col-sm-11 col-md-10 col-lg-3 rounded-2 account-type mt-5 mt-lg-0'>
                             <img src='./media/images/signup_acop-corporate.svg' />
                             <h3 className='mb-4' style={{fontSize:"1.125rem",color:"#444444"}}>Corporate / LLP/ Partnership</h3>
                             <p className='mt-3 mb-0' style={{color:"#666666", fontSize:"17px" , lineHeight:"1.8"}}>Manage your business surplus and investments easily</p>
                     </div>

                     <div className='col-lg-3'>
                             
                     </div>
              </div>
        </div>
    );
}

export default AccountTypes;