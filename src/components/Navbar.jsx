import React, { useState, useEffect, useContext } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'
import { LoginContext } from '../contexts/LoginContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";


export default function Navbar() {
    const [hamClick, setHamClick] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { isLogin, setIsLogin } = useContext(LoginContext);

    const handleLogoutClick = () => {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('loggedInUser');

        navigate('/login');
    }

    return (
        <div className={`${location.pathname === "/" ?
            "bg-opacity-50 bg-gray-800 z-30 p-2 fixed top-4 right-20 left-20 rounded-full " :
            "text-white bg-blue-700 py-4"} `}> {/* */}
            <div className='  mx-28 px-5  items-center'>
                <div className="flex justify-between items-center">
                    <img className=' rounded-lg w-14 cursor-pointer ' src={logo} alt="" onClick={() => navigate('/')} />
                    <div className="flex items-center justify-center space-x-3">
                        <input type="text" name='email' inputMode='numeric' placeholder='Enter email'
                            className='border-[1px] h-9 w-[30rem] p-4 rounded-md outline-none text-black' />
                        <FaMagnifyingGlass className='bg-blue-600 text-4xl p-2 cursor-pointer rounded' />
                    </div>

                    <div className={`${hamClick ? 'absolute top-20 right-0 text-black flex flex-col bg-blue-400 w-full' : "hidden justify-between space-x-48"} md:flex justify-between`}>
                        <ul className={`${hamClick ? 'flex flex-col  ' : "flex space-x-8  items-center"} space-x-16`}>
                            <Link to={'/profile'} className='text-3xl'>
                                <FaRegUserCircle />
                            </Link>
                            <Link className='block' onClick={handleLogoutClick}>
                                <IoMdLogOut className='text-4xl cursor-pointer' />
                            </Link>
                        </ul>
                    </div>
                </div>

                {
                    hamClick ?
                        <IoMdClose className='md:hidden border-2 border-white p-1 text-4xl rounded' onClick={() => {
                            setHamClick(!hamClick)
                        }} />
                        :
                        <GiHamburgerMenu className='md:hidden border-2 border-white p-1 text-4xl rounded' onClick={() => {
                            setHamClick(!hamClick)
                        }} />
                }
            </div>
        </div>
    )
}
