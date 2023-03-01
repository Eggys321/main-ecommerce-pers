import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import Home from './componenet/Home';
import Navbar from './componenet/layout/Navbar';
import Cart from './componenet/Cart';
import Footer from './componenet/layout/Footer';
import 'animate.css'
import SingleProduct from './componenet/pages/SingleProduct'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'


const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem('cartItem')) || []

function App() {
   const [cartItem, setCartItems] = useState(cartItemsFromLocalStorage)
   useEffect(() => {
     localStorage.setItem('cartItem', JSON.stringify(cartItem))
   }, [cartItem])
  // handleAddToCart
  function handleAddToCart(product) {
    console.log(cartItem)
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
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar cartItem={cartItem} />
        <Routes>
          <Route
            index
            element={
              <Home
                handleAddToCart={handleAddToCart}
                cartItem={cartItem}
                setCartItem={setCartItems}
              />
            }
          />
          <Route
            path='/Cart'
            element={<Cart cartItem={cartItem} setCartItems={setCartItems} />}
          />
          <Route
            path='/SingleProduct/:id'
            element={<SingleProduct handleAddToCart={handleAddToCart} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
