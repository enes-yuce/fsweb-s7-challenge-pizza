import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title"> Teknolojik yemekler</h1>
      <NavLink
        to="/"
        style={({ isActive, isPending, isTransitioning }) => ({
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "white",
          viewTransitionName: isTransitioning ? "slide" : "",
        })}
      >
        Anasayfa-
      </NavLink>

      <NavLink
        to="/Siparis"
        style={({ isActive, isPending, isTransitioning }) => ({
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "white",
          viewTransitionName: isTransitioning ? "slide" : "",
        })}
      >
        Sipariş Oluştur
      </NavLink>
    </div>
  );
}

export default Header;
