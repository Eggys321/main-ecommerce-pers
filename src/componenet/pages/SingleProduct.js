import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../Fetcher/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import '../../styles/SingleProduct.css'
import { ToastContainer, toast } from 'react-toastify'

const SingleProduct = ({ handleAddToCart }) => {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
    )
    const { title, image, description, price, rating,idx } = data
    const notify = () => {
      // toast('An item has been added')
      toast.success('An item has been added !', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
    useEffect(()=>{
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
  
    },[data])
    return (
      <>
      {isLoading && <BeatLoader />}
      <div className='inner-single-product'>
        <div className='inner-single-product-image'>
          <img src={image} alt={title} />
        </div>
        <div className='inner-single-product-data'>
          <h1 style={{ color: '#94004F' }}> {title} </h1>
          <h4 style={{ color: '#ED017F' }}>{description} </h4>
          <h3>${price} </h3>
          <button
            onClick={() => {
              handleAddToCart(data)
              notify()
            }}
          >
            add to cart
          </button>
          <Link to='/'>bak 2 home</Link>
        </div>
        <ToastContainer />

        {/* <p> rate {rating.rate} </p> */}
      </div>
    </>
  )
}

export default SingleProduct
