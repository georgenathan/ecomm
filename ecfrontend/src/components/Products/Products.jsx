import React from 'react'
import Headings from "../Shared/Headings"
import ItemCard from './ItemCard'

// product image import
import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"
import Img5 from "../../assets/product/p-5.jpg"
import Img9 from "../../assets/product/p-9.jpg"
import Img7 from "../../assets/product/p-7.jpg"

const ItemsData = [
  {
    id: 1,
    img: Img1,
    title: "Beats",
    price: "200",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Beats",
    price: "570",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Beats",
    price: "420",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Beats",
    price: "610",
    aosDelay: "600",
  },
]

const ItemsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Beats",
    price: "200",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img9,
    title: "Beats",
    price: "570",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Beats",
    price: "420",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Beats",
    price: "610",
    aosDelay: "600",
  },
]

const Products = () => {
  return (
    <div>
      <div className="container">
      {/* HEADING */}
        <Headings title="Trending Products" subtitle={"Checkout our Products"}/>
      {/* body */}
        <ItemCard data={ItemsData}/>
        <ItemCard data={ItemsData2}/>
      </div>
    </div>
  )
}

export default Products