import React , { useState } from 'react'
import Heading from './Heading';
import Signup from './Signup';
import Investment from './Investment';
import DematAccount from './DematAccount';
import Pricing from './Pricing';
import AccountTypes from './AccountTypes';
import Faq from './Faq';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import ScrollToTop from "../ScrollToTop.js";
import toast, { Toaster } from 'react-hot-toast';


function SignUpPage() {

    const [loading , setLoading] = useState(false);

    if(loading){
        return (<div className='loading-screen '>
                   <div className='loader'></div>
                   <Toaster />
        </div>)
    }

    return (
        <>   
             <Navbar />
             <ScrollToTop />
             <Heading />
             <Signup setLoading={setLoading}/>
             <Investment />
             <DematAccount />
             <Pricing />
             <AccountTypes />
             <Faq />
             <OpenAccount />
             <Footer />
        </>
    );
}

export default SignUpPage;