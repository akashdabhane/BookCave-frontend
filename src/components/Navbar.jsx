import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'


export default function Navbar() {
    const navigate = useNavigate(); 

    return (
        <div className='text-white bg-blue-600 flex justify-between text-2xl px-5 p-2 items-center'>
            <img className='rounded-lg w-20 cursor-pointer ' src={logo} alt="" onClick={() => navigate('/')} />
            <ul className='flex space-x-8 justify-center items-center'>
                <Link to={'/'} className='font-bold'>Home</Link>
                <Link to={'/search'} className='font-bold'>Search</Link>
                <Link to={'/profile'} className='font-bold'>Profile</Link>
            </ul>
            <Link to={'/login'}>
                <IoMdLogOut className='text-4xl cursor-pointer' />
            </Link>
        </div>
    )
}