import React from 'react';
import bgCover from '../images/bgCover.png';

export default function ForgetPassword() {
    return (
        <div className='w-full h-[100vh] py-2' style={{ backgroundImage: `url(${bgCover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className='flex flex-col items-center justify-center  mx-4 md:mx-[30%] h-full space-y-4'>
                <input type="text" name="email" id="email" className='p-2 w-full border outline-none' placeholder='Enter your email' />

                <button className='w-full rounded bg-black p-2 text-white font-semibold'>Sumbit</button>
            </div>
        </div>
    )
}
