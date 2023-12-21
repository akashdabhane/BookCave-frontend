import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import logo from '../images/logo.png'

export default function AboutApp() {
    return (
        <div className='md:mx-[20%] flex flex-col justify-between bg-white h-[100vh]'>
            <Navbar />
            <div className="mx-4 md:mx-24 my-8 space-y-4 ">
                <div className="flex align-middle space-x-6">
                    <img className='rounded-lg w-16' src={logo} alt="logo" />
                    <h2 className='text-2xl font-semibold text-gray-600 '>About our App</h2>
                </div>
                <h2 className='text-xl '>What does this app do</h2>

                <p>App serves the purpose to be a medium between small book shop in city of Mumbai and customers. Due to covid Shops are closed because of which it is hard to make living for small shop owners and also for customers to buy.</p>

                <h3 className='text-lg font-semibold leading-8'>This app will give opportunity to them to make liing for small shop owner <br /> Also will give booknerds the books they want at home</h3>
            </div>
            <Footer />
        </div>
    )
}
