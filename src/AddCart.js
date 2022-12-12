import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./Slice/ProductSlice";
import { UpdateProducts } from "./Slice/UpdateSlice";
import { AddProduct } from "./Slice/CartSlice";
import Deletes from "./Slice/DeleteSlice";
export const AddCart = () => {
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState("");
  const disptch = useDispatch();
  const output = useSelector((state) => state.product.data.carts);
  const Add=useSelector((state)=>state.cart)
  const deleteProduct = useSelector((state)=>state.delete)
  const Update=useSelector((state)=>state.update.data)
console.log("addProduct",Add);
  console.log(deleteProduct);
  useEffect(() => {
    disptch(fetchProducts());
  }, []);
  const QuantityHandler=(e)=>{
    setQuantity(e.target.value)
  }
  const IdHandler=(e)=>{
    setId(e.target.value)
  }
  console.log(quantity);
  const AddButtonHandler = () => {
    disptch(AddProduct(id,quantity))
  
    // disptch(
    //   AddProduct(
    //     {
    //       id:id,
    //       quantity:quantity
    //     }
    //   )
    // );
    console.log(disptch(AddProduct()));
  };
  const UpdateButtonHandler=()=>{
  disptch(UpdateProducts());
  console.log("updateClick",Update);
  // console.log(disptch(UpdateProducts()));
  }
  const DeleteHandler=()=>{
  disptch(Deletes());
  }

  return (
    <div className="FormDiv">
      <h2>Add to cart</h2>
      <hr />
      <label htmlFor="">Product Id</label>
      <br />
      <input type="text" onChange={IdHandler} />
      <hr />
      <label htmlFor="">Quantity</label>
      <br />
      <input type="text" onChange={QuantityHandler} />
      <button className="CartButton" onClick={AddButtonHandler}>
        Add to cart
      </button>
      <hr />
      <hr />
      <button onClick={DeleteHandler}>Delete</button>
      <h2>Shopping Cart</h2>
      <table>
        <tr>
          <th>Id</th> <th>Title</th> <th>Quantity</th> <th>Action</th>{" "}
          <th>Price</th>
        </tr>
        {output
          ? output[0].products.map((item) => (
              <tr>
                <td>{item.id}</td>{" "}
                <td>{item.title}</td> {" "}
                <td> <input type="number" placeholder={item.quantity} value={item.quantity}/></td>{" "}
                <td><button className="UpdateButton" onClick={UpdateButtonHandler}>Update</button></td>{" "}
                <td>{item.price}</td>{" "}
              </tr>
            ))
          : null}
      </table>
    </div>
  );
};
