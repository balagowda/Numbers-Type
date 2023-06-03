import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Cyclic = () => {
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

    function isCyclicNumber(number) {
      const numberStr = String(number);
      const length = numberStr.length;
      let isCyclic = true;
    
      for (let i = 1; i <= length; i++) {
        const multipliedStr = String(number * i);
    
        if (
          Array.from(multipliedStr).sort().join('') !==
          Array.from(numberStr).sort().join('')
        ) {
          isCyclic = false;
          break;
        }
      }
    
      return isCyclic;
    }
    

    if (isCyclicNumber(num)) {
      setMsg(`${num} is Cyclic Number`);
    } else {
      setMsg(`${num} is Not Cyclic Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Cyclic number:</h2>
          <h5>
            A cyclic number, also known as a repetitive number or a circular
            number, is a type of number that, when multiplied by any positive
            integer, generates a cyclic permutation of its digits.
          </h5>
          <p>
            To better understand cyclic numbers, let's consider an example.
            Let's take the number 142857. If we multiply it by any positive
            integer, such as 2, we get: <br />
            142857 × 2 = 285714 <br />
            As you can see, the digits of the result (285714) are a cyclic
            permutation of the digits of the original number (142857). This
            property holds true for any positive integer multiplier.
          </p>
          <div className="data-description">
            <br />
            <ul>
              <li>
                Cyclic numbers have a repeating pattern of digits that cycles
                when multiplied by different positive integers.
              </li>
              <li>Cyclic numbers are always positive integers.</li>
              <li>
                The length of the cycle (the number of digits in the repeating
                pattern) depends on the number of digits in the original number
                and its factors.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Cyclic Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Cyclic
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

export default Cyclic;
