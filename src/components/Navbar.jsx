import React, { useState, useEffect, useContext } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { LoginContext } from '../contexts/LoginContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



export default function Navbar() {
    const [hamClick, setHamClick] = useState(null);
    const navigate = useNavigate();
    const { isLogin, setIsLogin } = useContext(LoginContext)

    useEffect(() => {

    }, [localStorage])

    const handleLogoutClick = () => {
        navigate('/login');
        localStorage.setItem('isLogin', 'false');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('userIdGlobal');
        localStorage.removeItem('publisher');
        isLogin(false);
    }

    return (
        <div className="text-white bg-blue-600 p-2">
            <div className='  mx-28 text-2xl px-5  items-center'>
                <div className="flex justify-between items-center">
                    <img className=' rounded-lg w-20 cursor-pointer ' src={logo} alt="" onClick={() => navigate('/')} />
                    <div className={`${hamClick ? 'absolute top-20 right-0 text-black flex flex-col bg-blue-400 w-full' : "hidden justify-between space-x-48"} md:flex justify-between`}>
                        <ul className={`${hamClick ? 'flex flex-col  ' : "flex space-x-8  items-center"} `}>
                            <Link to={'/'} className='font-bold'>Home</Link>
                            <Link to={'/search'} className='font-bold'>Search</Link>
                            <Link to={'/profile'} className='font-bold'>Profile</Link>
                        </ul>
                    </div>
                    <Link className='block' onClick={handleLogoutClick}>
                        <IoMdLogOut className='text-4xl cursor-pointer' />
                    </Link>
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
