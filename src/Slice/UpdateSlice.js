import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

export const UpdateProducts = createAsyncThunk('updates/fetch', async () => {
    const res = await fetch('https://dummyjson.com/carts/1',{
        method:"PUT",
       headers:{'content-type':'application/json'},
       body:JSON.stringify({
            userId:1,
       })
    });
    const data = await res.json();
    console.log(data);
    return data;
});
const UpdateSlice=createSlice({
    name:"update",
    initialState:{
        data:[],
        loading:false,
        msg:""
    },
    extraReducers:(builder)=>{
        builder.addCase(UpdateProducts.pending, (state,action)=>{
           state.loading=true
        })
        builder.addCase(UpdateProducts.fulfilled, (state, action) => {
            state.data=action.payload
            state.loading=false
            state.msg="Updated Succesfully"
        })
        builder.addCase(UpdateProducts.rejected,(state)=>{
            state.loading=false
        })
    }
})
export default UpdateSlice.reducer;
