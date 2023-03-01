import React from 'react';
import '../../styles/Electronics.css';
import useFetch from '../../Fetcher/useFetch'
import BeatLoader from 'react-spinners/BeatLoader';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'


const Electronics = ({ cartItem, setCartItems, handleAddToCart }) => {
  const { data, error, isLoading } = useFetch(
    'https://fakestoreapi.com/products/category/electronics'
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

      <div className='component-title-electronics '>
        <h2>ELECTRONICS CATEGORY</h2>
      </div>
      <div className='component-data-mapped-electronics'>
        {data.map((datumElectronics) => {
          const { title, id, image, price } = datumElectronics
          return (
            <div>
              <div className='component-data-inner-electronics' key={id}>
                <h4>{title.slice(0, 11)} </h4>
                <Link to={`/SingleProduct/${id}`}>
                  <img src={image} alt='' />
                </Link>
                <p>${price} </p>
              </div>
              <button
                onClick={() => {
                  handleAddToCart(datumElectronics)
                  notify()
                }}
              >
                add to cart
              </button>
              <ToastContainer />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Electronics