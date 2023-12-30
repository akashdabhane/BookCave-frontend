import React from 'react'

export default function ForgetPassword() {
    return (
        <div className='flex flex-col mx-4 md:mx-[30%] h-[100vh] space-y-4 items-center justify-center '>
            <input type="text" name="phone" id="phone" className='p-2 w-full border outline-none' placeholder='Enter your phone number' />

            <button className='w-full rounded bg-black p-2 text-white font-semibold'>Sumbit</button>
        </div>
    )
}
