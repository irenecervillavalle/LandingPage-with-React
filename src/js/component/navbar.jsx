import React from "react";

const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 justify-content-between">
  <div className="container">
    <a className="navbar-brand" href="#">Start Boostrap</a>
    <div className="navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link" >Contact</a>
      </div>
    </div>
  </div>
</nav>

    );
};

export default Navbar;