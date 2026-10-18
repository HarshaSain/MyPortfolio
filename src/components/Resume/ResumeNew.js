import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import resumePdf from "../../Assets/Harsha_Sain_Resume.pdf";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Resume</strong>
        </h1>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumePdf}
            download="Harsha_Sain_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Col md={10} className="resume-left mx-auto">
            {/* Work Experience */}
            <h3 className="resume-title">Work Experience</h3>

            <div className="resume-item">
              <h5 className="resume-title">
                Associate Analyst | GlobalLogic
              </h5>
              <p>April 2026 – July 2026</p>
              <ul>
                <li>
                  Consistently met productivity and turnaround-time targets
                  on structured annotation tasks while working under time
                  pressure in a fast-paced, deadline-driven environment.
                </li>
                <li>
                  Reviewed and annotated data against defined quality
                  guidelines, performing quality checks to maintain accuracy
                  across high-volume structured datasets.
                </li>
                <li>
                  Worked on AI/ML evaluation workflows involving
                  natural-language instructions and robotic/AI model
                  outputs, applying structured, data-led analysis to assess
                  output quality.
                </li>
                <li>
                  Collaborated with cross-functional team members and
                  followed project-specific processes to meet delivery
                  targets in a team-based, process-driven setting.
                </li>
              </ul>
            </div>

            {/* Projects */}
            <h3 className="resume-title" style={{ marginTop: "20px" }}>
              Projects
            </h3>

            <div className="resume-item">
              <h5 className="resume-title">
                Sales Data Analysis & ETL Pipeline
              </h5>
              <p style={{ fontStyle: "italic" }}>
                Python | Pandas | NumPy | SQL | Matplotlib | ETL
              </p>
              <ul>
                <li>
                  Built a Python-based ETL pipeline to extract, clean, and
                  transform large volumes of raw sales data from CSV files,
                  handling missing values, duplicates, and inconsistent
                  formats.
                </li>
                <li>
                  Used Python and SQL to analyze sales trends, customer
                  activity, product performance, and revenue patterns,
                  translating large datasets into clear, actionable business
                  insights.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h5 className="resume-title">
                AI Resume Analyser & Interview Preparation
              </h5>
              <p style={{ fontStyle: "italic" }}>
                MERN Stack | AI | React.js | Node.js | Express.js | MongoDB
              </p>
              <ul>
                <li>
                  Built a full-stack web application applying an AI-first
                  approach to solve a real user problem — analyzing resumes
                  and generating AI-assisted interview preparation.
                </li>
              </ul>
              <p>
                Github:{" "}
                <a
                  href="https://github.com/HarshaSain/Advanced-genAI-mern-stack-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  Advanced-genAI-mern-stack-project
                </a>
              </p>
            </div>

            <div className="resume-item">
              <h5 className="resume-title">
                ShopNest – E-Commerce Application
              </h5>
              <p style={{ fontStyle: "italic" }}>
                MERN Stack | React.js | Node.js | Razorpay | Express.js |
                MongoDB
              </p>
              <ul>
                <li>
                  Developed a full-stack e-commerce application with
                  responsive React.js UI and Node.js/Express backend APIs,
                  implementing authentication, routing, and payment
                  integration.
                </li>
              </ul>
              <p>
                Github:{" "}
                <a
                  href="https://github.com/HarshaSain/MERN-E-Commerce-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  MERN-E-Commerce-App
                </a>
              </p>
            </div>

            {/* Technical Skills */}
            <h3 className="resume-title" style={{ marginTop: "20px" }}>
              Technical Skills
            </h3>

            <div className="resume-item">
              <p>
                <b className="purple">Data Analysis & SQL:</b> SQL, Python,
                Pandas, NumPy, Matplotlib, Data Cleaning, Data
                Transformation, ETL Concepts
              </p>
              <p>
                <b className="purple">AI & Problem Solving:</b> LLMs, Gen AI,
                Prompt Engineering, ML Basics
              </p>
              <p>
                <b className="purple">Database:</b> MongoDB, Mongoose, SQL,
                Database Design
              </p>
              <p>
                <b className="purple">Programming Languages:</b> Python,
                JavaScript, C++
              </p>
              <p>
                <b className="purple">Tools & Platforms:</b> Git, GitHub,
                Postman, VS Code, CI/CD Pipelines, Deployment Basics
              </p>
              <p>
                <b className="purple">Frontend:</b> React.js, HTML5, CSS3,
                Tailwind CSS, React Router
              </p>
              <p>
                <b className="purple">Backend:</b> Node.js, Express.js, REST
                APIs, JWT, bcrypt
              </p>
              <p>
                <b className="purple">Soft Skills:</b> Problem Solving,
                Communication, Team Collaboration, Adaptability, Time
                Management
              </p>
            </div>

            {/* Education */}
            <h3 className="resume-title" style={{ marginTop: "20px" }}>
              Education
            </h3>

            <div className="resume-item">
              <h5 className="resume-title">
                B.E. – Computer Science and Engineering
              </h5>
              <p>
                Chandigarh University, Mohali, India
                <br />
                2021 – 2025 · 7.2/10
              </p>
            </div>

            <div className="resume-item">
              <h5 className="resume-title">Senior Secondary (Class XII)</h5>
              <p>74%</p>
            </div>

            <div className="resume-item">
              <h5 className="resume-title">Secondary (Class X)</h5>
              <p>85%</p>
            </div>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingTop: "10px",
          }}
        >
          <Button
            variant="primary"
            href={resumePdf}
            download="Harsha_Sain_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
