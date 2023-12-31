import React, { useState, useContext, useEffect } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import bgCover from '../images/bgCover.png'
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { setPhoneGlobal, setUserIdGlobal, setPublisherGlobal, setIsLogin, userIdGlobal, isLogin, phoneGlobal } = useContext(LoginContext);

    const handleOnClick = async (event) => {
        event.preventDefault();

        if (phone.length === 10 && password.length >= 6 && password.length <= 16) {
            try {
                await axios.post(`${baseUrl}/api/login`, {
                    phone: phone,
                    password: password,
                })
                    .then((data) => {
                        console.log(data);
                        setPhone('');
                        setPassword('');

                        setPhoneGlobal(data.data.phone);
                        setPublisherGlobal(data.data.publisher);
                        setUserIdGlobal(data.data._id);

                        console.log(data.data._id);
                        console.log(userIdGlobal);

                        localStorage.setItem('isLogin', 'true');
                        localStorage.setItem('userIdGlobal', data.data._id);
                        localStorage.setItem('publisher', data.data.publisher); 

                        // navigate to the home page
                        navigate('/')

                    })
                    .catch(error => {
                        console.log(error);
                        // setError(error.response.data.message);
                    })

                console.log(userIdGlobal);
            } catch (error) {
                console.log(error);
            }
        } else if (phone.length !== 10) {
            return setError("enter valid phone number");
        } else if (password.length <= 6 || password.length >= 16) {
            return setError("password length must be between 6 to 16 characters");
        }
    }

    return (
        <div className='w-full h-[100vh] py-24' style={{ backgroundImage: `url(${bgCover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='mx-4 md:m-auto text-black bg-white p-6 md:w-[36%] h-[33rem] rounded-md  align-middle py-20 space-y-8'>
                <h2 className="heading mx-4 md:mx-24 text-2xl font-bold">Login</h2>
                <span className='mx-4 md:mx-24 text-sm text-red-600'>{error}</span>
                <form className='text-center mx-4 md:mx-24 space-y-4' >
                    <input type="text" inputMode='numeric' value={phone} onChange={(event) => setPhone(event.target.value)} placeholder='enter phone number' className='border-[1px] w-full p-4 outline-none' />
                    <div className="flex items-center align-middle border-[1px] w-full">
                        <input type={`${showPassword ? 'text' : 'password'}`} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete='false' placeholder='password' className='outline-none p-4 w-full' />
                        <div className="text-2xl px-2 cursor-pointer ">
                            {showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} /> : <FaEye onClick={() => setShowPassword(true)} />}
                        </div>
                    </div>
                    <div className="flex justify-between text-sm">
                        <div className="">
                            <input type="checkbox" name="staySign" id="staySigned" />
                            <label htmlFor="staySigned">Stay Signed In</label>
                        </div>
                        <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/forget-password')}>Forget Password?</span>
                    </div>

                    <button className='bg-black w-full text-white p-4 font-semibold my-12' onClick={handleOnClick} >
                        Login
                    </button>
                </form>

                <div className="mx-6 md:mx-24 text-sm space-x-2">
                    <span>New to BookCave?</span>
                    <Link to='/register' className='text-blue-600'>Register</Link>
                </div>
            </div>
        </div>
    )
}
