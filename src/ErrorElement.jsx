import React from 'react';
import err from '../E1.json'
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
const ErrorElement = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <Lottie className='w-full h-[600px]' animationData={err}></Lottie>
            <div className='flex justify-center items-center w-full'>
                <button className='btn btn-outline' onClick={() => navigate(-1)}>Back to Home</button>
            </div>
        </div>
    );
};

export default ErrorElement;