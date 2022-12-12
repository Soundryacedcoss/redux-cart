import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const Deletes = createAsyncThunk("Deletes/fetch", async () => {
  const res = await fetch("https://dummyjson.com/carts/user/1", {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
  return data;
});
const initialState = {
  data: [],
  loading: false,
};
export const DelteSlice = createSlice({
  name: "delete",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Deletes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(Deletes.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(Deletes.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default DelteSlice.reducer;
