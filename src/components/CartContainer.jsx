import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  return (
    <div className="container">
      <h2 className="lead-mb-0 mt-2 text-center mb-6">Your Shopping Cart</h2>
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <footer className="mb-2" style={{maxWidth: "90rem"}}>
        <hr />
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h4>Total ${totalAmount}</h4>
          </div>
          <MDBBtn color="danger">Clear Cart</MDBBtn>
        </div>
      </footer>
    </div>
  );
};

export default CartContainer;
