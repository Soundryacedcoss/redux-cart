import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const AddProduct = createAsyncThunk('add/fetch',async(id,quantity)=>{
const response=await fetch("https://dummyjson.com/carts/add"
,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({
                userId:1,
                discountedTotal:'538',
                products:[
                    {
                        id:id,
                        quantity:quantity,
                        "title": "iPhone 9", 
                    }
                ]
            })
})
   const data= response.json()
   console.log(data);
   return data;
}) ;

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        data:[],
        loading:false, 
},
    extraReducers:(builder)=>{
       builder.addCase(AddProduct.pending,(state)=>{
        state.loading=true
       })
       builder.addCase(AddProduct.fulfilled,(state,action)=>{
        state.data=action.payload
        state.loading=false
       })
       builder.addCase(AddProduct.rejected,(state,action)=>{
        state.loading=false
       })
    }
})

export default cartSlice.reducer

