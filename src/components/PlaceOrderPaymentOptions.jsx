import React, { useState } from 'react'



export default function PlaceOrderPaymentOptions({ display, setDisplay, setConfirmOrder, handleConfirmOrder }) {
    const [paymentOption, setPaymentOption] = useState(null);
    const [chooseUpi, setChooseUpi] = useState(null);


    const options = [
        {
            id: 0,
            name: "UPI",
            describe: ""
        },
        {

            id: 1,
            name: "Credit / Debit / ATM Card",
            describe: "Add and secure cards as per RBI guidelines"
        },
        {
            id: 2,
            name: "Net banking",
            describe: "",
        },
        {
            id: 3,
            name: "Cash on Delivery",
            describe: ""
        }
    ]


    return (
        <div onClick={() => setDisplay(3)}>
            <div className={`flex p-4 text-lg space-x-4 cursor-pointer ${display === 3 ? "bg-blue-600 text-white" : "text-gray-400 shadow-md "} `}>
                <span className={`p-[0.08rem] px-[0.5rem] rounded text-blue-600 ${display === 3 ? "bg-white" : "bg-gray-200 "} `}>{4}</span>
                <h2 className='font-bold text-xl capitalize '>PAYMENT OPTIONS</h2>
            </div>

            <div className={`${display === 3 ? "shadow-md pb-4 " : "hidden"}`}>
                {
                    options.map((item) => (
                        <div className={`${paymentOption === item.id && "bg-blue-100"} border-b px-6 py-4 space-x-4 text-lg`} key={item.id}>
                            <input type="radio" className='h-5 w-5' name="paymentOptions" id={item.name} onChange={(event) => event.target.checked && setPaymentOption(item.id)} />
                            <label htmlFor={item.name}>{item.name}</label>
                            {/* <p>{item.describe}</p> */}

                            {
                                item.id === 0 && paymentOption === 0 && (
                                    <div className="space-y-4 px-10">
                                        <h4 className='text-lg font-bold'>Choose an option</h4>
                                        <div className="space-y-2">
                                            <div className="space-y-2 ">
                                                <div className="space-x-6 flex items-center">
                                                    <input type="radio" className='w-5 h-5' name="UPIOption" id="phonePay" onClick={() => setChooseUpi(0)} />
                                                    <label htmlFor="phonePay">PhonePe</label>
                                                </div>

                                                <div className={`${chooseUpi !== 0 && 'hidden'} mx-10`}>
                                                    <button className='px-12 p-3 font-semibold text-white bg-orange-600 '>Continue</button>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="space-x-6 flex items-center">
                                                    <input type="radio" className='w-5 h-5' name="UPIOption" id="yourUPIId" onClick={() => setChooseUpi(1)} />
                                                    <label htmlFor="yourUPIId">Your UPI Id</label>
                                                </div>

                                                <div className={`${chooseUpi !== 1 && 'hidden'} flex space-x-8 mx-10 `} >
                                                    <div className="bg-white border outline-1 outline-blue-400 w-fit">
                                                        <input className='outline-none p-2 px-4 ' type="text" name="UPIId" id="UPIId" />
                                                        <button className='text-blue-500 px-4'>Verify</button>
                                                    </div>

                                                    <button className='capitalize px-4 p-2 text-white bg-gray-700 cursor-not-allowed w-52'>pay ${"300"}</button>
                                                </div>
                                            </div>
                                            <span className='block text-gray-500 font-semibold'>Pay by Any UPI app</span>
                                        </div>
                                    </div>
                                )}


                            {
                                item.id === 1 && paymentOption === 1 && (
                                    <div className="">
                                        <div className="space-y-3 ">
                                            <input className='px-5 p-3 border outline-1 w-96 outline-blue-600' type="text" name="cardNumber" id="cardNumber" placeholder='Enter Card Number' />
                                            <div className="space-x-2 ">
                                                <input
                                                    className='px-5 p-3 border outline-1 w-40 outline-blue-600'
                                                    type="month"
                                                    name="expiryDate"
                                                    id="expiryDate"
                                                    onChange={(event) => console.log(event.target.value)} // You can replace this with your logic
                                                />
                                                <input
                                                    className="px-5 p-3 border outline-1 w-40 outline-blue-600"
                                                    type="number"
                                                    name="Cvv"
                                                    id="Cvv"
                                                    placeholder="CVV"
                                                    style={{
                                                        MozAppearance: 'textfield', // For Firefox
                                                        WebkitAppearance: 'none', // For Chrome/Safari/Opera
                                                        appearance: 'none', // For others
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            {item.id === 1 && <p>{item.describe}</p>}


                            {
                                item.id === 3 && paymentOption === 3 && (
                                    <div className="space-x-4 px-5 my-4">
                                        <input type="text" className='px-4 p-3 outline-1 outline-blue-400 border text-lg ' placeholder='enter characters' />
                                        <button className='px-4 p-3 bg-orange-600 text-white text-lg capitalize' onClick={(event) => {
                                            handleConfirmOrder(event)
                                            setConfirmOrder(true)
                                        }}>confirm order</button>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
