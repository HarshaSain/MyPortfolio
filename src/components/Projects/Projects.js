import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import banking from "../../Assets/Projects/chatify.png";
import resumeAI from "../../Assets/Projects/blog.png";
import shopNest from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banking}
              isBlog={false}
              title="Banking Transaction Backend System"
              description="Developed RESTful APIs for user registration, authentication, account management, and banking transactions. Implemented deposit, withdrawal, and balance management functionality with MongoDB. Added JWT-based authentication and authorization to secure user and transaction-related APIs. Designed MongoDB schemas using Mongoose and tested APIs using Postman."
              ghLink="https://github.com/HarshaSain/Banking-Transaction-backend-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeAI}
              isBlog={false}
              title="AI Resume Analyser & Interview Preparation"
              description="Built a MERN stack web application to help users analyze resumes and prepare for interviews. Developed the frontend using React.js and backend APIs using Node.js and Express.js, with MongoDB for storing application and user-related data. Implemented features for resume analysis and AI-assisted interview preparation."
              ghLink="https://github.com/HarshaSain/Advanced-genAI-mern-stack-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopNest}
              isBlog={false}
              title="ShopNest – Full-Stack E-Commerce Application"
              description="Developed a full-stack e-commerce application using the MERN stack. Built responsive user interfaces with React.js and implemented backend APIs using Node.js and Express.js. Integrated MongoDB for application data and worked with authentication, API integration, routing, and frontend-backend communication."
              ghLink="https://github.com/HarshaSain/MERN-E-Commerce-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
