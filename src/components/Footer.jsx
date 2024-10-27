import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className="footer bg-gray-900 text-white text-left mt-10">
                <div className="upperSection p-5 font-semibold text-lg flex flex-col md:text-base md:flex-row md:justify-evenly">
                    <div className="about flex flex-col">
                        <div className="p-2 my-2 text-gray-500">About</div>
                        <Link className="" to='/contact-us'>Contact Us</Link>
                        <Link className="" to='/about-app'>About Us</Link>
                        <Link className="" to='/'>Careers</Link>
                        <Link className="" to='/'>Wholesale</Link>
                        <Link className="" to='/'>Corperate Information</Link>
                    </div>
                    <div className="help flex flex-col">
                        <div className="p-2 my-2 text-gray-500">Help</div>
                        <Link className="" to='/'>Payment</Link>
                        <Link className="" to='/'>Shipping</Link>
                        <Link className="" to='/'>FAQ</Link>
                    </div>
                    <div className="socialMedia flex flex-col">
                        <div className="p-2 my-2 text-gray-500">Social Media</div>
                        <Link className="" to='https://www.instagram.com/' target='blank'>Instagram</Link>
                        <Link className="" to='https://www.facebook.com/' target='blank'>Facebook</Link>
                        <Link className="" to='https://twitter.com/' target='blank'>Twitter</Link>
                    </div>
                    <div className="mailUs flex flex-col">
                        <div className="p-2 my-2 text-gray-500">Email</div>
                        <Link to='mailto:example@gmail.com' className="">example@gmail.com</Link>
                    </div>
                </div>
                <div className="lowerSection py-2 text-center text-md border-t-2 border-gray-500">
                    <div className="">Copyright © 2024 bookcave.com. &nbsp; All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}
