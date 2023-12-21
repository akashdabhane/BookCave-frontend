import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function BookInfo() {
    const [book, setBook] = useState({});
    const { id } = useParams(); // Access the id parameter from the URL 

    console.log(id); 

    useEffect(() => {
        try {
            axios.get(`http://localhost:8000/api/book-info/${id}`)
                .then(data => {
                    console.log(data);
                    setBook(data.data)
                    console.log(data.data.description)
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className='md:mx-[20%] h-[100vh] bg-white'>
            <Navbar />

            <div className=" text-black space-y-2 w-full py-2 ">
                <div className=" space-y-6  px-8 py-2 ">
                    <div className="flex space-x-4">
                        <img className='w-48 h-60' src={book.cover} alt="" />
                        <div className="">
                            <h4 className='text-xl'>{book.name}</h4>
                            <span className="athor text-gray-600">{book.author}</span>
                            <h3 className="price text-xl font-semibold">{book.price} </h3>
                        </div>
                    </div>
                    <div className=''>
                        <span className='text-xl font-semibold'>Description</span>
                        <p>{book.description}</p>
                    </div>
                </div>
            </div>

            <div className="buy sticky bottom-2 right-1/2  flex w-full  space-x-4">
                <button className='bg-blue-600 p-3 px-10 text-white '>Buy Book</button>
                <button className='bg-blue-600 p-3 px-10 text-white '>Renk Book</button>
            </div>
        </div>
    )
}
