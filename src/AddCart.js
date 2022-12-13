import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateProducts } from "./Slice/CartSlice";
import { fetchProducts } from "./Slice/CartSlice";
import { AddProduct } from "./Slice/CartSlice";
import { Deletes } from "./Slice/CartSlice";
export const AddCart = () => {
  // state for input values
  const [id, setId] = useState("");
  const disptch = useDispatch();
  const [quantity, setQuantity] = useState("");
  const output = useSelector((state) => state.cart.display.carts);
  const deleteProduct = useSelector((state) => state.cart.deletemsg);
  const Update = useSelector((state) => state.cart);
  const [displaySuccess, setDisplaySuccess] = useState("none");
  const [displayError, setDisplayError] = useState("none");
  useEffect(() => {
    disptch(fetchProducts());
    disptch(UpdateProducts());
    disptch(Deletes());
  }, []);
  // taling value from input
  const QuantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  const IdHandler = (e) => {
    setId(e.target.value);
  };
// adding product to cart
  const AddButtonHandler = () => {
    if (quantity === "" && id === "") {
      setDisplayError("block");
    } else if (quantity === "") {
      setDisplayError("block");
    } else if (id === "") {
      setDisplayError("block");
    } else {
      setDisplaySuccess("block");
      setDisplayError("none");
      disptch(AddProduct(id, quantity));
    }
  };
  // Updation product
  const UpdateButtonHandler = () => {
    disptch(UpdateProducts());
    alert(Update.msg);
  };
  // deleting the cart
  const DeleteHandler = () => {
    disptch(Deletes());
    alert(deleteProduct);
  };
  // closing msg
  const closemsgHandler = (e) => {
    setDisplaySuccess("none");
    setDisplayError("none");
  };
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
      <div className="alert" style={{ display: displayError }}>
        <span class="closebtn" onClick={closemsgHandler}>
          &times;
        </span>
        <strong>Error !</strong> Error in adding to cart
      </div>
      <div className="alert success" style={{ display: displaySuccess }}>
        <span class="closebtn" onClick={closemsgHandler}>
          &times;
        </span>
        <strong>Success!</strong> item added to cart.
      </div>
      <hr />
      <hr />
      <button onClick={DeleteHandler} className="CartButton">
        Delete
      </button>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Action</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {output
            ? output[0].products.map((item) => (
                <tr key={Math.random()}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <input
                      className="QuantityDiv"
                      type="number"
                      placeholder={item.quantity}
                    />
                  </td>
                  <td>
                    <button
                      className="UpdateButton"
                      onClick={UpdateButtonHandler}
                    >
                      Update
                    </button>
                  </td>
                  <td>{item.price}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};
