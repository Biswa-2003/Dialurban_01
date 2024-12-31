import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Mid from '../Footer/Mid';
import End from '../Footer/End';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const cardsData = [
    { title: "Dialurban Job", iconClass: "fas fa-briefcase", color: "#007bff", onClick: () => console.log("Job clicked") },
    { title: "Dialurban Property", iconClass: "fas fa-home", color: "#ffc107", onClick: () => console.log("Property clicked") },
    { title: "Dialurban Matrimony", iconClass: "fas fa-heart", color: "#ff5722", onClick: () => navigate('/home1')},
    { title: "Dialurban Deal", iconClass: "fas fa-handshake", color: "#9c27b0", onClick: () => console.log("Deal clicked") },
    { title: "Dialurban Services", iconClass: "fas fa-cogs", color: "#4caf50", onClick: () => console.log("Services clicked") },
  ];

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
        style={{ marginTop: "120px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./Image_02/Banner_1.jpg"
              alt="First slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./Image_02/Banner_2.jpg"
              alt="Second slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./Image/Img_02.jpg"
              alt="Third slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Cards Section Over Carousel */}
        <div
          className="position-absolute w-100"
          style={{
            bottom: "-80px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="card text-center p-3"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "white",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
              }}
              onClick={card.onClick}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: card.color,
                  borderRadius: "50%",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i
                  className={card.iconClass}
                  style={{ color: "white", fontSize: "32px" }}
                ></i>
              </div>
              <h6 className="mt-3" style={{ fontSize: "16px" }}>
                {card.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Mid />
      <End />
    </>
  );
}

export default Home;
