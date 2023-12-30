import React from 'react'
import ConfirmOrder from '../images/confirmOrder.png'
import { useNavigate } from 'react-router-dom';

function OrderPlacedPopup({ setConfirmOrder }) {
  const navigate = useNavigate()

  return (
    <div>
      <div className="w-[40%] fixed left-[30rem] top-[10rem] font-bold text-xl flex flex-col justify-center items-center  bg-white shadow-lg rounded h-[50vh]">
        <img className='w-32 h-32 my-4' src={ConfirmOrder} alt="confirm order" />
        <h3>Order successful</h3>
        <span className='text-base text-gray-600'>Thank you so much for your order</span>

        <button className='text-white bg-green-600 p-2 px-4 font-semibold rounded my-8' onClick={() => {
          setConfirmOrder(false);
          navigate('/order-history')
        }}>Check status</button>
      </div>
    </div>
  )
}

export default OrderPlacedPopup

