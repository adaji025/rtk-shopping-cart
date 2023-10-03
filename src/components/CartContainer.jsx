import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";
import CartItem from "./CartItem";
import {
  clearCart,
  getCartItems,
  getTotalItem,
} from "../redux/feature/cartSlice";

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalItem());
  }, [items]);

  {
    if (items.length === 0) {
      return (
        <>
          <h2 className="lead-mb-0 mt-2 text-center mb-6">Cart is Empty</h2>
          <div className="d-flex justify-content-center">
            <MDBBtn onClick={() => dispatch(getCartItems())}>Get item</MDBBtn>
          </div>
        </>
      );
    }
  }
  return (
    <div className="container">
      <h2 className="lead-mb-0 mt-2 text-center mb-6">Your Shopping Cart</h2>
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <footer className="mb-2" style={{ maxWidth: "90rem" }}>
        <hr />
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h4>Total ${totalAmount}</h4>
          </div>
          <MDBBtn color="danger" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </MDBBtn>
        </div>
      </footer>
    </div>
  );
};

export default CartContainer;
