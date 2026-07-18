import "./Contact.css";

import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt,
    FaDownload,
} from "react-icons/fa";

function Contact() {
    return (
        <section className="contact" id="contact">

            <div className="contact-heading">

                <span>CONTACT</span>

                <h2>Get In Touch</h2>

                <p>
                    Have an internship opportunity, project, or just want to
                    connect? Feel free to reach out.
                </p>

            </div>

            <div className="contact-grid">

                {/* Email */}
                <div className="contact-card static-card">
                    <FaEnvelope className="icon" />
                    <h3>Email</h3>
                    <p className="email-text">
                        ronitrpatil16<span>@</span>gmail.com
                    </p>
                </div>

                {/* LinkedIn */}

                <a
                    href="https://www.linkedin.com/in/patilronit"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                >
                    <FaLinkedin className="icon" />

                    <h3>LinkedIn</h3>

                    <p>Connect with me</p>
                </a>

                {/* GitHub */}

                <a
                    href="https://github.com/RonitPatil2005"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                >
                    <FaGithub className="icon" />

                    <h3>GitHub</h3>

                    <p>View my repositories</p>
                </a>

                {/* Location */}
                <div className="contact-card static-card">

                    <FaMapMarkerAlt className="icon" />

                    <h3>Location</h3>

                    <p>Mumbai, Maharashtra</p>

                </div>


            </div>

        </section>
    );
}

export default Contact;