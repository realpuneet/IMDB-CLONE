import React from 'react'
import Logo from '../imdblogo.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className=' flex border space-x-8 items-center pl-4 py-2'>
        
        <img className='w-[55px]' src={Logo} alt="" />
        <Link to="/" className='text-blue-600 font-bold text-xl'>Movies</Link>
        <Link to="/watchlist"  className='text-blue-600 font-bold text-xl'>Watchlist</Link>

    </div>
  )
}

export default Navbar
