import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiJupyter } from "react-icons/si";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import mongo from "../../Assets/TechIcons/Mongo.svg";
import firebase from "../../Assets/TechIcons/Firebase.svg";
import chatgpt from "../../Assets/TechIcons/ChatGPT.svg";
import claude from "../../Assets/TechIcons/Claude.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"45px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={mongo} alt="MongoDB Compass" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB Compass</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter fontSize={"45px"} />
        <div className="tech-icons-text">Jupyter Notebook</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={firebase} alt="Firebase" className="tech-icon-images" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chatgpt} alt="ChatGPT" className="tech-icon-images" />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={claude} alt="Claude AI" className="tech-icon-images" />
        <div className="tech-icons-text">Claude AI</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
