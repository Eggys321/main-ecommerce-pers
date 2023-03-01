import React from 'react';
import '../styles/Cart.css'

const Cart = ({ cartItem, setCartItems, handleAddToCart }) => {
   const totalPrice = cartItem.reduce(
     (price, item) => price + item.quantity * item.price,
     0
   )
   function handleIncrease(product) {
     const productSelected = cartItem.find(
       (singleCart) => singleCart.id === product.id
     )
     if (productSelected) {
       setCartItems(
         cartItem.map((oneItem) =>
           oneItem.id === product.id
             ? { ...productSelected, quantity: productSelected.quantity + 1 }
             : oneItem
         )
       )
     } else {
       setCartItems([...cartItem, { ...product, quantity: 1 }])
     }
   }
   function handleDecrease(product) {
     const productSelected = cartItem.find(
       (singleCart) => singleCart.id === product.id
     )
     if (productSelected.quantity === 1) {
       setCartItems(cartItem.filter((oneItem) => oneItem.id !== product.id))
     } else {
       setCartItems(
         cartItem.map((sItem) =>
           sItem.id === product.id
             ? { ...productSelected, quantity: productSelected.quantity - 1 }
             : sItem
         )
       )
     }
   }
  return (
    <div className='container'>
      {/* <h2>cart</h2> */}
      <div>
        {cartItem.length === 0 && (
          <div>
            <h3>No items in the cart </h3>
          </div>
        )}
      </div>
      <div className='cart-mapped'>
        {cartItem.map((item) => {
          const { image, id, title, price, quantity,description } = item
          return (
            <div key={id} className='cart-items-list'>
              <div>
                <img className='cart-items-image' src={image} alt='' />
              </div>
              <div className='cart-inner-mapped'>
                <div className='cart-items-name'>
                  <h1 style={{ color: '#94004F' }}> {title} </h1>
                  <h4 style={{ color: '#ED017F' }}>{description} </h4>
                </div>
                <div className='cart-items-price'>
                  <h4>
                    {quantity} * {price}
                  </h4>
                </div>
                <div className='cart-items-function'>
                  <button
                    className='cart-items-add'
                    onClick={() => handleIncrease(item)}
                  >
                    Increase
                  </button>
                  <button
                    className='cart-items-remove'
                    onClick={() => handleDecrease(item)}
                  >
                    Decrease
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {cartItem.length >= 1 && (
        <div className='cart-clear-btn'>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              width: '10rem',
              fontSize: '30px',
              borderRadius: '10px',
            }}
            onClick={() => setCartItems([])}
          >
            {cartItem.length === 1 ? 'clear item' : 'clear all'}
          </button>
        </div>
      )}
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'>${totalPrice}</div>
      </div>
    </div>
  )
}

export default Cart