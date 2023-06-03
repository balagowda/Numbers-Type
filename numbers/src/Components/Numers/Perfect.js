import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Perfect = () => {
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

    function isPerfectNumber(number) {
      let sum = 0;

      for (let i = 1; i < number; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }

      return (sum == number);
    }

    if (isPerfectNumber(num)) {
      setMsg(`${num} is Perfect Number`);
    } else {
      setMsg(`${num} is Not Perfect Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Perfect Number:</h2>
          <h5>
            A perfect number is a positive integer that is equal to the sum of
            its proper divisors. Proper divisors of a number are all the
            divisors of that number except for the number itself. In other
            words, a perfect number is a number whose proper divisors add up to
            the number itself.
          </h5>
          <p>
            For example, the number 6 is a perfect number. The proper divisors
            of 6 are 1, 2, and 3. If we add them up (1 + 2 + 3), we get 6, which
            is the number itself. Therefore, 6 is a perfect number.
          </p>
          <div className="data-description">
            <h6>
              Perfect numbers have been studied since ancient times. The ancient
              Greek mathematicians, such as Euclid and Pythagoras, were among
              the first to explore perfect numbers. They discovered that the
              first four perfect numbers are 6, 28, 496, and 8128.
            </h6>
            <br />
            <p>
              It is important to note that perfect numbers are quite rare. As of
              now, only 51 perfect numbers have been discovered, and all of them
              are even. This means that they can be divided by 2 without leaving
              a remainder. However, not all even numbers are perfect. For
              example, 8 is an even number, but it is not perfect because the
              sum of its proper divisors (1 + 2 + 4) is 7, which is not equal to
              8.
            </p>
            <p>
              Perfect numbers have fascinated mathematicians for centuries due
              to their intriguing properties. One interesting property is that
              every even perfect number can be expressed in the form 2^(p-1) *
              (2^p - 1), where p and (2^p - 1) are both prime numbers. This
              formula allows researchers to find larger perfect numbers by
              finding prime numbers that satisfy the equation.
            </p>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Perfect Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Perfect
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

export default Perfect;
