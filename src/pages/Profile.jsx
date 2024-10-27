import React, { useContext, useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosInformationCircleOutline, IoMdLogOut } from "react-icons/io";
import { SiGamedeveloper } from "react-icons/si";
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import { CiSquarePlus } from "react-icons/ci";
import Footer from '../components/Footer';
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';


export default function Profile() {
    const [loggedInUser, setLoggedInUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseUrl}/users/`, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(response => {
                console.log(response.data.data);
                setLoggedInUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleLogoutClick = () => {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('loggedInUser');

        navigate('/login')
    }

    const profileList = [
        {
            displayName: "My Profile",
            icon: <CgProfile />,
            link: '/my-profile',
        },
        {
            displayName: "Order History",
            icon: <TiShoppingCart />,
            link: '/order-history'
        },
        {
            displayName: "Add Books",
            icon: <CiSquarePlus />,
            link: '/add-book'
        },

        {
            displayName: "Contact us",
            icon: <SiGamedeveloper />,
            link: '/contact-us'
        },
        {
            displayName: "About our app",
            icon: <IoIosInformationCircleOutline />,
            link: '/about-app'
        },
        {
            displayName: "Logout",
            icon: <IoMdLogOut />,
            link: '/login'
        }
    ]

    return (
        <div className=' text-black bg-white'>
            <Navbar />

            <div className="md:mx-[20%]">
                <div className="user text-center my-8 space-y-4">
                    <img className='rounded-full w-36 h-36 mx-auto' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1702748520~exp=1702749120~hmac=6c599e5dd02ecb88bc1567b729a608d4b031bacb5f23a7442cd62d83c5cb513e" alt="user photo" />
                    <h2 className='font-semibold text-lg'>{loggedInUser.email}</h2>
                </div>

                <div className="mx-4 ">
                    {
                        profileList.map((item, index) => (
                            <div className="" key={index}>
                                {
                                    (item.link === '/add-book' && localStorage.getItem('publisher') === 'true')
                                        ?
                                        <div className={`flex space-x-5 border-b-2 p-4 px-8 align-middle cursor-pointer "}`} onClick={() => {
                                            navigate(item.link);
                                            item.displayName === "Logout" && handleLogoutClick();
                                        }}>
                                            <span className='text-4xl'>{item.icon}</span>
                                            <span className='text-lg'>{item.displayName}</span>
                                        </div>
                                        :
                                        <div className={`${item.link === '/add-book' ? "hidden" : "flex space-x-5 border-b-2 p-4 px-8 align-middle cursor-pointer "}`} onClick={() => {
                                            if (item.displayName === "Logout" && item.link === "/login") {
                                                localStorage.removeItem('isLogin');
                                                localStorage.removeItem('userIdGlobal');
                                                localStorage.removeItem('publisher');
                                            }
                                            navigate(item.link)
                                        }}>

                                            <span className='text-4xl'>{item.icon}</span>
                                            <span className='text-lg'>{item.displayName}</span>
                                        </div>
                                }

                            </div>
                        ))
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}
