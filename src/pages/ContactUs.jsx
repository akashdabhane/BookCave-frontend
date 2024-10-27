import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';


export default function ContactUs() {
    const [emailData, setEmailData] = useState({
        from: "",
        subject: "",
        message: "",
        fullname: "",
        phone: ""
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setEmailData({
            ...emailData,
            [name]: value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(emailData);

        try {
            axios.post(`${baseUrl}/emails/contact-us`, emailData, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(data => {
                    console.log('data', data);
                })
                .catch(error => {
                    console.log('error', error);
                })
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className=' text-black bg-white h-[100vh]'>
            <Navbar />

            <div className="md:mx-[20%] ">
                <h2 className='font-bold text-2xl m-7 text-center'>Let's start conversition</h2>

                <div className="flex justify-around">
                    <form className="">
                        <span>Note: all fields are required*</span>

                        <main className='space-y-2 '>
                            <div className="">
                                <label htmlFor="fullname" className='block text-sm'>Full Name</label>
                                <input type="text" className='px-4 p-2 border w-80 rounded outline-none' name="fullname" id="fullname" onChange={handleOnChange} />
                            </div>

                            <div className="phone">
                                <label htmlFor="phone" className='block text-sm'>Phone</label>
                                <input type="tel" className='px-4 p-2 border w-80 rounded outline-none' name="phone" id="phone" placeholder="8964753102" onChange={handleOnChange} />
                            </div>

                            <div className="email">
                                <label htmlFor="email" className='block text-sm'>Email</label>
                                <input type="tel" className='px-4 p-2 border w-80 rounded outline-none' name="from" id="email" placeholder="example@gmail.com" onChange={handleOnChange} />
                            </div>

                            <div className="">
                                <label htmlFor="subject" className='block text-sm'>Subject</label>
                                <input type="text" className='px-4 p-2 border w-80 rounded outline-none' name="subject" id="subject" onChange={handleOnChange} />
                            </div>

                            <div className="">
                                <label htmlFor="message" className='block text-sm'>Message</label>
                                <textarea name="message" className='px-4 p-2 border w-80 rounded outline-none' id="message" cols="30" rows="8" onChange={handleOnChange}></textarea>
                            </div>

                            <button onClick={handleOnSubmit} className='w-80 bg-blue-600 rounded p-2 text-white font-semibold' >Submit</button>
                        </main>
                    </form>

                    <img className='-ml-96 opacity-40 md:opacity-100 w-[30rem] align-middle' src="https://westward360.com/wp-content/uploads/2021/01/Hero-Contact-Image.svg" alt="contact us" />
                </div>
            </div>

            <Footer />
        </div>
    )
}
