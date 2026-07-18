import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h2>Ronit Patil</h2>
        <p>Electronics & Computer Engineer | MERN Stack Developer</p>
        <p>Building modern web applications with the MERN Stack while exploring AI, Machine Learning, and emerging technologies.</p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-social">

        <a
          href="https://github.com/RonitPatil2005"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/patilronit"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <hr />
      
      <p className="designed-by">Designed & Developed by <span>Ronit Patil</span></p>

      <p className="copyright">
        © 2026 Ronit Patil. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;