import React, { useContext, useEffect, useState } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { LoginContext } from '../contexts/LoginContext';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../utils/baseUrl';

export default function MyProfile() {
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({})

    const [editPersonalInfo, setEditPersonalInfo] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editMobile, setEditMobile] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [editAddress, setEditAddress] = useState(false);

    // const { userIdGlobal } = useContext(LoginContext);
    const userIdGlobal = localStorage.getItem('userIdGlobal');
    console.log(userIdGlobal);

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/api/user/${userIdGlobal}`)
                .then(data => {
                    console.log(data);
                    console.log(data.data.data);
                    setUserData(data.data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    // const userData = [
    //     {
    //         value: "akash@gmail.com",
    //         current: 'Edit',
    //         change: "save",
    //         type: "email"
    //     },
    //     {
    //         value: "kahs",
    //         current: <FaEye />,
    //         change: <FaEyeSlash />,
    //         type: "password"
    //     },
    //     {
    //         value: "name",
    //         current: 'Edit',
    //         change: "Save",
    //         type: "text"
    //     },
    //     {
    //         value: "Dabhene",
    //         current: 'Edit',
    //         change: "Save",
    //         type: "text"
    //     },
    //     {
    //         value: 8000000000,
    //         current: 'Edit',
    //         change: "Save",
    //         type: "number"
    //     },
    //     {
    //         value: "adderes dndmhgkj fkdj",
    //         current: 'Edit',
    //         change: 'Save',
    //         type: "textarea"
    //     }
    // ]

    return (
        <div className=' md:mx-[20%] h-full text-black  '>
            <Navbar />

            <div className="bg-white h-screen p-8 space-y-8 ">
                {/* personal Infomartion  */}
                <div className="space-y-4">
                    <div className="flex space-x-4 items-center ">
                        <h2 className='font-bold text-xl'>Personal Infomartion</h2>
                        <button className={`${editPersonalInfo ? "hidden" : "text-blue-700 font-semibold"} text-blue-700 font-semibold `} onClick={() => setEditPersonalInfo(true)}>Edit</button>
                        <button className={`${editPersonalInfo ? "text-blue-700 font-semibold" : "hidden"}`} onClick={() => setEditPersonalInfo(false)}>Cancel</button>
                    </div>
                    <div className="space-x-0 md:space-x-4 flex flex-col md:flex-row space-y-2">
                        <input type="text" name="firstname" id="firstname" className='rounded p-3 px-4 border border-blue-400' disabled={!editPersonalInfo} placeholder='enter your first name' />
                        <input type="text" name="lastname" id="lastname" className='rounded p-3 px-4 border border-blue-400' disabled={!editPersonalInfo} placeholder='enter your last name' />
                        <button className={`${editPersonalInfo ? "text-center px-6 p-3 rounded bg-blue-800 text-white" : "hidden"}`} onClick={() => setEditPersonalInfo(false)}>Save</button>
                    </div>
                </div>

                {/* email address  */}
                <div className="space-y-4">
                    <div className="flex space-x-4 items-center ">
                        <h2 className='font-bold text-xl'>Email Address</h2>
                        <button className={`${editEmail ? "hidden" : "text-blue-700 font-semibold"}`} onClick={() => setEditEmail(true)}>Edit</button>
                        <button className={`${editEmail ? "text-blue-700 font-semibold" : "hidden"}`} onClick={() => setEditEmail(false)}>Cancel</button>
                    </div>
                    <div className="space-x-4 ">
                        <input type="email" name="email" id="email" className='rounded p-3 px-4 border border-blue-400' disabled={!editEmail} placeholder='enter your email' />
                        <button className={`${editEmail ? "text-center px-6 p-3 rounded bg-blue-800 text-white" : "hidden"}`} onClick={() => setEditEmail(false)}>Save</button>
                    </div>
                </div>

                {/* phone and password  */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 ">
                    <div className="w-full md:w-auto">
                        <div className="flex space-x-4 items-center ">
                            <h2 className='font-bold text-xl'>Mobile number</h2>
                            <button className={`${editMobile ? "hidden" : "text-blue-700 font-semibold"}`} onClick={() => setEditMobile(true)}>Edit</button>
                            <button className={`${editMobile ? "text-blue-700 font-semibold" : "hidden"}`} onClick={() => setEditMobile(false)}>Cancel</button>
                        </div>
                        <div className="space-x-4">
                            <input type="number" name="phoneNumber" id="phoneNumber" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} className='rounded p-3 px-4 border border-blue-400' disabled={!editMobile} placeholder='phone number' />
                            <button className={`${editMobile ? "text-center px-6 p-3 rounded bg-blue-800 text-white" : "hidden"}`} onClick={() => setEditMobile(false)}>Save</button>
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <div className="flex space-x-4 items-center ">
                            <h2 className='font-bold text-xl'>Password</h2>
                            <button className={`${editPassword ? "hidden" : "text-blue-700 font-semibold"}`} onClick={() => setEditPassword(true)}>Edit</button>
                            <button className={`${editPassword ? "text-blue-700 font-semibold" : "hidden"}`} onClick={() => setEditPassword(false)}>Cancel</button>
                        </div>
                        <div className="space-x-4">
                            <input type="password" name="password" id="password" value={userData.password} className='rounded p-3 px-4 border border-blue-400' disabled={!editPassword} placeholder='password' />
                            <button className={`${editPassword ? "text-center px-6 p-3 rounded bg-blue-800 text-white" : "hidden"}`} onClick={() => setEditPassword(false)}>Save</button>
                        </div>
                    </div>
                </div>


                {/* address  */}
                <div className="space-y-4">
                    <div className="flex space-x-4 items-center ">
                        <h2 className='font-bold text-xl'>Address</h2>
                        <button className={`${editAddress ? "hidden" : "text-blue-700 font-semibold"}`} onClick={() => setEditAddress(true)}>Edit</button>
                        <button className={`${editAddress ? "text-blue-700 font-semibold" : "hidden"}`} onClick={() => setEditAddress(false)}>Cancel</button>
                    </div>
                    <div className="space-x-4 flex items-start">
                        <textarea name="address" id="address" cols="30" rows="8" className='rounded w-96 p-3 px-4 border border-blue-400' disabled={!editAddress} placeholder='enter your address'></textarea>
                        <button className={`${editAddress ? "text-center px-6 p-3 rounded bg-blue-800 text-white" : "hidden"}`} onClick={() => setEditAddress(false)}>Save</button>
                    </div>
                </div>

            </div>

            {/* <div className="space-y-4 p-24 px-40 bg-white h-full">
                {
                    userData.map((item, index) => (
                        <div className=" flex " key={index}>
                            <input className='w-[77%] rounded-md p-3 px-4 border border-blue-400' type={item.type} value={item.value} disabled={item.change === "Save" ? 'false' : 'true'} />
                            <span className='cursor-pointer mx-1' onClick={() => item.change = "Edit"}>Edit</span>
                            <button className={`${item.change === "Edit" ? "w-[13%] mx-5 text-center px-6 p-2 rounded bg-blue-800 text-white" : "hidden"}`} onClick={() => item.change = "Save"}>Save</button>
                        </div>
                    ))
                }
                <button className='bg-blue-800 w-full text-white px-4 p-3 rounded text-center'>Save</button>
            </div> */}

            <Footer />
        </div>
    )
}
