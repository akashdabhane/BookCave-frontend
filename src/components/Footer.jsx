import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="footer bg-gray-900 text-white text-left mt-10">
                <div className="upperSection p-5 font-semibold text-lg flex flex-col md:text-base md:flex-row md:justify-evenly">
                    <div className="about flex flex-col">
                        <div className="p-2 my-2 text-gray-500" href='/'>About</div>
                        <a className="" href='/'>Contact Us</a>
                        <a className="" href='/'>About Us</a>
                        <a className="" href='/'>Careers</a>
                        <a className="" href='/'>Wholesale</a>
                        <a className="" href='/'>Corperate Information</a>
                    </div>
                    <div className="help flex flex-col">
                        <div  className="p-2 my-2 text-gray-500">Help</div>
                        <a  className="" href='/'>Payment</a>
                        <a  className="" href='/'>Shipping</a>
                        <a  className="" href='/'>FAQ</a>
                    </div>
                    <div className="socialMedia flex flex-col">
                        <div  className="p-2 my-2 text-gray-500">Social Media</div>
                        <a  className="" href='https://www.instagram.com/' target='blank'>Instagram</a>
                        <a  className="" href='https://www.facebook.com/' target='blank'>Facebook</a>
                        <a  className="" href='https://twitter.com/' target='blank'>Twitter</a>
                    </div>
                    <div className="mailUs flex flex-col">
                        <div className="p-2 my-2 text-gray-500">Email</div>
                        <a href='mailto:example@gmail.com' className="">example@gmail.com</a>
                    </div>
                </div>
                <div className="lowerSection py-2 text-center text-md border-t-2 border-gray-500">
                    <div className="">Copyright © 2023 eShop.com. &nbsp; All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}
