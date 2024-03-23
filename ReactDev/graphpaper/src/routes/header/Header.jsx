import React from "react";

const Navbar = () => {
  const navLeft = [
    "WEB STORE",
    "EXHIBITION",
    "NEWS",
    "STORIES",
    "NEW",
    "CONCEPT",
    "STOCKIST",
  ];

  const navRight = ["SEARCH", "ACCOUNT", "WHISHLIST"];

  const listLeft = navLeft.map((navName) => (
    <a href="#" class="nav">
      <span class="nav-content">{navName}</span>
    </a>
  ));

  const listRight = navRight.map((navName) => (
    <a href="#" class="nav">
      <span class="nav-content">{navName}</span>
    </a>
  ));

  return (
    <div class="header">
      <div class="navbar">
        <div class="left">
          <div class="logo">
            <h3>Graphpaper</h3>
          </div>
          {listLeft}
        </div>
        <div class="right">
          {listRight}
          <a href="#">
            <box-icon type='logo' name='instagram'></box-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
