import React from "react";
import {
  FaCheckCircle,
  FaTelegram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid footer text-white py-5 ">
      <section className="footer-content">
        <div className="footer p-5">
          <div className="row">
            {/* Why Choose Us Section */}
            <div className="col-lg-6">
              <div className="sec-title">
                <h2 className="text-dark">Why Choose Me?</h2>
                <p>
                  As a Full Stack Web Developer, I specialize in creating
                  scalable, high-performance applications with modern
                  technologies. My focus is on building intuitive, responsive,
                  and efficient digital experiences.
                </p>
              </div>
              <div className="icon-box">
                <h4>
                  <FaCheckCircle className="text-dark me-2" />
                  Expertise in MERN Stack
                </h4>
              </div>
              <div className="icon-box">
                <h4>
                  <FaCheckCircle className="text-dark me-2" />
                  Optimized & Scalable Solutions
                </h4>
              </div>
              <div className="icon-box">
                <h4>
                  <FaCheckCircle className="text-dark me-2" />
                  Secure & Performance-Driven Code
                </h4>
              </div>
              <div className="icon-box">
                <h4>
                  <FaCheckCircle className="text-dark me-2" />
                  Continuous Learning & Innovation
                </h4>
              </div>

              {/* Social Media Links */}
              <div className="mt-4 mb-4">
                <h5>Connect with me:</h5>
                <a
                  href="https://t.me/Tom21gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-black"
                >
                  <FaTelegram size={28} />
                </a>
                <a
                  href="https://github.com/TomYenialem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-dark"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="http://www.linkedin.com/in/temesgen-yenialem-4a62272b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            {/* Additional Services Section */}
            <div className="col-lg-6  ">
              <div className="sec-title">
                <h2 className="text-dark">My Development Services</h2>
              </div>
              <ul className="list">
                {[
                  "Full-Stack Web Development",
                  "Custom Web Applications",
                  "E-commerce Platform Development",
                  "Admin Dashboard & CMS Solutions",
                  "Database Design & Optimization",
                  "RESTful & GraphQL API Development",
                  "Performance Optimization & Security",
                  "Responsive UI/UX Design",
                  "Real-Time Features with WebSockets",
                  "Deployment & Cloud Hosting Solutions",
                  "Code Reviews & Technical Consulting",
                  "Continuous Integration & DevOps",
                ].map((service, index) => (
                  <li key={index}>
                    <FaCheckCircle className="text-dark me-2" /> {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
