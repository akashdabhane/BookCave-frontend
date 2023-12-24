import React from 'react'

export default function PlaceOrderPaymentOptions({ display, setDisplay }) {
    return (
        <div onClick={() => setDisplay(3)}>
            <div className={`flex p-4 text-lg space-x-4 cursor-pointer ${display === 3 ? "bg-blue-600 text-white" : "text-gray-400 shadow-md "} `}>
                <span className={`p-[0.08rem] px-[0.5rem] rounded text-blue-600 ${display === 3 ? "bg-white" : "bg-gray-200 "} `}>{4}</span>
                <h2 className='font-bold text-xl capitalize '>PAYMENT OPTIONS</h2>
            </div>

            <div className={`${display === 3 ? "shadow-md pb-4 " : "hidden"}`}>
                <div className="border-b px-6 py-4 space-x-4 text-lg bg-blue-100">
                    <input type="radio" name="paymentOptions" id="UPI" />
                    <label htmlFor="UPI">UPI</label>
                </div>
                <div className="border-b px-6 py-4 space-x-4 text-lg">
                    <input type="radio" name="paymentOptions" id="Credit-debit-atm" />
                    <label htmlFor="Credit-debit-atm">Credit / Debit / ATM Card</label>
                    <p>Add and secure cards as per RBI guidelines</p>
                </div>
                <div className="border-b px-6 py-4 space-x-4 text-lg">
                    <input type="radio" name="paymentOptions" id="netbanking" />
                    <label htmlFor="netbanking">Net banking</label>
                </div>
                <div className="border-b px-6 py-4 space-x-4 text-lg">
                    <input type="radio" name="paymentOptions" id="cashDelivery" />
                    <label htmlFor="cashDelivery">Cash on Delivery</label>
                </div>
            </div>
        </div>
    )
}
