import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Amicable = () => {
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

    function sumProperDivisors(number) {
      let sum = 0;
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }
      return sum;
    }

    function areAmicableNumbers(number1, number2) {
      const sum1 = sumProperDivisors(number1);
      const sum2 = sumProperDivisors(number2);
      return sum1 === number2 && sum2 === number1;
    }

    function findAmicableNumbersInRange(start, end) {
      const amicableNumbers = [];
      for (let i = start; i <= end; i++) {
        for (let j = i + 1; j <= end; j++) {
          if (areAmicableNumbers(i, j)) {
            amicableNumbers.push([i, j]);
          }
        }
      }
      return amicableNumbers;
    }

    const amicablePairs = findAmicableNumbersInRange(num, num1);
  
    setMsg(
      `The AmicablePairs b/w ${num} and ${num1} are ${
        amicablePairs.length ? `(`+amicablePairs+`)` : `NoPairs`
      }`
    );
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Amicable Numbers:</h2>
          <h5>
            Amicable numbers are a pair of numbers in which the sum of the
            proper divisors (positive divisors excluding the number itself) of
            one number equals the other number, and vice versa. <br /> In other
            words, if the sum of the proper divisors of number A is equal to
            number B, and the sum of the proper divisors of number B is equal to
            number A, then A and B are considered amicable numbers.
          </h5>
          <p>
            Let's take the pair of numbers (220, 284). <br /> The proper
            divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, and 110.
            Their sum is 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 =
            284. <br /> Similarly, the proper divisors of 284 are 1, 2, 4, 71,
            and 142, and their sum is 1 + 2 + 4 + 71 + 142 = 220. <br /> Hence,
            220 and 284 form an amicable pair.
          </p>
          <div className="data-description">
            <br />
            <ul>
              <li>Amicable numbers are always greater than 1.</li>
              <li>
                The sum of the proper divisors of a number is also known as the
                aliquot sum.
              </li>
              <li>
                Amicable numbers can be classified as a proper subset of a
                larger class called sociable numbers, which are chains of
                numbers where each number in the chain has an aliquot sum
                leading back to the initial number.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Amicable Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Start and End Range for Amicablity
                </Card.Subtitle>
                <Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Row>
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Enter start range"
                            ref={numRef}
                            required
                            onChange={hadleChange}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Enter end range"
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

export default Amicable;
