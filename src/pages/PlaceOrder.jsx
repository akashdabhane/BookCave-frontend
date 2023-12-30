import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlaceOrderLogin from '../components/PlaceOrderLogin';
import PlaceOrderDeliveryAddress from '../components/PlaceOrderDeliveryAddress';
import PlaceOrderPaymentOptions from '../components/PlaceOrderPaymentOptions';
import PlaceOrderOrderSummary from '../components/PlaceOrderOrderSummary';
import axios from 'axios'
import { baseUrl } from '../utils/baseUrl'

export default function PlaceOrder() {
    const [display, setDisplay] = useState(0);
    const [userData, setUserData] = useState({})

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/api/user/${localStorage.getItem('userIdGlobal')}`)
                .then(data => {
                    console.log(data);
                    setUserData(data.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }, [display])


    return (
        <div className='md:mx-[20%] space-y-8 '>
            <Navbar />
            <div className="space-y-3">
                <PlaceOrderLogin display={display} setDisplay={setDisplay} userData={userData} />

                <PlaceOrderDeliveryAddress display={display} setDisplay={setDisplay} userData={userData} />

                <PlaceOrderOrderSummary display={display} setDisplay={setDisplay} />

                <PlaceOrderPaymentOptions display={display} setDisplay={setDisplay} />
            </div>
            <Footer />
        </div>
    )
}
