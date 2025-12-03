import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/bike.jpg";
import login from "./images/login.png";

function Header() {
  const [open, setOpen] = useState(false);

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0f1265ff",
    padding: "12px 20px",
    position: "sticky",
    top: 0,
    zIndex: 1000
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    margin: "10px 0",
    display: "inline-block"
  };

  const menuStyle = {
    display: "flex",
    gap: "35px",
    alignItems: "center",
    flexWrap: "wrap"
  };

  const mobileMenuStyle = {
    display: open ? "flex" : "none",
    flexDirection: "column",
    background: "#0f1265ff",
    padding: "15px",
    position: "absolute",
    top: "70px",
    left: 0,
    width: "100%",
    animation: "fade .3s ease",
    zIndex: 999
  };

  return (
    <>
      <style>
        {`
        @keyframes spin {
          0% { transform: translate(0,0); }
          50% { transform: translate(280px,0); }
          50.1% { transform: translate(270px,0) scaleX(-1); }
          100% { transform: translate(0,0) scaleX(-1); }
        }

        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Mobile styles */
        @media(max-width: 900px) {
          .desktopMenu {
            display: none !important;
          }
          .mobileButton {
            display: block !important;
          }
        }

        /* Desktop styles */
        @media(min-width: 901px) {
          .mobileButton {
            display: none !important;
          }
        }
      `}
      </style>

      <div style={headerStyle}>
        <img
          src={logo}
          width={60}
          height={48}
          style={{
            animation: "spin 6s linear infinite"
          }}
          alt="logo"
        />

        <div style={{ marginLeft: "15px", color: "white", fontSize: "25px" }}>
          <i>Driving Class</i>
        </div>

        {/* Desktop Menu */}
        <div className="desktopMenu" style={menuStyle}>
          <Link style={linkStyle} to="/about">About us</Link>
          <Link style={linkStyle} to="/services">Services</Link>
          <Link style={linkStyle} to="/gallery">Gallery</Link>
          <Link style={linkStyle} to="/scheme">Scheme</Link>
          <Link style={linkStyle} to="/package">Package</Link>
          <Link style={linkStyle} to="/slotsbooking">Slots Booking</Link>
          <Link style={linkStyle} to="/contact">Contact us</Link>
          <Link to="/login">
            <img src={login} width={35} height={35} style={{ borderRadius: "50%" }} alt="login" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="mobileButton"
          style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div style={mobileMenuStyle}>
        <Link style={linkStyle} to="/about">About us</Link>
        <Link style={linkStyle} to="/services">Services</Link>
        <Link style={linkStyle} to="/gallery">Gallery</Link>
        <Link style={linkStyle} to="/scheme">Scheme</Link>
        <Link style={linkStyle} to="/package">Package</Link>
        <Link style={linkStyle} to="/slotsbooking">Slots Booking</Link>
        <Link style={linkStyle} to="/contact">Contact us</Link>
        <Link style={linkStyle} to="/login">
          <img src={login} width={35} height={35} style={{ borderRadius: "50%" }} alt="login" />
        </Link>
      </div>
    </>
  );
}

export default Header;
