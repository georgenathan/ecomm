import React from "react";
import api from "../../api";
import { useState, useEffect } from "react";

const AddProduct = () => {
    const [product_name, setProducts] = useState([]);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category_id, setCategory_id] = useState("");

     useEffect(() => {
        getProducts();
    }, []);

     const getProducts = () => {
        api
            .get("/api/products/")
            .then((res) => res.data)
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => alert(err));
    };

    const createProduct = (e) => {
    e.preventDefault();
    api
        .post("/api/products/", { product_name, price, description, category_id })
        .then((res) => {
            if (res.status === 201) alert("Product created!");
            else alert("Failed to make Product.");
            getProducts();
        })
        .catch((err) => alert(err));
    };
  return (
    // add product form
    <form onSubmit={createProduct}>
    <div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Add Product
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Product Name"
                  onChange={(e) => setProducts(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  type="text"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <select
                  id="country"
                  name="country"
                  onChange={(e) => setCategory_id(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 
                  text-gray-900 shadow-sm ring-1 ring-inset 
                  ring-gray-300 focus:ring-2 focus:ring-inset 
                  focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Category</option>
                </select>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default AddProduct;
