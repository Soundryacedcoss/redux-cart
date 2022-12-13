import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slice/CartSlice'
 const store=configureStore({
     reducer:{
       cart:cartReducer,
    },
 })
 export default store;