import configureStore from "@reduxjs/toolkit"
import cartReducers from "./Cart"

const store = configureStore({
    reducer: {
        cart: cartReducers,
    }
})

export default store