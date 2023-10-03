import React from "react";
import {  useDispatch } from "react-redux";
import {  MDBIcon } from "mdb-react-ui-kit";
import { increase, decrease, remove } from "../redux/feature/cartSlice";

const CartItem = ({ img, title, price, amount, id }) => {
  const dispatch = useDispatch()
  return (
    <div
      className="container mb-2"
      style={{ maxWidth: "90rem", margin: "0px auto" }}
    >
      <div className="row">
        <div className="col-sm-2">
          <img
            src={img}
            alt={title}
            className="img-fluid"
            style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
          />
        </div>
        <div className="col-sm-2">
          <h2 className="fs-5">{title}</h2>
          <h5 className="fs-6 text-primary">${price}</h5>
          <MDBIcon fas icon="trash" color="danger" onClick={() => dispatch(remove(id))} />
        </div>
        <div className="col-sm-8">
          <MDBIcon fas icon="chevron-up" style={{ cursor: "pointer" }} onClick={() => dispatch(increase(id))} />
          <div>{amount}</div>
          <MDBIcon fas icon="chevron-down" style={{ cursor: "pointer" }} onClick={() => dispatch(decrease(id))} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
