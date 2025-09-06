import { configureStore } from '@reduxjs/toolkit'
import cartReducer  from "./counter/counterSlice"

export const store = configureStore({
  reducer: {
    cart:cartReducer ,
  },
})