import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Deficient = () => {
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

    function isDeficientNumber(number) {
      let sum = 0;
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }
      return sum < number;
    }
    

    if (isDeficientNumber(num)) {
      setMsg(`${num} is Deficient Number`);
    } else {
      setMsg(`${num} is Not Deficient Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Deficient number:</h2>
          <h5>
            A deficient number is a positive integer where the sum of its proper
            divisors is less than the number itself. In other words, the sum of
            the divisors (excluding the number itself) is smaller than the
            number.
          </h5>
          <p>
            Example. Let's take the number 16. The divisors of 16 are 1, 2, 4,
            8, and 16. The proper divisors are 1, 2, 4, and 8 (excluding 16). If
            we add up the proper divisors, we get 1 + 2 + 4 + 8 = 15. Since 15
            is less than 16, we say that 16 is a deficient number.
          </p>
          <div className="data-description">
            <br />
            <ul>
              <li>
                Deficient numbers can be prime or composite. For example, both 8
                (composite) and 11 (prime) are deficient numbers.
              </li>
              <li>
                Deficient numbers can be consecutive. For instance, 1 is
                deficient since it has no proper divisors, and 2 is also
                deficient since its only proper divisor is 1. This pattern
                continues with the deficient numbers 3, 4, 5, and so on.
              </li>
              <li>
                Unlike abundant numbers, deficient numbers do not have a
                specific classification based on a ratio or index.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Deficient Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Deficient
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

export default Deficient;
