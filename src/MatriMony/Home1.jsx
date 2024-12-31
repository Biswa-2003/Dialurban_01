import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MatrimonyMidPage from "./MatrimonyMidPage";
import MatroFooter from "./MatroFooter";
import { Link } from "react-router-dom";

const Home1 = () => {
  useEffect(() => {
    // Removed the alert and prompt logic.
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm w-100 mt-0" style={{ position: "fixed", top: 0, zIndex: 999 }}>
        <div className="container">
          {/* Logo Section with Image */}
          <a className="navbar-brand" href="/">
            <img
              src="./Image/logo.jpg" // Replace with the correct path to your logo image
              alt="logo"
              style={{ height: "40px", width: "auto" }} // Adjust size as needed
            />
          </a>

          {/* Toggle Button for Small Screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/matrimony/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/matrimony/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/matrimony/packageselection">
                  Package
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/matrimony/login">
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#app-link">
                  <i className="bi bi-android" style={{ fontSize: "1.5rem", color: "blue" }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          height: "100vh", // Full viewport height
          backgroundImage: "url('./Image_02/matromon.jpg')", // Replace with actual image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "80px", // Added margin top to create space for the fixed navbar
        }}
      >
        {/* Main Content */}
        <div
          className="d-flex justify-content-end align-items-start"
          style={{
            height: "100%", // Full height to cover the screen
            paddingRight: "50px", // Adjust padding for form position
            paddingTop: "50px", // Add some space from the top
          }}
        >
          <div
            className="p-4 rounded shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
              backdropFilter: "blur(10px)", // Optional: adds a blur effect behind the form
              maxWidth: "500px", // Decreased width
              minHeight: "350px", // Reduced height
              width: "100%",
              marginTop: "15px", // Added margin-top to adjust the form position within the background
              marginLeft: "50px", // Added margin-left for space on the left side
              borderRadius: "10px", // Optional: rounded corners for a smoother look
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", // Added a stronger shadow for depth
            }}
          >
            <h3
              className="text-center mb-3"
              style={{ fontSize: "18px", lineHeight: "1.2" }} // Reduced the space between lines by adjusting line-height
            >
              Your partner search begins with a
              <br />
              <strong>FREE REGISTRATION!</strong>
            </h3>

            <form>
              {/* Profile For */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Profile for
                </label>
                <select
                  className="form-select"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                >
                  <option>Select Profile for</option>
                  <option>Self</option>
                  <option>Son/Daughter</option>
                </select>
              </div>

              {/* Name */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "2px" }}
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "2px" }}
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                />
              </div>

              {/* Gender */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Gender
                </label>
                <select
                  className="form-select"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              {/* Religion */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Religion
                </label>
                <select
                  className="form-select"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                >
                  <option>Select Religion</option>
                  <option>Hindu</option>
                  <option>Christian</option>
                </select>
              </div>

              {/* Mother Tongue */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Mother Tongue
                </label>
                <select
                  className="form-select"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                >
                  <option>Select Mother Tongue</option>
                  <option>Hindi</option>
                  <option>English</option>
                </select>
              </div>

              {/* Mobile Number */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Mobile No.
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile No."
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                />
              </div>

              {/* Email ID */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email ID"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                />
              </div>

              {/* Password */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  className="form-label"
                  style={{ fontSize: "13px", width: "40%", marginBottom: "3px" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  style={{ fontSize: "13px", width: "60%", marginBottom: "3px" }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{
                  fontSize: "13px",
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                }}
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Matrimony Mid Page */}
      <MatrimonyMidPage />

      {/* Footer Section */}
      <MatroFooter />
    </>
  );
};

export default Home1;
