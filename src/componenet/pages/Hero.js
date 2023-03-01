import React, { useState, useEffect } from 'react'
import '../../styles/Hero.css'
import useFetch from '../../Fetcher/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Hero = ({ cartItem, setCartItems, handleAddToCart }) => {
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useFetch('https://fakestoreapi.com/products/14')
  const {
    data: data3,
    error: error3,
    isLoading: isLoading3,
  } = useFetch('https://fakestoreapi.com/products?limit=4')
  const notify = () => {
    // toast('An item has been added')
     toast.success('An item has been added !', {
       position: toast.POSITION.TOP_CENTER,
     })
  }
  

  return (
    <div className='container '>
      <h2 style={{ textAlign: 'center' }}> {isLoading2 && <BeatLoader />}</h2>
      {error2 && <h2> {error2.message} </h2>}
      <div className='hero'>
        <div className='inner-hero1'>
          {/* <h2>{data2.title} </h2> */}
          <img src={data2.image} className='inner-hero' alt={data2.title} />
        </div>
        {/* MAPPED -SECTION- */}
        <div className='inner-hero2'>
          {/* {isLoading3 && <BeatLoader />} */}

          {error3 && <h2> {error3.message} </h2>}
          {data3.map((datum3) => {
            const { image, title, id, price } = datum3
            return (
              <div key={id} className='inner-hero2-data'>
                <div className='inner-hero2-img'>
                  <h2> {title.slice(0, 11)}</h2>
                  <Link to={`/SingleProduct/${id}`}>
                    <img src={image} alt='' />
                  </Link>
                  <p> ${price} </p>
                  <button
                    onClick={() => {
                      handleAddToCart(datum3)
                      notify()
                    }}
                  >
                    add to cart
                  </button>
                </div>
                <ToastContainer />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero
