import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { baseUrl } from '../utils/baseUrl'


export default function OrderHistory() {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        try {
            axios.get(`${baseUrl}/api/orders/${localStorage.getItem('userIdGlobal')}`)
                .then(data => {
                    console.log(data.data);

                    data.data.map((item) => {
                        console.log(item.productId);

                        try {
                            axios.get(`${baseUrl}/api/book-info/${item.productId}`)
                            .then(data => {
                                setOrders({
                                    ...orders,
                                    data
                                })
                            })
                            .catch(error => {
                                console.log("error occured while retriving data"); 
                            })
                        } catch (error) {
                            console.log(error);
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    console.log(orders); 

    // const orders = [
    //     {
    //         id: 1,
    //         date: "2021-09-30",
    //         total: "$56.47",
    //         name: "computer programming",
    //         author: "Akash",
    //         status: "delivered",
    //         address: "jdkjadkjdkjflkdajflkjaldjfljdalkj",
    //         phone: [8876697867, 1565325634],
    //         price: 500,
    //         cover: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
    //         description: ""
    //     },
    //     {
    //         id: 1,
    //         date: "2021-09-30",
    //         total: "$56.47",
    //         name: "computer programming",
    //         author: "Akash",
    //         status: "delivered",
    //         address: "jdkjadkjdkjflkdajflkjaldjfljdalkj",
    //         phone: [8876697867, 1565325634],
    //         price: 500,
    //         cover: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
    //         description: ""
    //     }
    // ]

    return (
        <div className="md:mx-[20%] bg-white text-black ">
            <Navbar />

            {
                orders.length === 0 ?
                    <div className="h-screen">
                        <h1 className='text-center text-xl mt-20'>No Orders Yet</h1>
                    </div>
                    :
                    <div className="space-y-4 text-left mt-10">
                        {
                            orders.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row justify-between space-x-4 border-b-4 px-3 md:px-8 py-2 cursor-pointer">
                                    <div className="flex space-x-3">
                                        <img className='w-48 h-60' src={item.cover} alt="" />
                                        <div className="">
                                            <h4 className='text-xl'>{item.name}</h4>
                                            <span className="athor text-gray-600">{item.author}</span>
                                            <h3 className="price text-xl font-semibold">{item.price} </h3>
                                        </div>
                                    </div>
                                    <div className="address w-72 space-y-2 m-0 ">
                                        <h2 className='text-xl font-semibold my-3 '>Delivery Address</h2>
                                        <span className='text-lg font-semibold'>Akash Dabhane</span>
                                        <p>flat no A44/304 . 3rd floor, Arihant Arshiya , akokajd karjat-kalyan road , tal - thane , khalapur/ paliphata Khopoli - 410243, Maharashtra</p>
                                        <div className="phone">
                                            <b>phone number</b>
                                            <ul className='flex space-x-4'>
                                                {
                                                    item.phone.map(item => (
                                                        <li key={item}>{item} </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }

            <Footer />
        </div>
    )
}

