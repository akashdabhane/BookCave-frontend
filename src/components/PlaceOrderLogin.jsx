import React, { useEffect } from 'react'
import { FaTruck, FaBell, FaStar } from "react-icons/fa";

export default function PlaceOrderLogin({ display, setDisplay, userData }) {
    useEffect(() => {
        console.log(userData);
    }, [])
    
    return (
        <div onClick={() => setDisplay(0)}>
            <div className={`flex p-4 text-lg space-x-4 cursor-pointer  ${display === 0 ? "bg-blue-600 text-white" : "text-gray-400 shadow-md"} `}>
                <span className={`p-[0.08rem] px-[0.5rem] rounded text-blue-600 ${display === 0 ? "bg-white" : "bg-gray-200 "}`}>{1}</span>
                <h2 className='font-bold text-xl capitalize '>LOGIN</h2>
            </div>

            <div className={`${display === 0 ? "shadow-md py-4" : "hidden"}`}>
                <div className="p-8 md:px-16 flex flex-col md:flex-row justify-between ">
                    <div className="space-y-2 md:w-[40%]">
                        {
                            (userData?.firstname || userData?.lastname) && (
                                <div className="space-x-4 text-lg ">
                                    <span className='text-gray-500 '>Name</span>
                                    <span className='font-semibold '>{userData?.firstname + " " + userData?.lastname}</span>
                                </div>
                            )
                        }
                        {
                            userData?.phone && (
                                <div className="space-x-4 text-lg ">
                                    <span className='text-gray-500'>Phone</span>
                                    <span className='font-semibold'>{userData?.phone}</span>
                                </div>
                            )
                        }
                        {
                            userData?.email && (
                                <div className="space-x-4 text-lg ">
                                    <span className='text-gray-500'>Email</span>
                                    <span className='font-semibold'>{userData?.email}</span>
                                </div>
                            )
                        }
                        <h4 className='text-blue-600 font-semibold '>Logout and Sign in to another account</h4>

                        <button className='bg-orange-600 text-white font-semibold w-full text-lg p-3' onClick={() => setDisplay(1)}>Continue Checkout</button>
                    </div>

                    <div className="space-y-2 ">
                        <h3 className='text-gray-500 text-lg '>Advantages of our secure login</h3>

                        <ul className='space-y-2 text-lg '>
                            <li className='flex items-center space-x-2'>
                                <FaTruck className="text-blue-600 " />
                                <span>Easily Track Orders, Hassle free Returns</span>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <FaBell className='text-blue-600' />
                                <span>Get Relevant Alerts and Recommendation</span>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <FaStar className='text-blue-600' />
                                <span>Wishlist, Reviews, Ratings and more</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='px-2 md:px-16 text-gray-500'>Please note that upon clicking "logout" will lose all the items in cart and will be redirected to Flipkart phone page </p>
            </div>

        </div>
    )
}
