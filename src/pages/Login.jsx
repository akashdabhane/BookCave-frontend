import React, { useState, useContext } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import bgCover from '../images/bgCover.png'
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';
import { loginSchema } from '../validationSchema/loginSchema';
import { useFormik } from "formik";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { isLogin, setIsLogin, loggedInUserObject, setLoggedInUserObject } = useContext(LoginContext);

    // using formik for handling input fields
    const initialValues = {
        email: "",
        password: "",
    };

    // values, handleBlur, handleChange, handleSubmit, errors, touched
    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        validateOnChange: true,
        validateOnBlur: false,
        // By disabling validation onChange and onBlur formik will validate on submit.
        onSubmit: (values, action) => {
            handleLogin(values);

            action.resetForm();
        }
    })

    const handleLogin = async (formData) => {
        try {
            const data = await axios.post(`${baseUrl}/users/login`, formData);
            console.log(data.data.data);

            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('accessToken', data.data.data.accessToken);
            
            // navigate to the home page
            navigate('/')
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }


    return (
        <div className='w-full h-[100vh] py-24' style={{ backgroundImage: `url(${bgCover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='mx-4 md:m-auto text-black bg-white p-6 md:w-[36%] h-[33rem] rounded-md  align-middle py-20 space-y-6'>
                <h2 className="heading mx-4 md:mx-24 text-2xl font-bold">Login</h2>
                <span className='mx-4 md:mx-24 text-sm text-red-600'>{error}</span>
                <form className='text-start mx-4 md:mx-24 space-y-4' onSubmit={formik.handleSubmit}>
                    <div className="">
                        <input type="text" name='email' inputMode='numeric' placeholder='Enter email'
                            className='border-[1px] w-full p-4 outline-none'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            (formik.touched.email && formik.errors.email) && (
                                <p className="text-red-600 text-xs">{formik.errors.email}</p>
                            )
                        }
                    </div>

                    <div className="">
                        <div className="flex items-center align-middle border-[1px] w-full">
                            <input type={`${showPassword ? 'text' : 'password'}`} name='password' placeholder='Password' autoComplete='false'
                                className='outline-none p-4 w-full'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <div className="text-2xl px-2 cursor-pointer ">
                                {showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} /> : <FaEye onClick={() => setShowPassword(true)} />}
                            </div>
                        </div>
                        {
                            (formik.touched.password && formik.errors.password) && (
                                <p className="text-red-600 text-xs">{formik.errors.password}</p>
                            )
                        }
                    </div>

                    <div className="flex justify-between text-sm">
                        <div className="">
                            <input type="checkbox" name="staySign" id="staySigned" />
                            <label htmlFor="staySigned">Stay Signed In</label>
                        </div>
                        <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/forget-password')}>Forget Password?</span>
                    </div>

                    <button type='submit' className='bg-black w-full text-white p-4 font-semibold my-12' >
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
