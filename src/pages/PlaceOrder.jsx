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
    const [userData, setUserData] = useState({})
    const [bookInfo, setBookInfo] = useState({})
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [orderDetails, setOrderDetails] = useState({})
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/users/user/${localStorage.getItem('userIdGlobal')}`)
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


        try {
            axios.get(`${baseUrl}/books/book-info/${id}`)
                .then((data) => {
                    console.log(data.data);
                    // if (!data.data.success) throw new Error("No such book exists!");

                    setBookInfo(data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }

    }, [display, id])


    useEffect(() => {
        setOrderDetails({
            orderBy: localStorage.getItem('userIdGlobal'),
            productId: id,
            status: "pending",
            quantity: quantity,
            totalPrice: (bookInfo.price * quantity)
        })
    }, [quantity, id, bookInfo.price])



    const handleConfirmOrder = async (event) => {
        event.preventDefault();
        // console.log(localStorage.getItem('userIdGlobal'), id, quantity, bookInfo.price * quantity)

        try {
            await axios.post(`${baseUrl}/api/orders/create-order`, orderDetails)
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
                <PlaceOrderLogin display={display} setDisplay={setDisplay} userData={userData} />

                <PlaceOrderDeliveryAddress display={display} setDisplay={setDisplay} userData={userData} />

                <PlaceOrderOrderSummary display={display} setDisplay={setDisplay} bookInfo={bookInfo} setQuantity={setQuantity} quantity={quantity} />

                <PlaceOrderPaymentOptions display={display} setDisplay={setDisplay} setConfirmOrder={setConfirmOrder} handleConfirmOrder={handleConfirmOrder} />
            </div>

            <Footer />
        </div>
    )
}
