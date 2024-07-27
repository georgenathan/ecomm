import React from "react";
import api from "../../api";
import { useState, useEffect } from "react"; 


const AddCategory = () => {

    const [categorys, setCategorys] = useState([]);
    const [title, setTitle] = useState("");

     useEffect(() => {
        getCategorys();
    }, []);

    const getCategorys = () => {
        api
            .get("/api/categorys/")  
            .then((res) => res.data)
            .then((data) => {
                setCategorys(data);
            })
            .catch((err) => alert(err));
    };

    const createCategory = (e) => {
        e.preventDefault();
        api
            .post("/api/categorys/", { title })
            .then((res) => {
                if (res.status === 201) alert("Category created!");
                else alert("Failed to make Category.");
                getCategorys();
            })
            .catch((err) => alert(err));
    };

  return (
    // add category form

    <form onSubmit={createCategory}>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Add Category
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter Category"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
             
              <div>
                
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
    </div>
    </form>
  );
};

export default AddCategory;
