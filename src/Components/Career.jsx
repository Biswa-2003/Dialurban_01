import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Header/Navbar";
import End from "../Footer/End";

const Career = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const jobOpenings = [
    {
      title: "Telecaller Marketing (Experience - 1+ year)",
      vacancies: 2,
      profile: [
        "Good communication skills",
        "Speaking Fluency in English and Hindi",
        "Minimum educational qualification- Graduation",
      ],
      responsibilities: ["Manage Clients through telephonic conversation"],
    },
    {
      title: "HR Manager (Experience - 2+ year)",
      vacancies: 1,
      profile: [
        "Experience in managing HR operations",
        "Strong communication and people management skills",
        "Bachelor's or Master's in HR Management",
      ],
      responsibilities: ["Handle recruitment, employee relations, and payroll"],
    },
  ];

  return (
    <>
    <br />
    <br />
    <br />
      <div className="container mt-5">
        {/* Introductory Section */}
        <h1 className="text-center mb-4">Dialurban Career</h1>
        <p className="text-justify">
          Managing Director of Dialurban welcomes you to MAXIMISE your passion,
          efforts, skills, knowledge and efficiency unlimited!
        </p>
        <h5 className="font-weight-bold">Life is a beautiful ride at Dialurban!</h5>
        <p className="text-justify">
          Career that takes you <strong>Miles</strong> and makes you{" "}
          <strong>Smile</strong>!
        </p>
        <p className="text-justify">
          Grab the opportunity and work with the thought leaders to revolutionize
          the e-commerce industry in India. Be a part of our team that is{" "}
          <strong className="text-success">Innovative</strong>,{" "}
          <strong className="text-danger">Passionate</strong>,{" "}
          <strong className="text-primary">Collaborative</strong> and{" "}
          <strong className="text-warning">Ambitious</strong>.
        </p>

        <h5 className="font-weight-bold">Why Dialurban?</h5>
        <p className="text-justify">
          Dialurban is a place where you learn, share, explore, experiment and
          enhance your talent and achievements. The company is having a unique
          service model for customers both B2C and B2B.
        </p>

        <h5 className="font-weight-bold">Our Culture & Team:</h5>
        <p className="text-justify">
          Group Photos (3-4) of official celebrations like New Year, birthday,
          picnic, etc.
        </p>
        <h5 className="text-primary font-weight-bold">Come, join us! We're hiring.</h5>
        <p className="text-justify">
          We’re looking for curious, passionate people with a desire to solve
          challenging business problems through innovative ways & principles.
          Please drop your Resume at:{" "}
          <a href="mailto:info@dialurban.com" className="text-primary">
            info@dialurban.com
          </a>
        </p>

        {/* Job Openings Section */}
        <div className="mt-5">
          {jobOpenings.map((job, index) => (
            <div key={index} className="mb-3 border">
              <div
                className="d-flex justify-content-between align-items-center p-3 text-white"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#ff7f0b",
                  fontWeight: "bold",
                }}
                onClick={() => toggleSection(index)}
              >
                <h6 className="mb-0">{job.title}</h6>
                <span>{expanded === index ? "-" : "+"}</span>
              </div>
              {expanded === index && (
                <div className="p-3">
                  <p>
                    <strong>Number of Vacancies:</strong> {job.vacancies}
                  </p>
                  <p>
                    <strong>Desired Profile:</strong>
                  </p>
                  <ul>
                    {job.profile.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Job Responsibilities:</strong>
                  </p>
                  <ul>
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-end">
                    <button
                      className="btn btn-warning text-white"
                      style={{ backgroundColor: "#ff7f0b" }}
                    >
                      APPLY FOR THIS POSITION
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <End />
    </>
  );
};

export default Career;