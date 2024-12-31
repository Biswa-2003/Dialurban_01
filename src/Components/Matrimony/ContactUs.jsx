import React from 'react'
import MatroFooter from '../../MatriMony/MatroFooter';

 function ContactUs() {
  return (
    <>
    <div className="container mt-5">
      <h2 className="text-center mb-4">HOW CAN WE HELP YOU?</h2>
      <div className="card p-4">
        <form>
          <div className="row">
            {/* Full Name */}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Full Name"
                required
              />
            </div>

            {/* Subject */}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Your Mobile Number"
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Message */}
            <div className="col-md-6 mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Message"
                required
              ></textarea>
            </div>

            {/* Verification Code */}
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control me-3"
                  placeholder="Enter Verification Code"
                  required
                />
                <img
                  src="path-to-captcha-image" // Replace with your captcha image path
                  alt="Captcha"
                  style={{ height: "50px" }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-5">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <br />
    <br />
    <MatroFooter/>
    </>
  )
}
export default ContactUs;