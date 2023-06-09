import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Abundant = () => {
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

    function isAbundantNumber(number) {
      let sum = 0;
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }
      return sum > number;
    }

    if (isAbundantNumber(num)) {
      setMsg(`${num} is Abundant Number`);
    } else {
      setMsg(`${num} is Not Abundant Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Abundant number:</h2>
          <h5>
            An abundant number is a positive integer that is smaller than the
            sum of its proper divisors. In other words, the sum of the proper
            divisors (excluding the number itself) is greater than the number
            itself.
          </h5>
          <p>
            Example. Let's take the number 12. The divisors of 12 are 1, 2, 3,
            4, 6, and 12. The proper divisors are 1, 2, 3, 4, and 6 (excluding
            12). If we add up the proper divisors, we get 1 + 2 + 3 + 4 + 6 =
            16. Since 16 is greater than 12, we say that 12 is an abundant
            number.
          </p>
          <div className="data-description">
            <br />
            <ul>
              <li>
                Abundant numbers are always composite (i.e., not prime), as
                prime numbers have only two divisors (1 and the number itself),
                so the sum of their proper divisors is always 1.
              </li>
              <li>
                The abundance of a number can be measured by the abundance
                index, which is defined as the ratio of the sum of the proper
                divisors to the number itself. In the case of 12, the abundance
                index is 16/12 = 4/3, indicating that the sum of the proper
                divisors is 4/3 times the number itself.
              </li>
              <li>
                Abundant numbers can be classified further based on the
                abundance index. If the abundance index is greater than 2, the
                number is considered highly abundant. If the abundance index is
                between 1 and 2, it is considered moderately abundant.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Abundant Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Abundant
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

export default Abundant;
