import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardSkeleton({ cards }) {
    return (
        <div className='card-steleton w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:justify-evenly md:items-center space-y-2 pt-10'>
            {
                Array(cards).fill(0).map((item, index) => (
                    <div key={index} className={`flex md:flex-col space-x-4 md:space-x-0 border-b md:border-b-0 px-2 md:px-2 py-2`}>
                        <Skeleton width={200} height={250} />
                        <div className="">
                            <Skeleton style={{ lineClamp: 1 }} />
                            <Skeleton />

                            <div className=" ">
                                <Skeleton />
                                <Skeleton />

                            </div>

                            <span className="grid grid-cols-2 space-x-2">
                                <Skeleton count={0.5} />
                                <Skeleton count={0.5} />
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardSkeleton