import React, { Component } from "react";
import {Navbar,Nav,Button} from "react-bootstrap";


class Header extends Component{
    render() {
        return (
    <>
<Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
 
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="mr-auto">
      
      
    </Nav> */}
    <Nav className ="ml-auto">
    <Nav.Link href="#" style={{color:"black",fontSize:"13px"}}>upcoming <br/> live interaction</Nav.Link>
      <Nav.Link href="#" style={{color:"black",fontSize:"13px"}}>Buy Plans</Nav.Link>
      <Nav.Link href="#" style={{color:"black",fontSize:"13px"}}>
        View Plans
      </Nav.Link>
      <Nav.Link><Button  className="login" style={{color:"white"}}>SignUp</Button></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
        )}
}

export default Header;
