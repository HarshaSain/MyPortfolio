import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Developer passionate about turning ideas into
              practical, user-friendly applications. I enjoy learning new
              technologies, building projects, and understanding how
              different parts of a software system work together.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript, C++, SQL, React.js, Node.js, Express.js,
                  and MongoDB{" "}
                </b>
              </i>
              — with hands-on experience in MERN stack development, backend
              APIs, databases, and data analysis.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Backend Development, Full-Stack
                  Development,{" "}
                </b>
              </i>
              along with exploring
              <i>
                <b className="purple"> AI-powered applications </b>
              </i>
              and
              <i>
                <b className="purple"> Data/Analytics solutions</b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js, Node.js, Express.js, </b>
              <i>
                <b className="purple">MongoDB</b>, and{" "}
                <b className="purple">Python</b>,
              </i>{" "}
              while continuously improving my skills in DSA, SQL, APIs, and
              software development practices.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
