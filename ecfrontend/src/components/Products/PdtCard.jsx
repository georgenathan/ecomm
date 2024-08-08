import React from 'react'
import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"
// import {Link} from "react-router-dom"
import { useCart } from "react-use-cart";


function PdtCart(props) {
    // const { img, title, price, slug} = props.data;
    const { addItem } = useCart();
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        {/* <Link to={slug}> </Link> */}
            <img src={props.img} className='w-full h-80 object-cover object-top drop-shadow-[0_50px_30px_#0007'/>
       
        <h3 className='text-2xl py-3 text-center font-medium'>{props.title}</h3>
        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-2xl font-medium'>{props.price}</span>
            </p>
            

            <button 
            className='bg-gray-200 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-4' 
            onClick={()=> addItem(props.addItem)}>
                Add to Cart
            </button>
            
        </div>
    </div>
  )
}

export default PdtCart