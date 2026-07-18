import "./About.css";
import aboutImg from "../../assets/about.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <div className="image-card">
          <img src={aboutImg} alt="Ronit Patil" />
        </div>
      </div>

      <div className="about-content">

        <span className="section-tag">ABOUT ME</span>

        <h2>Who Am I?</h2>

        <p>
          Hi, I'm <strong>Ronit Patil</strong>, a passionate MERN Stack Developer and an Electronics & Computer Engineering student who enjoys turning ideas into real-world web applications.
          My journey into programming began with curiosity about how websites and software work, and it has grown into a passion for building responsive, user-friendly, and scalable applications using the MERN Stack. I enjoy solving problems, writing clean code, and continuously improving my development skills through hands-on projects.
          Beyond web development, I'm excited about exploring Artificial Intelligence (AI), Machine Learning (ML), and emerging technologies. I believe that continuous learning is the key to growth, so I'm always eager to learn new tools, frameworks, and industry trends that help me become a better developer.
          Whether I'm building a full-stack application, learning a new technology, or tackling coding challenges, my goal is to create meaningful solutions that make a positive impact.
        </p>

        <div className="about-info">

          <div className="info-card">
            <h4>Education</h4>
            <p>B.E. Electronics & Computer Engineer (2023-2027)</p>
          </div>

          <div className="info-card">
            <h4>Skills</h4>
            <p>MERN Stack • Java • SQL • REST APIs</p>
          </div>

          <div className="info-card">
            <h4>Experience</h4>
            <p>Frontend & MERN Developer (AICTE)</p>
          </div>

          <div className="info-card">
            <h4>Learning</h4>
            <p>AI, Machine Learning & New Technologies</p>
          </div>

        </div>

        <a href="/resume.pdf" className="resume-btn">
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default About;