import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import bgCover from '../images/bgCover.png'
import { baseUrl } from '../utils/baseUrl';



export default function Register() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [isPublication, setIsPublication] = useState(false);
    const [publicationName, setPublicationName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleOnClick = (event) => {
        event.preventDefault();

        console.log(phone)
        if (phone.length === 10 && password.length >= 6 && password.length <= 16 && password === repeatPassword) {
            try {
                axios.post(`${baseUrl}/api/register`, {
                    phone: phone,
                    password: password,
                    publisher: isPublication,
                    publicationName: publicationName,
                })
                    .then(data => {
                        console.log(data);
                        setPhone('');
                        setPassword('');
                        setRepeatPassword("");

                        navigate('/login');

                    })
                    .catch(error => {
                        setError(error.response.data.message);
                    })
            } catch (error) {
                console.log(error);
            }
        } else if (phone.length !== 10) {
            setError("enter valid phone number")
        } else if (password.length <= 6 || password.length >= 16) {
            setError("password length must be between 6 to 16 characters")
        } else if (password !== repeatPassword) {
            setError("Password must matched!")
        }

    }

    return (
        <div className=' py-4' style={{ backgroundImage: `url(${bgCover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <main className='m-auto text-black bg-white p-6 w-[36%] h-[37rem] rounded-md my-[4rem] align-middle py-16 space-y-8'>
                <h2 className="heading mx-24 text-2xl font-bold">Register</h2>
                <span className='mx-24 text-sm text-red-600'>{error}</span>
                <form className='text-center mx-24 space-y-4' >
                    <input type="text" inputMode='numeric' value={phone} onChange={(event) => setPhone(event.target.value)} placeholder='enter phone number' className='border-[1px] w-full p-4 outline-none' />
                    <input type={'password'} autoComplete='false' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='password' className='outline-none p-4 w-full border-[1px] ' />

                    <input type={'password'} autoComplete='false' value={repeatPassword} onChange={(event) => setRepeatPassword(event.target.value)} placeholder='repeat password' className='outline-none p-4 w-full border-[1px]' />

                    <div className="flex justify-between text-sm">
                        <div className="">
                            <input type="checkbox" name="publication" id="publication" value={isPublication} onChange={(event) => event.target.checked === true ? setIsPublication(true) : setIsPublication(false)} />
                            <label htmlFor="publication">Publication</label>
                        </div>
                    </div>

                    <input type="text" autoComplete='false' value={publicationName} onChange={(event) => setPublicationName(event.target.value)} placeholder='enter publication name' className={`${isPublication ? " border-[1px] w-full p-4 outline-none" : "hidden"}`} />

                    <button onClick={handleOnClick} className={'bg-black w-full cursor-pointer text-white p-4 font-semibold my-12'} >
                        Register
                    </button>
                </form>

                <div className="mx-24 text-sm">
                    <span> Already have account </span>
                    <Link to='/login' className='text-blue-400'>Login</Link>
                </div>
            </main>
        </div>
    )
}
