import "./Hero.css";
import hero from "../../assets/hero.png";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">
        
        <h4>Hello, I'm</h4>

        <h1>Ronit Patil</h1>

        <h2>MERN Stack Developer</h2>

        <p>
          I build modern, responsive, and user-friendly web applications using the MERN Stack. I enjoy transforming ideas into real-world digital solutions through clean code and creative design.
        </p>

        <div className="buttons">

          <a href="#projects">
            View Projects
          </a>

          <a href="#contact">
            Contact Me
          </a>

        </div>

        <div className="hero-social">

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

      </div>

      <div className="hero-right">
        <img src={hero} alt="Ronit Patil" />
      </div>

    </section>
  );
}

export default Hero;