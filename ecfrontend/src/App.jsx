import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Cart from "./pages/Cart"
import Dash from "./pages/Dash"
import AllProducts from "./pages/AllProducts"
import NotFound from "./pages/NotFound"
import ProtectedRoutes from "./components/ProtectedRoutes"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Signup />
}

const App = () => {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<RegisterAndLogout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dash" element={
        <ProtectedRoutes>
        <Dash />
        </ProtectedRoutes>
        } />
        <Route path="/products" element={<AllProducts />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App