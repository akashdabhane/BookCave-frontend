import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlaceOrderLogin from '../components/PlaceOrderLogin';
import PlaceOrderDeliveryAddress from '../components/PlaceOrderDeliveryAddress';
import PlaceOrderPaymentOptions from '../components/PlaceOrderPaymentOptions';
import PlaceOrderOrderSummary from '../components/PlaceOrderOrderSummary';


export default function PlaceOrder() {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        console.log(display); 
    }, [display])
    return (
        <div className='md:mx-[20%] space-y-8 '>
            <Navbar />
            <div className="space-y-3">
                <PlaceOrderLogin display={display} setDisplay={setDisplay} />

                <PlaceOrderDeliveryAddress display={display} setDisplay={setDisplay} />

                <PlaceOrderOrderSummary display={display} setDisplay={setDisplay} />

                <PlaceOrderPaymentOptions display={display} setDisplay={setDisplay} />
            </div>
            <Footer />
        </div>
    )
}
