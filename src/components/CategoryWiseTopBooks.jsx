import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'
import { TfiArrowCircleRight } from "react-icons/tfi";


function CategoryWiseTopBooks({ books, category }) {
    const navigate = useNavigate();

    const handleBookClick = (item) => {
        navigate(`/book-info/${item._id}`)

        const isArrayExists = localStorage.getItem("recentlyViewedBooks");
        console.log(isArrayExists)
        if (!isArrayExists) {
            localStorage.setItem("recentlyViewedBooks", JSON.stringify([]));
        }

        let storedArr = JSON.parse(localStorage.getItem("recentlyViewedBooks"));
        if (storedArr.length > 10) {
            storedArr.shift();  // Remove first element  
        }

        if (!storedArr.includes(item._id)) {
            // Push new element
            storedArr.push(item._id);
        }

        // Update localStorage
        localStorage.setItem("recentlyViewedBooks", JSON.stringify(storedArr));
    }

    return (
        <div className='text-black bg-slate-200 mx-8 my-10 p-4 space-y-4 rounded-md'>
            <div className=" flex justify-between items-center text-2xl font-semibold bg-slate-100 rounded-full px-14">
                <h2 className=''>{category}</h2>
                <TfiArrowCircleRight className='text-2xl font-bold cursor-pointer text-blue-500'
                    onClick={() => navigate('/search')} />
            </div>
            <main className='justify-between space-x-2 overflow-x-hidden grid grid-cols-6 gap-6'>
                {
                    books.map((item, index) => (
                        <div className="space-y-2 cursor-pointer" key={index} onClick={() => handleBookClick(item)}>
                            <img className='w-48 md:w-full h-60' src={item.imageUrl || <Skeleton />} alt="" />
                            <span className='text-lg line-clamp-1 w-full'>{item.title || <Skeleton />}</span>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}

export default CategoryWiseTopBooks