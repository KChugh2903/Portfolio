import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  CgCPlusPlus 
} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiMongodb,
  DiMysql,
  DiAngularSimple,
  DiRust,
  DiCode
} from "react-icons/di";
import {
  SiArm,
  SiC
} from "react-icons/si";

// Style specifically for the text labels
const labelStyle = {
  fontSize: '1.25rem',  // Makes the text very small
  display: 'block',
  marginTop: '2px'
};


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRust />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
        <span style={labelStyle}>Verilog</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
        <span style={labelStyle}>SystemVerilog</span>
      </Col>
    </Row>
  );
}

export default Techstack;