import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Harsha Sain</span> from{" "}
            <span className="purple">Sri Ganganagar, Rajasthan, India</span>.
            <br />
            I’m a <span className="purple">Software Developer</span> and a{" "}
            <span className="purple">2025 Computer Science graduate</span>{" "}
            from <span className="purple">Chandigarh University</span>. I’m
            currently exploring opportunities in the tech industry and
            working on improving my skills through real-world projects.
            <br />
            <br />
            I enjoy working with{" "}
            <span className="purple">
              Python, JavaScript, React.js, Node.js, Express.js, MongoDB, and
              SQL
            </span>
            , and I’m particularly interested in{" "}
            <span className="purple">
              Full-Stack Development, Backend Development, AI-powered
              applications, and Data Analytics
            </span>
            .
            <br />
            <br />
            Outside of coding, I enjoy activities that help me learn, stay
            creative, and explore new things:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building and experimenting with projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies and improving my
              problem-solving skills 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and experiences 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games and taking some time to relax 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and keep improving."{" "}
          </p>
          <footer className="blockquote-footer">Harsha Sain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
