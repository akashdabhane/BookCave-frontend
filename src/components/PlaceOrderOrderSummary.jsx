import React, { useState, useEffect } from 'react'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { baseUrl } from "../utils/baseUrl";

export default function PlaceOrderOrderSummary({ display, setDisplay, bookId, setQuantity, quantity }) {
    const [bookInfo, setBookInfo] = useState({})

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/books/book-info/${bookId}`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then((data) => {
                    console.log(data.data);
                    // if (!data.data.success) throw new Error("No such book exists!");

                    setBookInfo(data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div onClick={() => setDisplay(2)}>
            <div className={`flex p-4 text-lg space-x-4 cursor-pointer ${display === 2 ? "bg-blue-600 text-white" : "text-gray-400 shadow-md"} `}>
                <span className={`p-[0.08rem] px-[0.5rem] rounded text-blue-600  ${display === 2 ? "bg-white" : "bg-gray-200 "} `}>{3}</span>
                <h2 className='font-bold text-xl capitalize '>ORDER SUMMARY</h2>
            </div>

            <div className={`${display === 2 ? " " : "hidden"}`}>
                <div className="flex flex-col space-y-8 justify-between bg-gray-300">
                    <div className="flex shadow-md bg-white p-8 py-4">
                        <div className="space-y-4 ">
                            <img className='w-40 px-8' src={bookInfo?.image?.url || "https://res.cloudinary.com/domlldpib/image/upload/v1703696906/BookCave/xfmwrviiz0tkn43qsvep.jpg"} alt="" />
                            <div className="flex space-x-2 items-center text-lg ">
                                <CiCircleMinus className={` text-4xl cursor-pointer`} onClick={() => quantity > 1 && setQuantity(quantity - 1)} />
                                <div className="px-5 p-1 border-2 rounded border-gray-500">{quantity}</div>
                                <CiCirclePlus className='text-4xl cursor-pointer' onClick={() => setQuantity(quantity + 1)} />
                            </div>
                        </div>

                        <div className="flex">
                            <div className="space-y-4 relative h-full">
                                <h2>{bookInfo.title}</h2>
                                <span>{bookInfo.author}</span>

                                <div className="space-x-2 text-center">
                                    <span className="mrp text-gray-500">{bookInfo.mrp || '300'}</span>
                                    <span className="price font-semibold ">{bookInfo.price || '200'}</span>
                                    <span className="discount text-green-500 ">{bookInfo.price / bookInfo.mrp * 100 || "20"} <span>{"% Off"}</span> </span>
                                </div>

                                <h4 className='font-bold text-xl relative bottom-0 left-0'>REMOVE</h4>
                            </div>

                            <div className="">
                                Delivery By {"Dec 29 | ₹85"}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center shadow-md mt-5 p-4 bg-white">
                        <span>Order confirmation email will be sent to {"example@gmail.com"}</span>
                        <button className='capitalize text-white bg-orange-600 font-semibold text-lg p-4 w-60 '>Continue</button>
                    </div>
                </div>
            </div>

        </div >
    )
}
