import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Transcendental = () => {
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

    function approximatePi(iterations) {
      let count = 0;

      for (let i = 0; i < iterations; i++) {
        const x = Math.random();
        const y = Math.random();
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 1) {
          count++;
        }
      }

      const pi = 4 * (count / iterations);
      return pi;
    }

    var precision = approximatePi(num);

    setMsg(`Pie is precised to ${precision} for ${num} iteration`);
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Transcendental number:</h2>
          <h5>
            A transcendental number is a type of real number that is not a
            solution to any non-zero polynomial equation with integer
            coefficients. In other words, a transcendental number cannot be
            expressed as the root of a polynomial equation.
          </h5>
          <h6>
            Transcendental numbers are different from algebraic numbers, which
            are solutions to polynomial equations. <br /> For example, the
            square root of 2 (√2) is an algebraic number because it is a
            solution to the equation x^2 - 2 = 0. <br /> On the other hand, the
            number π (pi) and the natural logarithm base e are examples of
            transcendental numbers.
          </h6>

          <div className="data-description">
            <br />
            <ul>
              <li>
                Transcendental numbers are infinite and non-repeating decimals.
                They have an infinite number of digits after the decimal point
                without any repeating patterns.
              </li>
              <li>
                Transcendental numbers are not expressible as fractions or
                ratios of integers. They are irrational numbers.
              </li>
              <li>
                Transcendental numbers have been proven to exist, but their
                exact values are often difficult to determine.
              </li>
              <li>
                The set of transcendental numbers is uncountably infinite,
                meaning there are infinitely many transcendental numbers.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Transcendental Checker</h3>
          <Container className="d-flex flex-column justify-content-center">
            <h6>
              Transcendental numbers are defined as numbers that are not
              solutions to algebraic equations with integer coefficients.
              However, here the method to approximate transcendental numbers to
              a desired precision.
            </h6>

            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number of Iteration to find Precision <br />
                  <h6 className="text-danger">
                    Note: Result is based on Pi method precision
                  </h6>
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

export default Transcendental;
