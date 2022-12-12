import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slice/CartSlice'
import productReducer from './Slice/ProductSlice'
import UpdateReducer from './Slice/UpdateSlice'
import deleteReducer from './Slice/DeleteSlice'
 const store=configureStore({
     reducer:{
       cart:cartReducer,
       product:productReducer,
       update:UpdateReducer,
       delete:deleteReducer
    },
 })
 export default store;