import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetching DAta at add button
export const AddProduct = createAsyncThunk(
  "add/fetch",
  async (id, quantity) => {
    const response = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        discountedTotal: "538",
        products: [
          {
            id: id,
            quantity: quantity,
            title: "iPhone 9",
          },
        ],
      }),
    });
    const data = response.json();
    return data;
  }
);

// Fetching UPdate DAta at update button
export const UpdateProducts = createAsyncThunk("updates/fetch", async () => {
  const res = await fetch("https://dummyjson.com/carts/1", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      userId: 1,
    }),
  });
  const data = await res.json();

  return data;
});
// Fetching data on page loading

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://dummyjson.com/carts/user/1");
  const data = await res.json();
  console.log(data);
  return data;
});

export const Deletes = createAsyncThunk("Deletes/fetch", async () => {
  const res = await fetch("https://dummyjson.com/carts/1", {
    method: "DELETE",
  });
  const data = await res.json();

  return data;
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    loading: false,
    display: [],
    update: {
      updatedata: [],
      msg: "",
    },
    deletemsg: "",
  },
  extraReducers: (builder) => {
    builder.addCase(AddProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(AddProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(AddProduct.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(UpdateProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UpdateProducts.fulfilled, (state, action) => {
      state.update.updatedata = action.payload;
      state.loading = false;
      state.msg = "Updated Succesfully";
    });
    builder.addCase(UpdateProducts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.display = action.payload;
      state.loading = false;
    });
    builder.addCase(Deletes.fulfilled, (state, action) => {
      state.deletemsg = "Data Deleted";
    });
  },
});

export default cartSlice.reducer;
