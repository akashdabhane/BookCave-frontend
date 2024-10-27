import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'


function CategoryWiseTopBooks({ books, category }) {
    const navigate = useNavigate();

    return (
        <div className='text-black bg-slate-200 mx-8 my-10 p-4 space-y-4 rounded-md'>
            <h2 className='text-2xl font-semibold bg-slate-100 rounded-full px-14'>{category}</h2>
            <main className='flex justify-between space-x-2 overflow-x-hidden'>
                {
                    books.map((item, index) => (
                        <div className="space-y-2 cursor-pointer" key={index} onClick={() => navigate(`/book-info/${item._id}`)}>
                            <img className='w-48 md:w-full h-60' src={item.imageUrl || <Skeleton />} alt="" />
                            <span className='text-xl line-clamp-1 w-full'>{item.title || <Skeleton />}</span>
                        </div>
                    ))
                }
                <div className="">

                </div>
            </main>
        </div>
    )
}

export default CategoryWiseTopBooks