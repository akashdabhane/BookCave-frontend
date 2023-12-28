import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { baseUrl } from '../utils/baseUrl'


export default function BookInfo() {
    const [book, setBook] = useState({});
    const { id } = useParams(); // Access the id parameter from the URL 

    console.log(id);

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/api/book-info/${id}`)
                .then(data => {
                    console.log(data);
                    console.log(data.data.image.url)
                    setBook(data.data)
                    console.log(data.data.description)
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }, [id])


    return (
        <div className='relative md:mx-[20%] h-[100vh] bg-white'>
            <Navbar />
            {
                Object.keys(book).length !== 0 && (
                    <div className=" text-black space-y-2 w-full py-2 ">
                        <div className=" space-y-6  px-8 py-2 ">
                            <div className="flex flex-col  md:flex-row space-x-0 md:space-x-4 space-y-3 md:space-y-0">
                                <div className="flex space-x-4">
                                    <img className='w-48 h-60' src={book.image.url} alt="book image" />
                                    <div className="space-y-2">
                                        <h4 className='text-xl'>{book.title}</h4>
                                        <span className="athor text-gray-600">{book.author}</span>

                                        <div className="flex space-x-4">
                                            <h3 className="price text-xl font-semibold">{book.price} </h3>
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

                                        <div className="space-x-2">
                                            <span>20 rating</span>
                                            <span>&</span>
                                            <span>4 Review</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="buy flex justify-center items-start space-x-4 sm:px-2 md:px-11">
                                    <Link to={'/place-order'}>
                                        <button className='bg-blue-600 p-3 px-10 text-white '>Buy Book</button>
                                    </Link>
                                    <button className='bg-blue-600 p-3 px-10 text-white '>Renk Book</button>
                                </div>
                            </div>
                            <div className=''>
                                <span className='text-xl font-semibold'>Description</span>
                                <p>{book.description}</p>
                            </div>
                        </div>
                    </div>
                )
            }

            <Footer />
        </div>
    )
}
