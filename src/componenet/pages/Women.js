import React from 'react'
import '../../styles/Women.css'
import useFetch from '../../Fetcher/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Women = ({ cartItem, setCartItems, handleAddToCart }) => {
  const { data, error, isLoading } = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
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

      <div className='component-title-women '>
        <h2>WOMEN CATEGORY</h2>
      </div>
      <div className='component-data-mapped-women'>
        {data.map((datumWomen) => {
          const { image, price, title, id } = datumWomen
          return (
            <div key={id}>
              <div className='component-data-inner-women' >
                <h4>{title.slice(0, 18)} </h4>
                <Link to={`/SingleProduct/${id}`}>
                  <img src={image} alt='' />
                </Link>
                <p>${price} </p>
              </div>
              <button
                onClick={() => {
                  handleAddToCart(datumWomen)
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

export default Women
