import React from "react";

const NavBar = props => (
  <div className="row">
    <nav style={{ backgroundColor: "#475c67" }}>
      <div className="nav-wrapper valign-wrapper">
        <div className="col s12">
          <div className="brand-logo">
            <img src="./images/sibi.png" style={{ height: "36px", marginTop:"17px" }} />
          </div>
          <h4 className="right">Form</h4>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
