import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/baseUrl'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlaceOrderLogin from '../components/PlaceOrderLogin';
import PlaceOrderDeliveryAddress from '../components/PlaceOrderDeliveryAddress';
import PlaceOrderPaymentOptions from '../components/PlaceOrderPaymentOptions';
import PlaceOrderOrderSummary from '../components/PlaceOrderOrderSummary';
import OrderPlacedPopup from '../components/OrderPlacedPopup';


export default function PlaceOrder() {
    const [display, setDisplay] = useState(0);
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [orderDetails, setOrderDetails] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${baseUrl}/users/`, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(response => {
                console.log(response.data.data);
                setLoggedInUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [display, id])


    useEffect(() => {
        setOrderDetails({
            orderBy: localStorage.getItem('userIdGlobal'),
            productId: id,
            status: "pending",
            quantity: quantity,
            // totalPrice: (bookInfo.price * quantity)
        })
    }, [quantity, id])



    const handleConfirmOrder = async (event) => {
        event.preventDefault();
        // console.log(localStorage.getItem('userIdGlobal'), id, quantity, bookInfo.price * quantity)

        try {
            await axios.post(`${baseUrl}/orders/create-order`, orderDetails)
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`${confirmOrder && " fixed top-0 left-0 right-0 h-screen bg-[#7f7f7f42]"}  space-y-8 `}>
            <Navbar />

            {
                confirmOrder && <OrderPlacedPopup setConfirmOrder={setConfirmOrder} />
            }


            <div className={`space-y-3 mx-4 md:mx-[20%]`}>
                <PlaceOrderLogin display={display} setDisplay={setDisplay} userData={loggedInUser} />

                <PlaceOrderDeliveryAddress display={display} setDisplay={setDisplay} userData={loggedInUser} />

                <PlaceOrderOrderSummary display={display} setDisplay={setDisplay} bookId={id} setQuantity={setQuantity} quantity={quantity} />

                <PlaceOrderPaymentOptions display={display} setDisplay={setDisplay} setConfirmOrder={setConfirmOrder} handleConfirmOrder={handleConfirmOrder} />
            </div>

            <Footer />
        </div>
    )
}
