import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import BooksList from '../components/BooksList';
import axios from 'axios';
import Footer from '../components/Footer';
import { baseUrl } from '../utils/baseUrl';
import { useSearchParams } from "react-router-dom";

export default function SearchBook() {
    const [books, setBooks] = useState([]);
    const [isLoding, setIsLoding] = useState(true);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    console.log(query)


    const handleSearchBooks = () => {
        try {
            axios.get(`${baseUrl}/books/search?query=${query}`, {
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
    }

    useEffect(() => {
        handleSearchBooks();
    }, [])


    return (
        <div className=' bg-white '>
            <Navbar />
            <div className="">
                <h3 className='md:mx-28 p-2 bg-gray-400 text-center text-lg font-semibold border-b-2 border-gray-700'>Search for Available book</h3>

                {
                    books.length === 0 ?
                        (
                            <h2 className="text-center text-xl text-gray-500 font-semibold mt-32 mb-44">
                                No books found for given search
                            </h2>
                        )
                        :
                        <BooksList books={books} isLoding={isLoding} />

                }
            </div>

            <Footer />
        </div>
    )
}

