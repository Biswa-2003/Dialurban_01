import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const End = () => {
  const featureCards = [
    {
      icon: "fas fa-award",
      title: "High Quality & Trusted Professionals",
      description:
        "We provide only verified, background checked and high-quality professionals",
    },
    {
      icon: "fas fa-headset",
      title: "Support 24x7",
      description:
        "We are open 24x7 to resolve your queries. Just contact us and get responses quickly.",
    },
    {
      icon: "fas fa-check-circle",
      title: "Matched to Your Needs",
      description:
        "Contact genuine profiles with 100% verified mobile numbers",
    },
  ];

  return (
    <>
      {/* Feature Cards Section */}
     <div className=" justify-content-center align-items-center ">

     <div className="py-5" style={{ backgroundColor: "#F7F1F0" }}>
        <div className="container">
          <div className="row text-center g-4">
            {featureCards.map((card, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="p-4 shadow rounded mb-4"
                  style={{
                    backgroundColor: "white",
                    height: "100%",
                  }}
                >
                  <i
                    className={`${card.icon} text-primary`}

                    
                    style={{ fontSize: "40px", marginBottom: "15px" }}
                  ></i>
                  <h5 className="fw-bold mt-3 mb-3">{card.title}</h5>
                  <p className="text-muted mt-2 mb-0">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-5" style={{ backgroundColor: "#F7F1F0" }}>
        <div className="container">
          <div className="row g-4">
            {/* About Us Section */}
            <div className="col-md-5 mb-4">
              <h5 className="fw-bold mb-3">About Us</h5>
              <p className="text-muted mb-3">
                Life in the 21st century is not the same as it used to be some
                decades back. Things have improved dramatically over time and
                keepin...{" "}
                <a href="#" className="text-primary text-decoration-none">
                  read more
                </a>
              </p>
              <img
                src="./Image/logo.jpg" // Replace with actual logo path
                alt="Dialurban Logo"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </div>

            {/* Quick Links Section */}
            <div className="col-md-3 mb-8">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="text-muted text-decoration-none">
                        About Us
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-muted text-decoration-none">
                        Contact Us
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-muted text-decoration-none">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted text-decoration-none">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="text-muted text-decoration-none">
                        Careers
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-muted text-decoration-none">
                        Team
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-muted text-decoration-none">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted text-decoration-none">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <p className="text-muted mb-3">
                Mail Us:{" "}
                <a
                  href="mailto:info@dialurban.com"
                  className="text-primary text-decoration-none"
                >
                  info@dialurban.com
                </a>
              </p>
              <p className="text-muted mb-3">
                Call Us:{" "}
                <a
                  href="tel:+916370103299"
                  className="text-primary text-decoration-none"
                >
                  +91 6370103299
                </a>
              </p>
              <p className="text-muted mb-3">
                HIG-197, K-5, Kalinga Vihar, Tamando, Bhubaneswar, Odisha,
                751019
              </p>

              {/* Social Media Section */}
              <div className="mt-4">
                <h6 className="fw-bold mb-3">Follow Us</h6>
                <div className="d-flex gap-3">
                  <a href="#" className="text-decoration-none">
                    <i
                      className="fab fa-facebook fa-2x"
                      style={{ color: "#1da1f2" }}
                    ></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i
                      className="fab fa-twitter fa-2x"
                      style={{ color: "#1da1f2" }}
                    ></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i
                      className="fab fa-youtube fa-2x"
                      style={{ color: "#1da1f2" }}
                    ></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i
                      className="fab fa-linkedin fa-2x"
                      style={{ color: "#1da1f2" }}
                    ></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i
                      className="fab fa-instagram fa-2x"
                      style={{ color: "#1da1f2" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Empty Placeholder Column */}
            <div className="col-md-3"></div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center mt-5">
            <p className="text-muted mb-3">
              Toll Free Number:{" "}
              <a
                href="tel:18008909495"
                className="text-decoration-none"
                style={{ color: "#1da1f2" }}
              >
                1800 890 9495
              </a>
            </p>
            <p className="text-muted mb-3">
              Download Our Android App{" "}
              <i className="fab fa-android text-success"></i>
            </p>
            <p className="text-muted">
              Copyright © 2024. All Rights Reserved | Designed & Developed By{" "}
              <a href="#" className="text-primary text-decoration-none">
                Dialurban
              </a>
            </p>
          </div>
        </div>
      </footer>
     </div>
    </>
  );
};

export default End;
