import React, {
	useState,
	useEffect,
} from "react";
import {IoMdSearch} from 'react-icons/io';

import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
//import DarkMode from './DarkMode';

const Menuslinks =[
  {
    id: 1,
    name: "Home",
    link: "/#home"
  },
  {
    id: 2,
    name: "Shop",
    link: "/products"
  },
  {
    id: 3,
    name: "About",
    link: "/#about"
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog"
  },
];

const DropdownLinks =[
  {
    id: 1,
    name: "New",
    link: "/cart"
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#toprated"
  },
  {
    id: 3,
    name: "Best Seller",
    link: "/#bestseller"
  },
]
const AccountDropdown =[
  {
    id: 1,
    name: "Profile",
    link: "/#profile"
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#toprated"
  },
  {
    id: 3,
    name: "SignOut",
    link: "/logout"
  },
]


const Navbar = () => {
  
  return (
    <div className='bg-white light:bg-gray-900 dark:text-white
    duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container flex justify-between item-center">
                {/*Logo and Links Sections */}
                <div className='flex items-center gap-4'>
                  <a href="#home"
                    className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                    >LIT-Smoke</a>
                  {/*Menu Items Sections */}
                  <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                      {
                       Menuslinks.map((data, index)=> (
                        <li key={index}>
                          <a href={data.link} 
                          className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-brandYellow duration-200'
                          >
                            {" "}
                            {data.name}</a>
                        </li>
                       ))}
                       {/*Drop-down */}
                      <li className='relative cursor-pointer group  text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                        <a href="#" className='flex items'>Quick Links
                          <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                          </span>
                        </a>
                        {/*Drop-down links */}
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-mg dark:bg-gray-900 p-2 dark:text-brandYellow'>
                          <ul className='space-y-2'>
                            {DropdownLinks.map((data,) =>(
                              <li>
                                <a href={data.link} className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semi-bold'>
                                  {data.name}
                                </a>
                              </li>
                            )) }
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Navbar Right Sections */}
                <div className='flex justify-between item-center gap-4'>
                  {/* Search Bar Section */}
                  <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Search' className='search-bar bg-white' />
                    <IoMdSearch
                    className='text-xl text-gray-600 group-hover:text-primary
                    dark:text-gray-400 absolute top-4 -translate-y-1/2 right-1 duration-200'
                    />
                  </div>
                  {/* Cart Section */}
                  
                    {/* visibilty={cartsVisibilty}
                    products={productsInCart}
                    onClose={() =>
                      setCartVisible(false)
                    }
                    onQuantityChange={
                      onQuantityChange
                    }
                    onProductRemove={onProductRemove} */}
                  {/* <a href="/shopcart">  */}
                  <button className='relative p-3' >
                    <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400'/>
                    <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                      {/* {productsInCart.length >
                        0 && (
                        <span className="product-count">
                        {
                          productsInCart.length
                        }
                        </span>
                        )} */}
                    </div>
                  </button>
                  {/* </a> */}


                  {/* Account Section */}

                  <li className='relative cursor-pointer group  text-gray-500 hover:text-black dark:hover:text-white duration-200 list-none'>
                        <a href="#" className='flex items'>
                          <span>
                            <FaUser className='group-hover:rotate-180 duration-300'/>
                          </span>
                        </a>
                        {/*Drop-down links */}
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-mg dark:bg-gray-900 p-2 dark:text-brandYellow'>
                          <ul className='space-y-2'>
                            {AccountDropdown.map((data,) =>(
                              <li>
                                <a href={data.link} className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semi-bold'>
                                  {data.name}
                                </a>
                              </li>
                            )) }
                          </ul>
                        </div>
                      </li>

                  {/* <button>
                    <FaUser className='text-xl text-gray-600 dark:text-gray-400' />
                  </button> */}

                      {/* invalid section */}
                  {/* Dark mod Section */}
                  {/* <div>
                    <DarkMode />
                  </div> */}
                      {/* invalid section */}


                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar