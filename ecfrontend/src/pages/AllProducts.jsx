import React, {
	useState,
	useEffect,
} from "react";
import "../assets/style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "../components/Test/RatingStar";
import ShoppingCart from "../components/Test/ShoppingCart";
import img1 from "../assets/images/product-1.png"
import img2 from "../assets/images/product-2.png"
import img3 from "../assets/images/product-3.png"
import img4 from "../assets/images/product-4.png"
//import img5 from "../assets/images/product-5.png"
import img6 from "../assets/images/product-6.png"
import Navbar from "../components/Navbar/Navbar"

// Hidden Import statements{
// //import Navbar from '../components/Navbar/Navbar'
// //import Product from "../components/Products/Products"
// // import Pdts from "../components/Products/Pdts"
// // import PdtCard from "../components/Products/PdtCard"
// // import Items from "../components/Products/ItemCard"
// // import { Home } from "../components/Test/Home"
// // import Cart from "../components/Test/Cart"
// // import { CartProvider } from 'react-use-cart';
// }
const products = [
	{
		id: 1,
		name: "Vivamus vitae",
		rating: 4.3,
		description:
			"Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
		price: 199,
		// image: require("../assets/images/product-1.png"),
    	image: img1,
	},
	{
		id: 2,
		name: "Fusce sit amet ipsum",
		rating: 4.2,
		description:
			"Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
		price: 229,
		image: img2,
	},
	{
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
	{
		id: 5,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		image: img2,
	},
	{
		id: 6,
		name: "Curabitur in elementum tortor",
		rating: 3.8,
		description:
			" Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
		price: 149,
		image: img6,
	},
  {
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
  {
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
  {
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
  {
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
  {
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
  {
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
  {
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: img3,
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: img4,
	},
];

// function AllProducts = () => {
  const AllProducts = () => {
    const [cartsVisibilty, setCartVisible] =
      useState(false);
    const [productsInCart, setProducts] =
      useState(
        JSON.parse(
          localStorage.getItem(
            "shopping-cart"
          )
        ) || []
      );
    useEffect(() => {
      localStorage.setItem(
        "shopping-cart",
        JSON.stringify(productsInCart)
      );
    }, [productsInCart]);
    const addProductToCart = (product) => {
      const newProduct = {
        ...product,
        count: 1,
      };
      setProducts([
        ...productsInCart,
        newProduct,
      ]);
    };
  
    const onQuantityChange = (
      productId,
      count
    	) => {
      setProducts((oldState) => {
        const productsIndex =
          oldState.findIndex(
            (item) =>
              item.id === productId
          );
        if (productsIndex !== -1) {
          oldState[productsIndex].count =
            count;
        }
        return [...oldState];
      });
    };
  
    const onProductRemove = (product) => {
      setProducts((oldState) => {
        const productsIndex =
          oldState.findIndex(
            (item) =>
              item.id === product.id
          );
        if (productsIndex !== -1) {
          oldState.splice(productsIndex, 1);
        }
        return [...oldState];
      });
    };
  
  return (

//     <div>
//       <p>All Product page</p>
//     </div>



// // Hidden Code {
// //     // <div>
// //     //   < Navbar/>
// //     //   <div>
// //     //     <div className='grid lg:grid-col-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
// //     //       {/* <Product /> */}

// //     //       {/* {
// //     //         Pdts.map((pdt, key) =>
// //     //         <PdtCard key={key} data={pdt} />
// //     //       )} */}

// //     //           {Pdts.map((item, index)=>{
// //     //                 return( 
// //     //                     <PdtCard 
// //     //                         img={item.img}
// //     //                         price={item.price}
// //     //                         title={item.title} 
// //     //                         item={item} 
// //     //                         key={index} 
// //     //                     />
// //     //                 )
// //     //             })}
// //     //     </div>
// //     //   </div>
// //     // </div>
    
// //     // <>
// //     //   <CartProvider>
// //     //     <Home />
// //     //     <Cart />
// //     //   </CartProvider>
// //     // </>
// //   }
//   )


	<div className="App">
		<ShoppingCart
			visibilty={cartsVisibilty}
			products={productsInCart}
			onClose={() =>
				setCartVisible(false)
			}
			onQuantityChange={
				onQuantityChange
			}
			onProductRemove={onProductRemove}
			/>
			{/* <div className="navbar">
				<h3 className="logo">logo</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
						{
							productsInCart.length
						}
						</span>
						)}
				</button>
			</div> */}
		
		<Navbar />

		<main>
			<h1 className="title">
			 Products
			</h1>
			<div className="products">
			{products.map((product) => (
				<div
					className="product"
					key={product.id}>
					<img
						className="product-image"
						src={
						product.image
						}
						alt={
						product.image
						}
					/>
					<h4 className="product-name">
						{product.name}
					</h4>
					<RatingStars
						rating={
						product.rating
						}
					/>
					<p>
						{
						product.description
						}
					</p>
					<span className="product-price">
						{product.price}$
					</span>
				<div className="buttons">
					<button className="btn">
					Detail
					</button>
					<button
					className="btn"
					onClick={() =>
						addProductToCart(
						product
						)
					}>
					Add to cart
							</button>
						</div>
					</div>
				))}
				</div>
			</main>
</div>
);


}

export default AllProducts 