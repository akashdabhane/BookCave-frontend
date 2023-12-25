import React, { useEffect } from 'react'

export default function PlaceOrderDeliveryAddress({ display, setDisplay }) {

    return (
        <div onClick={() => setDisplay(1)}>
            <div className={`flex p-4 text-lg space-x-4 cursor-pointer ${display === 1 ? "bg-blue-600 text-white" : "text-gray-400 shadow-md"} `}>
                <span className={`p-[0.08rem] px-[0.5rem] rounded text-blue-600 ${display === 1 ? "bg-white" : "bg-gray-200 "} `}>{2}</span>
                <h2 className='font-bold text-xl capitalize '>DELIVERY ADDRESS</h2>
            </div>

            <div className={`${display === 1 ? "px-8 py-4 space-y-2 shadow-md " : "hidden"}`}>
                <div className=" space-x-4">
                    <span className='font-semibold text-lg '>{"Akash Dunda Dabhane"}</span>
                    <span className='font-semibold text-lg  '>{"801236548"}</span>
                    <button className='font-semibold text-lg text-blue-600 float-right'>Edit</button>
                </div>
                <div className="">
                    Intelius: Best Reverse Address Lookup Site Overall.
                    TruthFinder: Best Background Check Site for Detailed Reports.
                    Instant Checkmate: Great for Public Record Search.
                    PeopleFinders: Best for Ease of Use.
                    Spokeo: Cheapest People Finder Site.
                </div>

                <button className='text-white bg-orange-600 p-4 font-semibold w-60'>DELIVER HERE</button>
            </div>
        </div>
    )
}
