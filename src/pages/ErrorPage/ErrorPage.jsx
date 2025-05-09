import React from 'react';
import { MdError } from "react-icons/md";

const ErrorPage = () => {
    return (
        <div className=''>
            <div className='text-center text-red-500'>
                <h1 className='text-5xl'>404 - Page Not Found</h1>
            <p className='text-2xl'>Oops! The page you’re looking for does’nt exist. 
It might have been moved, deleted, or never existed in the <br /> first place.

🔍 Try going back to the [homepage] or check the URL for errors.
If you believe this is a mistake, <br /> [contact support].</p>
            </div>
            <div className='text-3xl flex justify-center py-10'>
            <MdError />
            </div>
        </div>
    );
};

export default ErrorPage;