import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    const handleError = () => {
        navigate('/');
    };

    return (
        <div className='bg-blue-50 h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                <p className='text-2xl text-gray-700 text-center font-semibold mb-4'>
                    Oops! Something went wrong!
                </p>
                <button 
                    className='text-gray-700 font-semibold border-2 px-4 py-2 rounded-lg border-gray-700 cursor-pointer shadow-sm hover:bg-gray-100 transition'
                    onClick={handleError}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
