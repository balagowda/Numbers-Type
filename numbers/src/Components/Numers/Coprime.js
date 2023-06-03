import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Coprime = () => {
  const numRef = useRef();
  const numRef1 = useRef();
  const [msg, setMsg] = useState("");

  const hadleChange = (e) => {
    const val = e.target.value;
    if (val === "") {
      setMsg("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = numRef.current.value;
    const num1 = numRef1.current.value;

    function gcd(a, b) {
      if (b === 0) {
        return a;
      }

      return gcd(b, a % b);
    }

    function areCoPrime(a, b) {
      const greatestCommonDivisor = gcd(a, b);
      return greatestCommonDivisor === 1;
    }

    if (areCoPrime(num, num1)) {
      setMsg(`${num} and ${num1} are Co-prime Numbers`);
    } else {
      setMsg(`${num} and ${num1} are Not Co-prime Numbers`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Co-prime Numbers:</h2>
          <h5>
            Co-prime numbers, also known as relatively prime or mutually prime
            numbers, are numbers that have no common positive integer greater
            than 1 as a divisor (except for 1). In other words, two numbers are
            co-prime if their greatest common divisor (GCD) is equal to 1.
          </h5>
          <p>
            Let's take the numbers 12 and 25. The factors of 12 are 1, 2, 3, 4,
            6, and 12, while the factors of 25 are 1, 5, and 25. The only
            positive integer that divides both 12 and 25 is 1, so their GCD is
            1. Therefore, 12 and 25 are co-prime numbers.
          </p>
          <div className="data-description">
            <br />
            <ul>
              <li>
                Any two consecutive numbers are always co-prime. For example, 6
                and 7, or 20 and 21, are co-prime numbers.
              </li>
              <li>
                Prime numbers are always co-prime to any other number except
                their multiples. For instance, 5 is co-prime with 12, 14, or 25,
                but not with 10 or 15.
              </li>
              <li>
                If two numbers are co-prime, their multiples are also co-prime.
                For example, if 4 and 9 are co-prime, then 8 and 18 are also
                co-prime.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Co-prime Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Numbers to Check The Co-prime
                </Card.Subtitle>
                <Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Row>
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Enter number 1"
                            ref={numRef}
                            required
                            onChange={hadleChange}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Enter number 2"
                            ref={numRef1}
                            required
                            onChange={hadleChange}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Text>
                <h4>{msg}</h4>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Coprime;
