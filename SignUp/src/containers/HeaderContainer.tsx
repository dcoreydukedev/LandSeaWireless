import React from "react";
import Navbar from "react-bootstrap/Navbar";

export const HeaderContainer = () => {
    return(
      <div className="container header_container">
         <Navbar>
            <Navbar.Brand href="#home">LandSeaWireless SignUp</Navbar.Brand>          
            </Navbar>
      </div>
    )
  }

  export default HeaderContainer