import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavBar = () => {
  const cardsData = [
    { title: "Dialurban Job", iconClass: "fas fa-briefcase", color: "#007bff" },
    { title: "Dialurban Property", iconClass: "fas fa-home", color: "#ffc107" },
    { title: "Dialurban Matrimony", iconClass: "fas fa-heart", color: "#ff5722" },
    { title: "Dialurban Deal", iconClass: "fas fa-handshake", color: "#9c27b0" },
    { title: "Dialurban Services", iconClass: "fas fa-cogs", color: "#4caf50" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className="w-100 py-2 text-white"
        style={{
          backgroundColor: "#ff7f0b",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 101,
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <i className="fas fa-phone-alt me-2"></i> +91 6370103299
            <span className="mx-3"></span>
            <i className="fas fa-envelope me-2"></i> info@dialurban.com
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div
        className="w-100 py-3"
        style={{
          position: "fixed",
          top: "40px",
          width: "100%",
          backgroundColor: "#f8f9fa",
          zIndex: 102,
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <img
            src="./Image/logo.jpg"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "150px", height: "auto" }}
          />

          {/* Navigation Links */}
          <div className="d-flex gap-4">
            <Link to="/about" className="text-dark fw-bold text-decoration-none fs-lg">
              About Us
            </Link>
            <Link to="/contactus" className="text-dark fw-bold text-decoration-none">
              Contact Us
            </Link>
            <Link to="/blog" className="text-dark fw-bold text-decoration-none">
              Blog
            </Link>
            <Link to="/career" className="text-dark fw-bold text-decoration-none">
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel */}
      
    </>
  );
};

export default NavBar;
