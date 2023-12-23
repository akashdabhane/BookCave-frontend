import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import BooksList from '../components/BooksList';
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from '../components/Footer';
import { baseUrl } from '../utils/baseUrl'



export default function Home() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    const SlideBarImg = [
        "https://images.pexels.com/photos/159778/books-reading-series-narnia-159778.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://allauthor.com/images/mar/img/klshandwick.jpg?vv=1522934823",
        "https://blog.bookbaby.com/wp-content/uploads/2015/11/What-Makes-A-Book-Banner.jpg",
    ]


    useEffect(() => {
        try {
            axios.get(`${baseUrl}/api/all-books`)
                .then(data => {
                    console.log(data)
                    setBooks(data.data);
                })
                .catch(error => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error);
        }
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        // initialSlide: null
    };


    return (
        <div className='md:mx-[20%] text-white'>
            <Navbar />

            <Slider {...settings}>
                {
                    SlideBarImg.map((item, index) => (
                        <img className='w-full h-56' src={item} alt="banner" key={index} />
                    ))
                }
            </Slider>

            <BooksList books={books} />

            <Footer />
        </div>
    )
}
