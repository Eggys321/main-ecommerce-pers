import React from 'react'
import useFetch from '../../Fetcher/useFetch'
import '../../styles/Jewelry.css'
import BeatLoader from 'react-spinners/BeatLoader'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Jewelry = ({ cartItem, setCartItems, handleAddToCart }) => {
  const { data, error, isLoading } = useFetch(
    'https://fakestoreapi.com/products/category/jewelery'
  )
  const notify = () => {
    // toast('An item has been added')
    toast.success('An item has been added !', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return (
    <div className='container'>
      <h2 style={{ textAlign: 'center' }}> {isLoading && <BeatLoader />}</h2>

      <div className='component-title-jewelry '>
        <h2>JEWELRY CATEGORY</h2>
      </div>
      <div className='component-data-mapped-jewelry'>
        {data.map((datumJewelry) => {
          const { title, image, id, price } = datumJewelry
          return (
            <div key={id}>
              <div className='component-data-inner-jewelry'>
                <h4>{title.slice(0, 11)} </h4>
                <Link to={`/SingleProduct/${id}`}>
                  <img src={image} alt='' />
                </Link>
                <p>${price} </p>
              </div>
              <button
                onClick={() => {
                  handleAddToCart(datumJewelry)
                  notify()
                }}
              >
                add to cart
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jewelry
