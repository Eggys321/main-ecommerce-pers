import React from 'react'
import { Link } from 'react-router-dom'
import Marque from '../pages/Marque'
import '../../styles/Navbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { useState } from 'react'

const Navbar = ({cartItem}) => {
  const [searchItem,setSearchItem] = useState('')
  function searchProducts(e){
    e.preventDefault()
    setSearchItem((prev)=>{
      return {...prev}

    })


  }
  return (
    <div className='navbar'>
      <Marque />
      <header className='container'>
        <div>
          <Link to='/'>
            <h1>Eggys</h1>
          </Link>
        </div>
        <div className='form-control'>
          <form onSubmit={searchProducts}>
            <input
              type='search'
              placeholder='search products, brands and categories...'
              onChange={(e)=> setSearchItem(e.target.value)}
            />
            <button>
              <AiOutlineSearch />
            </button>
            {/* <input type='button' value='' /> */}
          </form>
        </div>
        <nav>
          <div className='acct'>
            <Link>Account</Link>
          </div>
          <div className='help'>
            <Link>Help</Link>
          </div>
          <div>
            <Link to='/Cart'>
              <BsCart4 />
               Cart ({cartItem.length})
            </Link>
          </div>
        </nav>
      </header>
        <p> {searchItem} </p>
    </div>
  )
}

export default Navbar
