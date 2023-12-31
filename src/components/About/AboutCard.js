import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matteo Esposito Marroccella </span>
            from <span className="purple"> Verona, Italy</span>, living in <span className="purple">Munich, Germany.</span>
            <br /> I am a first year student pursuing a MSc in Informatics
             at Technische Universität München (TUM).
            <br />
            Additionally, I am currently employed as a software engineer at
            ATS Group.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cook
            </li>
            <li className="about-activity">
              <ImPointRight /> Work Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Doing the best to contribute to the pioneering of the tomorrow's society!"{" "}
          </p>
          <footer className="blockquote-footer">Matteo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
