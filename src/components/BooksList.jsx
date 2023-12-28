import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";


export default function BooksList({ books }) {
    const navigate = useNavigate();
    const [bookHover, setBookHover] = useState(null);


    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-4 gap-4 md:justify-evenly md:items-center text-black space-y-2 w-full pt-10 ">
            {
                books.map((item, index) => (
                    <div className={`${bookHover === index && "transform scale-110 border bg-gray-400 rounded "}  flex md:flex-col space-x-4 md:space-x-0 border-b md:border-b-0 px-2 md:px-2 py-2 cursor-pointer`} key={index} onMouseEnter={() => setBookHover(index)} onMouseLeave={() => setBookHover(null)} onClick={() => navigate(`/book-info/${item._id}`)}>   {/* navigate({`/book-info/${item._id}`}) */}
                        <img className='w-48 md:w-full h-60' src={item.image.url} alt="" />
                        <div className="w-48">
                            <h4 className='text-xl line-clamp-1'>{item.title}</h4>
                            <span className="athor text-gray-600">{item.author}</span>

                            <div className="flex space-x-4 ">
                                <h3 className="price text-xl font-semibold">{item.price} </h3>
                                <div className="relative ">
                                    <span className="mrp text-xl font-semibold text-gray-600">{'20000'} </span>
                                    <div className="relative bottom-3 h-[0.1rem] bg-gray-500"></div>
                                </div>
                            </div>

                            <span className="flex space-x-2">
                                <div className='rating flex space-x-1 items-center bg-green-700 p-2 py-[1px] rounded text-white '>
                                    <FaRegStar className='' />
                                    <span>4.4</span>
                                </div>
                                <span className="sells">({"111"})</span>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
