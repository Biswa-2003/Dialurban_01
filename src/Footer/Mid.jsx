import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Mid = () => {
  const statesData = [
    { name: "Andaman & Nicobar Islands", color: "#b2f2bb", imageUrl: "./Image/andaman-and-nicobar-islands.png", slug : "Andaman-Nicobar-Islands"},
    { name: "Andhra Pradesh", color: "#a5d8ff", imageUrl: "./Image/andhra-pradesh.png", slug : "Andhra Pradesh"},
    { name: "Arunachal Pradesh", color: "#fcc2d7", imageUrl: "./Image/arunachal-pradesh.png", slug : "Arunachal Pradesh" },
    { name: "Assam", color: "#ffec99", imageUrl: "./Image/assam.png",slug : "Assam" },
    { name: "Bihar", color: "#fcc2d7", imageUrl: "./Image/bihar.png" ,slug : "Bihar"},
    { name: "Chandigarh", color: "#d0bfff", imageUrl: "./Image/chandigarh.png",slug : "Chandigarh" },
    { name: "Chhattisgarh", color: "#c3fae8", imageUrl: "./Image/chhattisgarh.png",slug : "Chhattisgarh" },
    { name: "Dadra & Nagar Haveli", color: "#ffebc2", imageUrl: "./Image/dadra-nagar-haveli.png",slug : "Dadra-Nagar-Haveli" },
    { name: "Daman & Diu", color: "#ffc078", imageUrl: "./Image/daman-diu.png",slug : "Daman-Diu" },
    { name: "Delhi", color: "#fab3c3", imageUrl: "./Image/delhi.png",slug : "Delhi" },
    { name: "Goa", color: "#b2f2bb", imageUrl: "./Image/goa.png",slug : "Goa" },
    { name: "Gujarat", color: "#c3fae8", imageUrl: "./Image/gujarat.png",slug : "Gujarat" },
    { name: "Haryana", color: "#ffec99", imageUrl: "./Image/haryana.png",slug :  "Haryana" },
    { name: "Himachal Pradesh", color: "#fcc2d7", imageUrl: "./Image/himachal-pradesh.png",slug : "Himachal Pradesh" },
    { name: "Jammu & Kashmir", color: "#bac8ff", imageUrl: "./Image/jammu-kashmir.png",slug : "Jammu-Kashmir" },
    { name: "Jharkhand", color: "#d0bfff", imageUrl: "./Image/jharkhand.png",slug : "Jharkhand" },
    { name: "Karnataka", color: "#c3fae8", imageUrl: "./Image/karnataka.png",slug : "Karnataka" },
    { name: "Kerala", color: "#b2f2bb", imageUrl: "./Image/kerala.png",slug :  "Kerala" },
    { name: "Ladakh", color: "#d0bfff", imageUrl: "./Image/ladakh.png",slug : "Ladakh" },
    { name: "Lakshadweep", color: "#a5d8ff", imageUrl: "./Image/lakshadweep.png",slug :"Lakshadweep" },
    { name: "Madhya Pradesh", color: "#fab3c3", imageUrl: "./Image/madhya-pradesh.png",slug : "Madhya Pradesh" },
    { name: "Maharashtra", color: "#ffc078", imageUrl: "./Image/maharashtra.png",slug : "Maharashtra" },
    { name: "Manipur", color: "#c3fae8", imageUrl: "./Image/manipur.png",slug : "Manipur" },
    { name: "Meghalaya", color: "#ffec99", imageUrl: "./Image/meghalaya.png",slug :  "Meghalaya" },
    { name: "Mizoram", color: "#fcc2d7", imageUrl: "./Image/mizoram.png",slug : "Mizoram" },
    { name: "Nagaland", color: "#b2f2bb", imageUrl: "./Image/nagaland.png" ,slug : "Nagaland"},
    { name: "Puducherry", color: "#a5d8ff", imageUrl: "./Image/puducherry.png", slug : "Puducherry" },
    { name: "Punjab", color: "#fab3c3", imageUrl: "./Image/punjab.png", slug : "Punjab" },
    { name: "Rajasthan", color: "#ffc078", imageUrl: "./Image/rajasthan.png",slug : "Rajasthan" },
    { name: "Sikkim", color: "#c3fae8", imageUrl: "./Image/sikkim.png",slug : "Sikkim" },
    { name: "Tamil Nadu", color: "#ffec99", imageUrl: "./Image/tamil-nadu.png",slug : "Tamil-Nadu" },
    { name: "Telangana", color: "#d0bfff", imageUrl: "./Image/telangana.png",slug : "Telangana" },
    { name: "Tripura", color: "#a5d8ff", imageUrl: "./Image/tripura.png",slug : "Tripura" },
    { name: "Uttar Pradesh", color: "#fab3c3", imageUrl: "./Image/uttar-pradesh.png",slug : "Uttar-Pradesh" },
    { name: "Uttarakhand", color: "#ffc078", imageUrl: "./Image/uttarakhand.png",slug : "Uttarakhand" },
    { name: "West Bengal", color: "#fcc2d7", imageUrl: "./Image/west-bengal.png",slug : "West-Bengal" },
  ];
  const navigate = useNavigate();
  return (
    <>
      {/* Heading Section */}
      <div
        className="text-center py-4"
        style={{
          backgroundColor: "#fff3e6",
          
          color: "#333",
        }}
      >
        <h2 className="fw-bold">All of our individual domains, organized by State</h2>
        <p className="text-muted">
          Our system has identified your location as <strong>Odisha</strong>. Please{" "}
          <a href="#" className="text-primary">
            Click Here
          </a>{" "}
          to access our dedicated <strong>Odisha</strong> Domain.
        </p>
        <p>OR</p>
        <p>You can choose any of your State from the list below.</p>
      </div>

      {/* State Boxes */}
      <div className="container"  >
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
          {statesData.map((state, index) => (
            <div key={index} className="col">
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                  height: "140px",
                  backgroundColor: state.color,
               // Background image applied
                  backgroundSize: "cover", // Ensures the image covers the div area
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents the image from repeating
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
               
               //onclick 
              >
                
                <img
                  src={state.imageUrl}
                  alt={state.name}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                    filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
                    
                  }}
                />
                <span className="fw-bold mt-2" style={{ fontSize: "14px" }}>
                  {state.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* Mobile App Section */}
      <section className="mob-app py-5" style={{ backgroundColor: "#812d35" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://dialurban.com/assets/user/images/mobile.png"
                alt="Mobile App"
                style={{ maxWidth: "70%" }}
              />
            </div>
            <div className="col-md-6" style={{ color: "#f8f9fa" }}>
              <div>
                <h2>
                  Looking for the Best Service Provider? <span>Get the App!</span>
                </h2>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "10px" }}>✔ Find nearby listings</li>
                  <li style={{ marginBottom: "10px" }}>✔ Easy service enquiry</li>
                  <li style={{ marginBottom: "10px" }}>✔ Listing reviews and ratings</li>
                  <li>✔ Manage your listings, enquiry, and reviews</li>
                </ul>
                <span>Click the button below to get our app from the Play Store.</span>
                <br />
                <br />
                <a href="https://play.google.com/store/apps/details?id=com.dialurban.app">
                  <img
                    src="https://dialurban.com/assets/user/images/playstore-white.png"
                    alt="Play Store"
                    style={{
                      maxWidth: "200px",
                      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mid;
