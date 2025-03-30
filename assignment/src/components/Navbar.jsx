import React from "react";
import { Link, NavLink } from "react-router-dom";
import Category from "./Category";
import { ShoppingCart } from 'lucide-react'
const Navbar = ({ GetProduct, setFilteredProduct }) => {
  return (
    <div className="navbar-container">     
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive? 'active-page' : 'inactive-page' }>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active-page' : 'inactive-page' }>About</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-page' : 'inactive-page' }>Account</NavLink>
        <Category GetProduct={GetProduct} setFilteredProduct={setFilteredProduct} />
      </nav>
      <Link to={"/cart"}>
        <button className="cart"><ShoppingCart /></button>
      </Link>
    </div>
  );
};

export default Navbar;
