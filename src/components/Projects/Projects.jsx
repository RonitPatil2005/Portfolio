import "./Projects.css";
import jobpilot from "../../assets/projects/jobpilot.png";
import wanderlust from "../../assets/projects/wanderlust.png";
import studyplanner from "../../assets/projects/smart_study_planner.png";
import simon from "../../assets/projects/simon_say_game.png";
import weather from "../../assets/projects/my_weather.png";

const projects = [
  {
    title: "JobPilot",
    image: jobpilot,
    description:
      "A centralized job portal that helps users search and discover jobs through a modern and responsive interface.",
    demo: "https://job-pilot-rust-delta.vercel.app/",
    github: "https://github.com/RonitPatil2005/JobPilot",
    featured: true,
  },
  {
    title: "Wanderlust",
    image: wanderlust,
    description:
      "A full-stack travel accommodation platform where users can explore, create and manage property listings.",
    demo: "https://wanderlust-rnqp.onrender.com/listings",
    github: "https://github.com/RonitPatil2005/Wanderlust",
  },
  {
    title: "Smart Study Planner",
    image: studyplanner,
    description:
      "A responsive study planner that helps students organize study schedules and export plans as PDF.",
    demo: "https://ronitpatil2005.github.io/Smart-Study-Planner/",
    github: "https://github.com/RonitPatil2005/Smart-Study-Planner",
  },
  {
    title: "Simon Say Game",
    image: simon,
    description:
      "A JavaScript memory game that challenges users to repeat increasingly difficult color sequences.",
    demo: "https://ronitpatil2005.github.io/Simon-Say-Game/",
    github: "https://github.com/RonitPatil2005/Simon-Say-Game",
  },
  {
    title: "Weather App",
    image: weather,
    description:
      "A weather application that displays live weather information with a simple and responsive interface.",
    demo: "https://myweather26.netlify.app/",
    github: "https://github.com/RonitPatil2005/WeatherApp",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="project-heading">
        <span>MY WORK</span>

        <h2>Projects</h2>

        <p>
          A collection of web applications that showcase my skills in full-stack development, problem-solving, and creating user-friendly digital experiences.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-box">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Projects Button */}
      <div className="more-projects">
        <a
          href="https://github.com/RonitPatil2005"
          target="_blank"
          rel="noopener noreferrer"
          className="more-btn"
        >
          View More Projects →
        </a>
      </div>
    </section>
  );
}

export default Projects;