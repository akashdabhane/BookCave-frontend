import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import bgCover from '../images/bgCover.png'
import { baseUrl } from '../utils/baseUrl';
import { registrationSchema } from '../validationSchema/registrationSchema';
import { useFormik } from "formik";


export default function Register() {
    const [isPublication, setIsPublication] = useState(false);
    const [publicationName, setPublicationName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // using formik for handling input fields
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    // values, handleBlur, handleChange, handleSubmit, errors, touched
    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        validateOnChange: true,
        validateOnBlur: false,
        // By disabling validation onChange and onBlur formik will validate on submit.
        onSubmit: (values, action) => {
            handleRegistration(values);

            action.resetForm();
        }
    })


    const handleRegistration = async (formData) => {
        try {
            const response = await axios.post(`${baseUrl}/users/register`, formData);

            navigate('/login');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }


    return (
        <div className='w-full h-[100vh] py-2' style={{ backgroundImage: `url(${bgCover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <main className='md:mx-auto text-black bg-white p-6 mx-4 md:w-[36%] h-[38rem] rounded-md my-[2rem] align-middle py-14 space-y-6'>
                <h2 className="heading mx-4 md:mx-24 text-2xl font-bold">Register</h2>
                <span className='mx-4 md:mx-24 text-sm text-red-600'>{error}</span>
                <form onSubmit={formik.handleSubmit} className='text-start mx-4 md:mx-24 space-y-4'>
                    <div className="">
                        <input type="email" name='email' placeholder='Enter email'
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
                        <input type='password' name='password' placeholder='Password' autoComplete='false'
                            className='outline-none p-4 w-full border-[1px] '
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            (formik.touched.password && formik.errors.password) && (
                                <p className="text-red-600 text-xs">{formik.errors.password}</p>
                            )
                        }
                    </div>

                    <div className="">
                        <input type='password' name='confirmPassword' placeholder='Repeat password' autoComplete='false'
                            className='outline-none p-4 w-full border-[1px]'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            (formik.touched.confirmPassword && formik.errors.confirmPassword) && (
                                <p className="text-red-600 text-xs">{formik.errors.confirmPassword}</p>
                            )
                        }
                    </div>

                    {/* <div className="flex justify-between text-sm">
                        <div className="">
                            <input type="checkbox" name="publication" id="publication" onChange={(event) => event.target.checked === true ? setIsPublication(true) : setIsPublication(false)} />
                            <label htmlFor="publication">Publication</label>
                        </div>
                    </div> */}

                    {/* <input type="text" autoComplete='false' value={publicationName} onChange={(event) => setPublicationName(event.target.value)} placeholder='enter publication name' className={`${isPublication ? " border-[1px] w-full p-4 outline-none" : "hidden"}`} /> */}

                    <button type='submit' className={'bg-black w-full cursor-pointer text-white p-4 font-semibold my-12'} >
                        Register
                    </button>
                </form>

                <div className="mx-6 md:mx-24 text-sm">
                    <span> Already have account?</span>
                    <Link to='/login' className='text-blue-600'> Login</Link>
                </div>
            </main>
        </div>
    )
}
