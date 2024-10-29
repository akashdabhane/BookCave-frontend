import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import BooksList from '../components/BooksList';
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from '../components/Footer';
import { baseUrl } from '../utils/baseUrl';
import CategoryWiseTopBooks from '../components/CategoryWiseTopBooks';


export default function Home() {
    // const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [isLoding, setIsLoding] = useState(true);

    const SlideBarImg = [
        // "https://images.pexels.com/photos/159778/books-reading-series-narnia-159778.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://allauthor.com/images/mar/img/klshandwick.jpg?vv=1522934823",
        "https://libro-terra.com/wp-content/uploads/2020/01/header_slider_1.png",
        "https://blog.bookbaby.com/wp-content/uploads/2015/11/What-Makes-A-Book-Banner.jpg",
        "https://booksservices.co.uk/wp-content/uploads/2022/06/The-Book-Club-Slider.jpeg",
    ]


    useEffect(() => {
        try {
            axios.get(`${baseUrl}/books/all-books`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(data => {
                    console.log(data.data.data)
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
        <div className=' text-white'>
            <Navbar />

            <div className="">
                <Slider {...settings}>
                    {
                        SlideBarImg.map((item, index) => (
                            <img className='w-full h-96' src={item} alt="banner" key={index} />
                        ))
                    }
                </Slider>

                <BooksList books={books} isLoding={isLoding} />

                <CategoryWiseTopBooks books={books.slice(0, 6)} category={"Fiction"} />
                <CategoryWiseTopBooks books={books.slice(2, 8)} category={"Self-growth"} />
            </div>

            <Footer />
        </div>
    )
}
