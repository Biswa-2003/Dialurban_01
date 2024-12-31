import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Story = () => {
  const stories = [
    {
      name: "Gaurav Sharma & Aayushee Sharma",
      message: "Thank you dialurban.com/Matrimony, found my life partner.",
      image: "./Image_02/Sucess_05.webp ",// Replace with actual image path
    },        
    {
      name: "Rajesh Mohapatra & Debashree Dash",
      message: "Thank you dialurban.com/Matrimony, found my life partner.",
      image: "./Image_02/Sucess_01.jpg ", // Replace with actual image path
    },
    {
      name: "Pradip Ray & Sunita Maharana",
      message: "Thank you dialurban.com/Matrimony, found my life partner.",
      image: "./Image_02/Sucess_02.jpg ", // Replace with actual image path
    },
    {
      name: "Sudhira Kumar Behera & Ritumayee Behera",
      message: "Thank you dialurban.com/Matrimony, found my life partner.",
      image: "./Image_02/Sucess_03.jpg ", // Replace with actual image path
    },
    {
      name: "Debaraj Biswal & Sinduja Senapati",
      message:
        "We got connected through Dialurban Matrimony app, liked each other and decided to forward things to...",
      image: "./Image_02/Sucess_04.jpg", // Replace with actual image path
    },
    {
      name: "Ujwaldweep Rath & Prajna Parimita Grahachary",
      message:
        "I was looking for a partner who will understand me and stand by me through all odds, and Dialurban M...",
      image: "./Image_02/Sucess_05.webp ", // Replace with actual image path
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#4267b2",
        minHeight: "100vh",
        padding: "30px 0",
      }}
    >
      <div className="container">
        <h3 className="text-center text-white fw-bold mb-5">
          Success Stories
        </h3>
        <div className="row g-4">
          {stories.map((story, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card shadow-sm border-0 rounded"
                style={{ height: "100%" }}
              >
                {/* Image */}
                <img
                  src={story.image}
                  className="card-img-top"
                  alt={story.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                {/* Card Body */}
                <div className="card-body text-center">
                  <h6 className="fw-bold text-primary">{story.name}</h6>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "14px" }}
                  >
                    {story.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;