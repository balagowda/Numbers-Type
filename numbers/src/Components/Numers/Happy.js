import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Happy = () => {
  const numRef = useRef();
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

    function isHappyNumber(num) {
      let seen = new Set();
    
      while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        let sum = 0;
        while (num > 0) {
          let digit = num % 10;
          sum += digit * digit;
          num = Math.floor(num / 10);
        }
        num = sum;
      }
    
      return num == 1;
    }
    if (isHappyNumber(num)) {
      setMsg(`${num} is Happy Number`);
    } else {
      setMsg(`${num} is Not Happy Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Happy Number:</h2>
          <h5>
            Happy numbers are positive integers that exhibit a particular
            behavior when iteratively replacing the number with the sum of the
            squares of its digits. This process is repeated until either the
            number becomes 1 or enters a cycle that does not include 1. If the
            resulting number is 1, the original number is considered a happy
            number. Otherwise, it is an unhappy number.
          </h5>

          <div className="data-description">
            <h6>To determine if a number is happy, follow these steps:</h6>
            <br />
            <ul>
              <li>
                Take the given number and break it down into its individual
                digits.
              </li>
              <li>Square each digit.</li>
              <li>Sum the squares of the digits.</li>
              <li>
                Repeat steps 1-3 with the resulting sum as the new number.
              </li>
              <li>
                Continue this process until either the number becomes 1 (a happy
                number) or a cycle is formed without reaching 1 (an unhappy
                number).
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Happy Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Happy
                </Card.Subtitle>
                <Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Control
                        type="number"
                        placeholder="Enter number"
                        ref={numRef}
                        required
                        onChange={hadleChange}
                      />
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

export default Happy;
