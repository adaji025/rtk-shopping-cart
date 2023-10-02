import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBBadge,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQty } = useSelector((state) => state.cart);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <MDBNavbarBrand>Redux toolkit shopping Cart</MDBNavbarBrand>
          <MDBNavbarLink>
            <div className="mx-3">
              <MDBIcon fas icon="shopping-cart" size="lg" color="white">
                <MDBBadge
                  pill
                  notification
                  color="danger"
                  style={{ fontSize: "12px" }}
                >
                  {totalQty}
                </MDBBadge>
              </MDBIcon>
            </div>
          </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
