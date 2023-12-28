import React from 'react'

export default function PlaceOrderOrderSummary({ display, setDisplay }) {
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
                            <img className='w-40 px-8' src="https://rukminim2.flixcart.com/image/100/100/xif0q/regionalbooks/k/a/t/electrician-trade-ramban-3-0-11500-objective-questions-summary-original-imagshqzs8ahtunk.jpeg?q=90" alt="" />
                            <div className="flex space-x-2 items-center text-lg ">
                                <button className='border-2 p-1 px-3 text-2xl' >-</button>
                                <div className="px-4 p-2 border-2 rounded border-gray-500">1</div>
                                <button className='border-2 p-1 px-3 text-2xl'>+</button>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="space-y-4 ">
                                <h2>Nmae of he product</h2>
                                <span>secondary information of book</span>

                                <div className="space-x-2 ">
                                    <span className="mrp text-gray-500">400</span>
                                    <span className="price font-semibold ">300</span>
                                    <span className="discount text-green-500 ">20% Off</span>
                                </div>

                                <h4 className='font-bold text-xl'>REMOVE</h4>
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
