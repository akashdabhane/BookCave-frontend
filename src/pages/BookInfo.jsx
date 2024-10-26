import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { baseUrl } from '../utils/baseUrl'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function BookInfo() {
    const [book, setBook] = useState({});
    const { id } = useParams(); // Access the id parameter from the URL 
    const [isLoding, setIsLoging] = useState(true);

    console.log(id);

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/books/book-info/${id}`)
                .then(data => {
                    console.log(data);
                    console.log(data.data.image.url)
                    setBook(data.data)
                    setIsLoging(false);
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
        <div className='relative  h-[100vh] bg-white'>
            <Navbar />

            <div className="md:mx-[20%] ">
                {
                    // Object.keys(book).length !== 0 && (
                    <div className=" text-black space-y-2 w-full py-2 ">
                        <div className=" space-y-6  px-4 md:px-8 py-2 ">
                            <div className="flex flex-col  md:flex-row space-x-0 md:space-x-4 space-y-3 md:space-y-0">
                                <div className="flex space-x-4">
                                    {
                                        isLoding ?
                                            <Skeleton width={195} height={240} containerClassName="flex-1" />
                                            :
                                            <img className='w-48 h-60' src={book.image.url} alt="book image" />
                                    }
                                    <div className="space-y-2">
                                        <h4 className='text-xl'>{book.title || <Skeleton />}</h4>
                                        <span className="athor text-gray-600">{book.author || <Skeleton />}</span>

                                        <div className="flex space-x-4">
                                            <h3 className="price text-xl font-semibold">{book.price || <Skeleton containerClassName="flex-1" count={0.5} />} </h3>
                                            <div className="relative ">
                                                <span className="mrp text-xl font-semibold text-gray-600">{'20000' || <Skeleton />} </span>
                                                <div className="relative bottom-3 h-[0.1rem] bg-gray-500"></div>
                                            </div>
                                        </div>

                                        <span className="flex space-x-2">
                                            <div className='rating flex space-x-1 items-center bg-green-700 p-2 py-[1px] rounded text-white '>
                                                <FaRegStar className='' />
                                                <span>4.4</span>
                                            </div>
                                            <span className="sells">({"111" || <Skeleton />})</span>
                                        </span>

                                        <div className="space-x-2">
                                            <span>{"20 rating" || <Skeleton />}</span>
                                            <span>&</span>
                                            <span>{"4 Review" || <Skeleton />}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="buy flex justify-center items-start space-x-4 sm:px-2 md:px-11">
                                    <Link to={`/place-order/${book._id}`}>
                                        <button className='bg-blue-600 p-3 px-10 text-white '>Buy Book</button>
                                    </Link>
                                    <button className='bg-blue-600 p-3 px-10 text-white '>Renk Book</button>
                                </div>
                            </div>
                            <div className=''>
                                <span className='text-xl font-semibold'>Description</span>
                                <p className=''>{book.description || <Skeleton count={9.5} />}</p>
                            </div>
                        </div>
                    </div>
                    // )
                }

                {
                    // book?.review.length > 0 && (
                    <Review />
                    // )
                }

            </div>

            <Footer />
        </div>
    )
}


function Review() {
    const review = [
        {
            id: 1, 
            user: "userId",
            rating: 4.4,
            review: "this is a review"
        }
    ]



    return (
        <>
            {
                // use map to iterate all reviews 
                <div className="">
                    {/* Book reviews  */}
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <h2 className='mx-8 font-bold text-xl '>Ratings & Reviews</h2>
                        <p className='flex items-center space-x-2 text-white bg-green-700 text-xl rounded-md px-2 p-[0.01rem]'>
                            <span>{"4.2"}</span>
                            <FaRegStar className='' />
                        </p>
                        <p className='mx-2 text-gray-600 font-semibold'>{"2,609"} ratings and {"253"} reviews</p>
                    </div>


                    <div className="border-b border-gray-300 px-10 py-4 space-y-2 ">
                        <div className=" space-x-4 ">
                            <span className='flex items-center space-x-1 max-w-fit text-white bg-green-700 rounded-md px-2 p-[0.01rem]'>
                                <span>{"4.2"}</span>
                                <FaRegStar className='' />
                            </span>

                            <span className='review leading-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci soluta quos temporibus minima nihil quis id voluptate consequuntur sequi a!</span>
                        </div>

                        <div className="photos">
                            {/* photos  */}
                        </div>
                        <div className="space-x-5 text-sm text-gray-500 font-semibold">
                            <span>{"username"}</span>
                            <span>{"5 months ago"}</span>
                            <span>{"location "}</span>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

