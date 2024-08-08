//import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import headphone from "../assets/hero/headphone.png";
import watch from "../assets/category/smartwatch2-removebg-preview.png";
// import ProductDetails from "../components/ProductDetails/ProductDetails"

import Dash from "./Dash"

//import api from "../api";
import Products from "../components/Products/Products";

const BannerItems ={
  discount: "37%  OFF",
  title: "Big Smile",
  date: "27 July to 27 August",
  image: headphone,
  title2: "AirPods Pro",
  title3: "Clearance Sale",
  title4: "i am the best and the best there ever will be, i am the best and the best there ever will be," ,
  bgColor: "#f42c37",
  
}

const BannerItems2 ={
  discount: "37%  OFF",
  title: "Big Smile",
  date: "27 July to 27 August",
  image: watch,
  title2: "Smart Watch",
  title3: "Clearance Sale",
  title4: "i am the Best and the Best there ever will be, i am the Best and the Best there ever will be," ,
  bgColor: "#2dcc6f",
  
}

 const Home = () => {
    // const [products, setProducts] = useState([]);
    // const [content, setContent] = useState("");
    // const [title, setTitle] = useState("");

    // useEffect(() => {
    //     getProducts();
    // }, []);

    // const getProducts = () => {
    //     api
    //         .get("/api/products/")
    //         .then((res) => res.data)
    //         .then((data) => {
    //             setProducts(data);
    //         })
    //         .catch((err) => alert(err));
    // };

    // const deleteProduct = (id) => {
    //     api
    //         .delete(`/api/products/delete/${id}/`)
    //         .then((res) => {
    //             if (res.status === 204) alert("Product deleted!");
    //             else alert("Failed to delete note.");
    //             getProducts();
    //         })
    //         .catch((error) => alert(error));
    // };

    // const createProduct = (e) => {
    //     e.preventDefault();
    //     api
    //         .post("/api/products/", { content, title })
    //         .then((res) => {
    //             if (res.status === 201) alert("Product created!");
    //             else alert("Failed to make Product.");
    //             getProducts();
    //         })
    //         .catch((err) => alert(err));
    // };

  return (
    <div className="bg-white light:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar />
        <Hero />
        <Category />
        <Services />
        <Banner data={BannerItems}/>
        <Category2 />
        <Products />
        {/* <ProductDetails /> */}
        
        <Banner data={BannerItems2}/>
    </div>
  )
}

export default Home