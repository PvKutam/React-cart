import React,{useEffect} from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getCartTotal} from '../features/cartSlice'

export default function App() {
  const { totalQuantity,cart } = useSelector((state) => state.allCart);

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to="/">All product</Link>
        <MDBBtn color="dark">
          <Link to="/cart">Cart{totalQuantity}</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
