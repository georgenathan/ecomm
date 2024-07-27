import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Products from "../components/Products/Products"
import Items from "../components/Products/ItemCard"

const AllProducts = () => {
  return (
    <div>
      < Navbar/>
      <div>
      <Products />
      </div>
    </div>
  )
}

export default AllProducts