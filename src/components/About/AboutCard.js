import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kanav Chugh </span>
            from <span className="purple"> Alpharetta, Georgia, United States.</span>
            <br />
            <br />
             I am currently a <span className="purple">lead software engineer </span> for the <span className="purple">Ramblin' Rocket Club</span> where I design, fabricate, and
             program custom flight computers and the ground station for active control rockets. 
             Additionally, I am a researcher for Georgia Tech with experiences in sensor development, integration, and mechanical testing. 
            <br />
            <br />
            I have completed two internships with <span className="purple">Google</span> and <span className="purple">SpaceX</span>  where I have experience with consumer electronics automation and electromechanical testing. I am currently looking for an internship for Summer 2025, specifically in either robotics semiconductors, or/and embedded systems. 
            <br />
            <br />
            Apart from engineering and coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Kickboxing
            </li>
            
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
