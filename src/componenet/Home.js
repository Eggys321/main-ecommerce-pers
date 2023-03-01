import React,{useEffect} from 'react'
import Electronics from './pages/Electronics'
// import Electronics from './pages/Electronics'
import Hero from './pages/Hero'
import Jewelry from './pages/Jewelry'
import LastPage from './pages/LastPage'
import Women from './pages/Women'

const Home = ({cartItem, setCartItems,handleAddToCart }) => {
   useEffect(() => {
     window.scroll({
       top: 0,
       left: 0,
       behavior: 'smooth',
     })
   }, [])
  return (
    <div>
      <Hero
        handleAddToCart={handleAddToCart}
        cartItem={cartItem}
        setCartItem={setCartItems}
      />
      <Jewelry
        handleAddToCart={handleAddToCart}
        cartItem={cartItem}
        setCartItem={setCartItems}
      />
      <Women
        handleAddToCart={handleAddToCart}
        cartItem={cartItem}
        setCartItem={setCartItems}
      />
      <Electronics
        handleAddToCart={handleAddToCart}
        cartItem={cartItem}
        setCartItem={setCartItems}
      />
      <LastPage
        handleAddToCart={handleAddToCart}
        cartItem={cartItem}
        setCartItem={setCartItems}
      />
    </div>
  )
}

export default Home