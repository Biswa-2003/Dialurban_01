import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MatroFooter = () => {
  return (
    <div
      style={{
        background: "#dde8ff url('./Image_02/worldmap.png') no-repeat center center",
        backgroundSize: "contain",  // Use 'contain' to fit the image properly
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Optional: Makes the background fixed when scrolling
        padding: "40px 0",
        color: "#333", // Text color
      }}
    >
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#1e73be", fontWeight: "bold" }}>About Us</h5>
            <p style={{ fontSize: "14px" }}>
              An online matrimony service for finding suitable brides and grooms
              for busy professionals. This portal is really helpful in making
              matches and finding the life partner...{" "}
              <a href="#" style={{ color: "#1e73be" }}>
                read more
              </a>
            </p>
            <h4 style={{ color: "#f68b1f", fontWeight: "bold" }}>
              dial<span style={{ color: "#1e73be" }}>urban</span>™
            </h4>
            <p style={{ fontSize: "12px" }}>be connected</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#1e73be", fontWeight: "bold" }}>Quick Links</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#1e73be", fontWeight: "bold" }}>Contact Us</h5>
            <p style={{ fontSize: "14px" }}>
              Mail Us:{" "}
              <a
                href="mailto:matrimony@dialurban.com"
                style={{ textDecoration: "none", color: "#1e73be" }}
              >
                matrimony@dialurban.com
              </a>
            </p>
            <p style={{ fontSize: "14px" }}>
              Call Us:{" "}
              <a
                href="tel:+916370103299"
                style={{ textDecoration: "none", color: "#1e73be" }}
              >
                +91 6370103299
              </a>
            </p>
            <p style={{ fontSize: "14px" }}>Bhubaneswar, Odisha, India</p>
            <div>
              <a
                href="#"
                style={{
                  marginRight: "10px",
                  fontSize: "1.5rem",
                  color: "#1e73be",
                }}
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="#"
                style={{
                  marginRight: "10px",
                  fontSize: "1.5rem",
                  color: "#1e73be",
                }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="#"
                style={{
                  marginRight: "10px",
                  fontSize: "1.5rem",
                  color: "#1e73be",
                }}
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="#"
                style={{
                  marginRight: "10px",
                  fontSize: "1.5rem",
                  color: "#1e73be",
                }}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                style={{
                  fontSize: "1.5rem",
                  color: "#1e73be",
                }}
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Toll-Free Number & Download App */}
        <div className="text-center mt-4">
          <div>
            <p
              style={{
                fontWeight: "bold",
                color: "#1e73be",
                margin: "0",
                fontSize: "14px",
              }}
            >
              <i className="bi bi-telephone"></i> Toll Free Number: 1800 890 9495
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#333",
                margin: "0",
              }}
            >
              Download Our Android App{" "}
              <i
                className="bi bi-android"
                style={{ fontSize: "1.2rem", color: "#1e73be" }}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatroFooter;
