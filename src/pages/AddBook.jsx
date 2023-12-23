import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { baseUrl } from '../utils/baseUrl'
import axios from 'axios'

export default function AddBook() {
    const [bookData, setBookData] = useState({
        title: "",
        price: "",
        author: "",
        description: "",
        image: "",
        quantity: "",
        publisheredBy: localStorage.getItem('userIdGlobal')
    })

    const handleAddBook = (event) => {
        event.preventDefault();

        try {
            axios.post(`${baseUrl}/api/add-book`, bookData)
                .then(data => {
                    console.log(data);
                    alert("Successfully added the book!");

                    // setBookData({
                    //     ...bookData,
                    //     [name]: ''
                    // });
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnChange = (event) => {
        console.log('akash')
        console.log(event.target.value);
        const { name, value } = event.target;
        setBookData({
            ...bookData,
            [name]: value
        });
    }

    return (
        <div>
            <div className='md:mx-[20%] flex flex-col justify-between bg-white h-[100vh]'>
                <Navbar />
                <h2 className='m-auto my-8 text-2xl font-bold '>Add a book</h2>
                <form className='flex flex-col space-y-2 mx-auto'>
                    <input className='border p-2 outline-none w-96 ' type="text" name="title" id="title" placeholder='title of book' onChange={handleOnChange} />
                    <input className='border p-2 outline-none ' inputMode='numeric' type="text" name="price" id="price" placeholder='price of single book' onChange={handleOnChange} />
                    <input className='border p-2 outline-none ' type="text" name="author" id="author" placeholder='author' onChange={handleOnChange} />
                    <input className='border p-2 outline-none ' type="text" name="publisher" id="publisher" placeholder='publication name' onChange={handleOnChange} />
                    <textarea className='border p-2 outline-none ' name="description" id="description" cols="30" rows="8" placeholder='description of book...' onChange={handleOnChange}></textarea>
                    <input className='border p-2 outline-none ' inputMode='numeric' type="text" name="quantity" id="quantity" placeholder='number of available copies..' onChange={handleOnChange} />

                    <input className='border p-2 outline-none w-full hidden' type="file" id='image' name='image' alt="image" placeholder='book cover' />
                    <label className='w-full rounded border-2 border-gray-700 bg-gray-300 text-gray-500 text-center p-2 cursor-pointer' htmlFor="image">
                        add an image
                    </label>

                    <button onClick={handleAddBook} className='bg-blue-600 text-white text-lg font-semibold p-2 my-8 '>Add a book</button>
                </form>
                <Footer />
            </div>
        </div>
    )
}
