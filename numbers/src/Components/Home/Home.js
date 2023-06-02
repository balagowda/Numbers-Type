import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const collections = [
    "Prime number",
    "Perfect number",
    "Fibonacci numbers",
    "Happy number",
    "Palindromic number",
    "Square number",
    "Abundant number",
    "Deficient number",
    "Triangular number",
    "Narcissistic number",
    "Transcendental numbers",
    "Cyclic numbers",
    "Coprime numbers",
    "Amicable numbers",
    "Figurate numbers",
    "Weird numbers",
  ];

  return (
    <div className="sub-container p-2">
      {collections.map((item, i) => {
        const route = item.substring(0, item.indexOf(" "));
        return (
          <Link to={`/${route}`} style={{ textDecoration: "none" }} key={i}>
            <Card className="shadow m-3">
              <Card.Body>
                <Row>
                  <Col sm={8}>
                    <h5>{item}</h5>
                  </Col>
                  <Col sm={4} className="text-end">
                    <ArrowForwardIosIcon />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
