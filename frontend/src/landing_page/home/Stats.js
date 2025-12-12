import React from 'react'


function Stats() {
    return (
        <div className='container px-xl-5 py-sm-5 my-2'>
            <div className='row mt-5 p-xl-5 justify-content-center'>
                <div className='col-lg-5 pt-5'>
                    <h1 className='mb-5 zerodha-heading'>Trust with confidence</h1>
                    <h2 className='zerodha-heading_2' style={{color:"#444444"}}>Customer-first always</h2>
                    <p className='text-muted zerodha-subtext'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='zerodha-heading_2 mt-5' >No spam or gimmicks</h2>
                    <p className='text-muted zerodha-subtext'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <b>Our philosophies.</b></p>

                    <h2 className='zerodha-heading_2 mt-5'>The Zerodha universe</h2>
                    <p className='text-muted zerodha-subtext'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='zerodha-heading_2 mt-5'>Do better with money</h2>
                    <p className='text-muted zerodha-subtext'>With initiatives like <b>Nudge</b> and <b>kill Switch</b>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-lg-7 mt-lg-5 mt-xxl-0 pt-5'>
                    <img src='media/images/ecosystem.png' className='img-fluid' alt='Stats' />
                    <div className='center mt-5 mt-xl-3 text-center d-flex justify-content-evenly'>
                            <div><a href='#' className='' style={{textDecoration:"none" , color:"#387ED1"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a></div>
                            <div><a href='#' className='' style={{textDecoration:"none" , color:"#387ED1"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;

