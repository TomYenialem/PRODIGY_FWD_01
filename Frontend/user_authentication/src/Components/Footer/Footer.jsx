import React from "react";
import { FaCheck, FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid bg-warning text-dark">
      <section className="why-choose-us style-two pb-0">
        <div className="footer text-white p-5">
          <div className="row">
            {/* Why Choose Us Section */}
            <div className="col-lg-6">
              <div className="sec-title style-two">
                <h2>Why Choose Us</h2>
                <div className="text text-dark">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation heading towards.
                </div>
              </div>
              <div className="icon-box">
                <h4>
                  <span className="icon">
                    <FaCheck className="text-success me-2" />
                  </span>
                  Certified Expert Mechanics
                </h4>
              </div>
              <div className="icon-box">
                <h4>
                  <span className="icon">
                    <FaCheck className="text-success me-2" />
                  </span>
                  Fast And Quality Service
                </h4>
              </div>
              <div className="icon-box">
                <h4>
                  <span className="icon">
                    <FaCheck className="text-success me-2" />
                  </span>
                  Best Prices in Town
                </h4>
              </div>
              <div className="icon-box">
                <h4>
                  <span className="icon">
                    <FaCheck className="text-success me-2" />
                  </span>
                  Awarded Workshop
                </h4>
              </div>

              {/* Social Media Links */}
              <div className="mt-4">
                <h5>Connect with us:</h5>
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white"
                >
                  <FaTelegram size={28} />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            {/* Additional Services Section */}
            <div className="col-lg-6">
              <div className="sec-title style-two">
                <h2>Additional Services</h2>
              </div>
              <div className="row">
                <div className="col-md-5">{/* Image can be placed here */}</div>
                <div className="col-md-7">
                  <ul className="list">
                    {[
                      "General Auto Repair & Maintenance",
                      "Transmission Repair & Replacement",
                      "Tire Repair and Replacement",
                      "State Emissions Inspection",
                      "Brake Job / Brake Services",
                      "Electrical Diagnostics",
                      "Fuel System Repairs",
                      "Starting and Charging Repair",
                      "Steering and Suspension Work",
                      "Emission Repair Facility",
                      "Wheel Alignment",
                      "Computer Diagnostic Testing",
                    ].map((service, index) => (
                      <li key={index}>
                        <FaCheck className="text-success me-2" /> {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
