import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { baseUrl } from '../utils/baseUrl'


export default function OrderHistory() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/orders/${localStorage.getItem('userIdGlobal')}`)
                .then((orderData) => {
                    console.log("Order History Data: ", orderData.data);
                    const orderPromises = orderData.data.map((item) => {
                        return axios.get(`${baseUrl}/books/book-info/${item.productId}`, {
                            withCredentials: true,
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                            }
                        });
                    });

                    console.log(orderPromises);

                    Promise.all(orderPromises)
                        .then(productDataArray => {
                            const updatedOrders = orderData.data.map((item, index) => {
                                return {
                                    ...item,
                                    productInfo: productDataArray[index].data
                                };
                            });
                            console.log(updatedOrders);
                            setOrders(updatedOrders);
                        })
                        .catch(error => {
                            console.log("Error occurred while retrieving product data:", error);
                        });
                })
                .catch(error => {
                    console.log("Error occurred while retrieving order data:", error);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log(orders);


    return (
        <div className=" bg-white text-black ">
            <Navbar />

            <div className="md:mx-[20%] ">
                {
                    orders.length === 0 ?
                        <div className="h-screen">
                            <h1 className='text-center text-xl mt-20'>No Orders Yet</h1>
                        </div>
                        :
                        <div className="space-y-4 text-left mt-10">
                            {
                                orders.map((order, index) => (
                                    <div key={index} className="flex flex-col md:flex-row justify-between space-x-4 border-b-4 px-3 md:px-8 py-2 cursor-pointer">
                                        <div className="flex space-x-3">
                                            <img className='w-48 h-60' src={order.productInfo.image.url} alt="" />
                                            <div className="">
                                                <h4 className='text-xl'>{order.productInfo.name}</h4>
                                                <span className="athor text-gray-600">{order.productInfo.author}</span>
                                                <h3 className="price text-xl font-semibold">{order.productInfo.price} </h3>
                                            </div>
                                        </div>
                                        <div className="address w-72 space-y-2 m-0 ">
                                            <h2 className='text-xl font-semibold my-3 '>Delivery Address</h2>
                                            <span className='text-lg font-semibold'>{"user name"}</span>
                                            <p>{order.address}</p>
                                            <div className="phone">
                                                <b>phone number</b>
                                                {/* <ul className='flex space-x-4'>
                                                {
                                                    order.phone.map(item => (
                                                        <li key={item}>{item} </li>
                                                    ))
                                                }
                                            </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>

            <Footer />
        </div>
    )
}

