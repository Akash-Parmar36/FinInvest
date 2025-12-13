import React from 'react'
import Heading from './Heading';
import Signup from './Signup';
import Investment from './Investment';
import DematAccount from './DematAccount';
import Pricing from './Pricing';
import AccountTypes from './AccountTypes';
import Faq from './Faq';
import OpenAccount from '../OpenAccount';


function SignUpPage() {

    return (
        <>
             <Heading />
             <Signup/>
             <Investment />
             <DematAccount />
             <Pricing />
             <AccountTypes />
             <Faq />
             <OpenAccount />
        </>
    );
}

export default SignUpPage;