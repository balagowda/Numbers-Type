import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Square = () => {
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

    function isSquareNumber(num) {
      const squareRoot = Math.sqrt(num);
      return Number.isInteger(squareRoot);
    }

    if (isSquareNumber(num)) {
      setMsg(`${num} is Square Number`);
    } else {
      setMsg(`${num} is Not Square Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Square Number:</h2>
          <h5>
            A square number is a non-negative integer that can be expressed as
            the product of an integer multiplied by itself. In other words, it
            is the result of squaring an integer
          </h5>
          <p>
            For example, 4, 9, 16, and 25 are square numbers because they can be
            obtained by multiplying 2x2, 3x3, 4x4, and 5x5, respectively.
          </p>
          <div className="data-description">
            <h6>
              To determine whether a number is a square number, you can follow
              the following approach:
            </h6>
            <br />
            <ul>
              <li>Take the square root of the given number.</li>
              <li>
                If the square root is an integer (with no decimal part), then
                the number is a square number. Otherwise, it is not.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Square Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Square
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

export default Square;
