import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import BooksList from '../components/BooksList';
import axios from 'axios';
import Footer from '../components/Footer';
import { baseUrl } from '../utils/baseUrl';

export default function SearchBook() {
    const [books, setBooks] = useState([]);
    const [isLoding, setIsLoding] = useState(true);
    // const books = [
    //     {
    //         id: 1,
    //         name: "computer programming",
    //         author: "Akash",
    //         price: 500,
    //         cover: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
    //         description: ""
    //     },
    //     {
    //         id: 2,
    //         name: "Python",
    //         author: "rajesh khanna",
    //         price: 30,
    //         cover: "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
    //         description: ""
    //     },
    //     {
    //         id: 3,
    //         name: "Java programming",
    //         author: "Sanket Vishe",
    //         price: 500,
    //         cover: "https://miblart.com/wp-content/uploads/2020/12/red-tea-683x1024.jpeg",
    //         description: ""
    //     },
    //     {
    //         id: 4,
    //         name: "Operting system",
    //         author: "known",
    //         price: 400,
    //         cover: "https://m.media-amazon.com/images/I/71SKgnTxoEL._SY466_.jpg",
    //         description: ""
    //     },
    // ]

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/books/all-books`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(data => {
                    console.log(data)
                    setBooks(data.data.data);
                    setIsLoding(false);
                })
                .catch(error => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className=' bg-white '>
            <Navbar />
            <div className="">
                    <h3 className='md:mx-28 p-2 bg-gray-400 text-center text-lg font-semibold border-b-2 border-gray-700'>Search for Available book</h3>
                {/* <main className='space-y-3 my-4 md:mx-28'>
                </main> */}

                <BooksList books={books} isLoding={isLoding} />
            </div>

            <Footer />
        </div>
    )
}

