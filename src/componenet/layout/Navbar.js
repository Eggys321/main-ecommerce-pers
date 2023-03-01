import React from 'react'
import { Link } from 'react-router-dom'
import Marque from '../pages/Marque'
import '../../styles/Navbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'

const Navbar = ({cartItem}) => {
  return (
    <div className='navbar'>
      <Marque />
      <header className='container navv'>
        <div>
          <Link to='/'>
            <h1>Eggys🏬</h1>
          </Link>
        </div>
        <div className='form-control'>
          <form action=''>
            <input
              type='search'
              placeholder='search products, brands and categories...'
            />
            <button>
              <AiOutlineSearch />
            </button>
            {/* <input type='button' value='' /> */}
          </form>
        </div>
        <nav>
          <div>
            <Link>Account</Link>
          </div>
          <div>
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
    </div>
  )
}

export default Navbar
