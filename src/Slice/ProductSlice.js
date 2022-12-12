import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://dummyjson.com/carts/user/1');
    const data = await res.json();
    console.log(data);
    return data;
});

const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        loading:false,
    },
    // reducers: {
      
    //   },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state,action)=>{
           state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.data=action.payload
            state.loading=false
        })
    }
})
export default productSlice.reducer;
