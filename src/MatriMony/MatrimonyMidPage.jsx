import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Story from "./Story";

const MatrimonyMidPage = () => {
  return (
    <>
    <div>
      {/* Header and Search Section with Background */}
      <div
        style={{
          backgroundColor: "#f2ebff",
          backgroundImage: `url('./Image_02/floral.png'), url('./Image_02/floral.png')`,
          backgroundRepeat: "repeat-x, repeat-x",
          backgroundSize: "60px 60px",
          backgroundPosition: "bottom left, top left",
          paddingTop: "60px", // Added padding for extra height at the top
          paddingBottom: "60px", // Added padding for extra height at the bottom
        }}
      >
        {/* Header Section */}
        <div className="text-center">
          <h2 className="fw-bold" style={{ color: "#333" }}>
            Over 25,000+ DialUrban Matrimony Profiles
          </h2>
          <p className="fw-semibold mb-4">Get Started</p>
        </div>

        {/* Search Form Section */}
        <div className="container pb-4">
          <div className="row justify-content-center">
            <div className="col-md-10 bg-white p-4 rounded shadow">
              <div className="row g-3 align-items-center">
                {/* Radio Buttons */}
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="profileType"
                      id="bride"
                      value="Bride"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="bride">
                      Bride
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="profileType"
                      id="groom"
                      value="Groom"
                    />
                    <label className="form-check-label" htmlFor="groom">
                      Groom
                    </label>
                  </div>
                </div>

                {/* Age Fields */}
                <div className="col">
                  <select className="form-select">
                    <option>Age</option>
                    {[...Array(40)].map((_, i) => (
                      <option key={i}>{18 + i}</option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <select className="form-select">
                    <option>To</option>
                    {[...Array(40)].map((_, i) => (
                      <option key={i}>{18 + i}</option>
                    ))}
                  </select>
                </div>

                {/* Select Religion */}
                <div className="col">
                  <select className="form-select">
                    <option>Select Religion</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Christian</option>
                    <option>Sikh</option>
                  </select>
                </div>

                {/* Caste/Division */}
                <div className="col">
                  <select className="form-select">
                    <option>Caste/Division</option>
                    <option>Brahmin</option>
                    <option>Kshatriya</option>
                    <option>Vaishya</option>
                    <option>Shudra</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="col-auto">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Communities Section */}
      <div className="container my-5">
        <h5 className="text-center fw-bold mb-4">Browse By Oriya Communities</h5>
        <div className="row justify-content-center">
          {[...Array(4)].map((_, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="bg-white rounded p-3 shadow-sm">
                {["Community 1", "Community 2", "Community 3", "Community 4"].map((item, idx) => (
                  <p key={idx} className="mb-1" style={{ fontSize: "14px" }}>
                    <span role="img" aria-label="ring">
                      💍
                    </span>{" "}
                    <a href="#" className="text-primary text-decoration-none">
                      {item}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="text-center mt-4">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>

    <div
  style={{
    height: "400px", // Fixed height for the section
    backgroundImage: "url('./Image_02/hindu.jpg')", // Replace with actual image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
  {/* Content Section */}
  <div
    style={{
      backgroundColor: "rgba(290, 290, 290, 0.1)", // Increased transparency
      padding: "20px 40px",
      borderRadius: "10px",
    }}
  >
    {/* Heading */}
    <h3
      className="fw-bold mb-3"
      style={{ color: "#8B0000", fontSize: "24px" }}
    >
      ASSISTED SERVICE
    </h3>

    {/* Description */}
    <p className="mb-4" style={{ fontSize: "18px", color: "#333",  }}>
      Experience Personalised Matchmaking At Its Best. <br />
      A Relationship Manager Is All You Need To Speed-up Your Partner Search.
    </p>

    {/* Button */}
    <button
      className="btn btn-primary px-4 py-2"
      style={{ fontSize: "16px" }}
    >
      KNOW MORE
    </button>
  </div>
</div>

     <div
     style={{
       height: "400px", // Set fixed height for the section
       backgroundImage: "url('./Image_02/mab.jpg')", // Replace with actual image path
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       position: "relative", // Allows overlay content to align properly
     }}
   >
     {/* Content Overlay */}
     <div
       className="d-flex flex-column justify-content-center align-items-start text-white px-5"
       style={{
         position: "absolute",
         top: "0",
         left: "0",
         width: "50%", // Overlay container width
         height: "100%",
         background: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
       }}
     >
       {/* Heading */}
       <h2 className="fw-bold mb-3" style={{ fontSize: "30px" }}>
         Finest Hand Picked <br />
         matches
       </h2>

       {/* Sub-heading */}
       <h4 className="fw-semibold mb-4" style={{ fontSize: "24px" }}>
         Only For You
       </h4>

       {/* Button */}
       <button className="btn btn-primary px-4 py-2">Contact Us</button>
     </div>
   </div>
   <Story/>

    </>


  );
};

export default MatrimonyMidPage;
