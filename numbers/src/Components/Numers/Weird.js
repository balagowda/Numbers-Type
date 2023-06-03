import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Weird = () => {
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

    function sumProperDivisors(number) {
      let sum = 0;
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }
      return sum;
    }

    function isAbundant(number) {
      const sum = sumProperDivisors(number);
      return sum > number;
    }

    function isSemiperfectHelper(number, divisors, index, currentSum) {
      if (currentSum === number) {
        return true;
      }
      if (currentSum > number || index >= divisors.length) {
        return false;
      }
      return (
        isSemiperfectHelper(number, divisors, index + 1, currentSum) ||
        isSemiperfectHelper(
          number,
          divisors,
          index + 1,
          currentSum + divisors[index]
        )
      );
    }

    function isSemiperfect(number) {
      const divisors = [];
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
          divisors.push(i);
        }
      }
      return isSemiperfectHelper(number, divisors, 0, 0);
    }

    function isWeird(number) {
      return isAbundant(number) && !isSemiperfect(number);
    }

    if (isWeird(num)) {
      setMsg(`${num} is Weird Number`);
    } else {
      setMsg(`${num} is Not Weird Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Weird number:</h2>
          <h5>
            A weird number is a positive integer that has the following
            properties:
            <ol>
              <li>
                It is abundant: The sum of its proper divisors (excluding the
                number itself) is greater than the number.
              </li>
              <li>
                It is not a semiperfect number: It cannot be expressed as the
                sum of any subset of its proper divisors.
              </li>
            </ol>
          </h5>
          <p>
            Let's take the number 70. The proper divisors of 70 are 1, 2, 5, 7,
            10, 14, and 35. The sum of these proper divisors is 1 + 2 + 5 + 7 +
            10 + 14 + 35 = 74, which is greater than 70. Therefore, 70 is an
            abundant number.
            <br />
            Now, we need to check if 70 is a semiperfect number. A semiperfect
            number is a number that can be expressed as the sum of some (or all)
            of its proper divisors. In the case of 70, it cannot be expressed as
            the sum of any subset of its proper divisors. Therefore, 70 is not a
            semiperfect number.
            <br />
            <h6>Hence, 70 satisfies both conditions and is classified as a weird
            number.</h6>
          </p>

          <div className="data-description">
            <br />
            <ul>
              <li>
                Weird numbers are a subset of abundant numbers. All weird
                numbers are abundant, but not all abundant numbers are weird.
              </li>
              <li>
                Weird numbers exhibit interesting properties in terms of their
                divisors and factorizations, making them a subject of study in
                number theory.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Weird Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Weird
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

export default Weird;
