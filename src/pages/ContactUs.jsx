import React from 'react'
import Navbar from '../components/Navbar'

export default function ContactUs() {
    return (
        <div className='md:mx-[20%] text-black bg-white h-[100vh]'>
            <Navbar />

            <h2 className='font-bold text-2xl m-7 text-center'>Let's start conversition</h2>

            <div className="flex justify-around">
                <form action="submit" className="">
                    <span>note: all fields are required*</span>

                    <main className='space-y-2 '>
                        <div className="">
                            <label htmlFor="firstname" className='block text-sm'>First Name</label>
                            <input type="text" className='px-4 p-2 border w-80 rounded outline-none' name="firstname" id="firstname" />
                        </div>

                        <div className="">
                            <label htmlFor="lastname" className='block text-sm'>Last Name</label>
                            <input type="text" className='px-4 p-2 border w-80 rounded outline-none' name="lastname" id="lastname" />
                        </div>

                        <div className="phone">
                            <label htmlFor="phone" className='block text-sm'>phone</label>
                            <input type="tel" className='px-4 p-2 border w-80 rounded outline-none' name="phone" id="phone" placeholder="(123)456-7890" />
                        </div>

                        <div className="">
                            <label htmlFor="message" className='block text-sm'>message</label>
                            <textarea name="message" className='px-4 p-2 border w-80 rounded outline-none' id="message" cols="30" rows="8"></textarea>
                        </div>

                        <input type="submit" value="Submit" className=' w-80 bg-blue-600 rounded p-2 text-white font-semibold' />
                    </main>
                </form>

                <img className='w-[30rem] align-middle' src="https://westward360.com/wp-content/uploads/2021/01/Hero-Contact-Image.svg" alt="contact us" />
            </div>
        </div>
    )
}
