import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Fibonacci = () => {
  const numRef = useRef();
  const [msg, setMsg] = useState("");
  const [num, setNum] = useState("");

  const hadleChange = (e) => {
    const val = e.target.value;
    if (val === "") {
      setMsg("");
      setNum("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = numRef.current.value;
    let nums = [0, 1];

    function fibonacci(n) {
      if (n <= 1) {
        if (n == 0) {
          nums = [0];
        } else {
          nums = [0, 1];
        }
        return;
      }

      let prev = 0;
      let current = 1;

      for (let i = 2; i <= n; i++) {
        let next = prev + current;
        nums.push(next);
        prev = current;
        current = next;
      }
      return;
    }
    fibonacci(num);
    setMsg(`Numbers are ${nums}`);
    setNum(`Total ${nums.length} numbers`);
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Fibonacci Number:</h2>
          <h5>
            Fibonacci numbers are a sequence of numbers in which each number is
            the sum of the two preceding ones. The sequence starts with 0 and 1,
            and each subsequent number is found by adding the two numbers before
            it.
          </h5>
          <p>
            So, the sequence starts as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, and
            so on.
          </p>
          <div className="data-description">
            <h6>
              Fibonacci numbers have many interesting properties and
              applications in various fields, including mathematics, computer
              science, nature, and art.
            </h6>
            <br />
            <ul>
              <li>
                <b> Nature: </b>Fibonacci numbers and the related Fibonacci
                spiral appear in various natural phenomena, such as the
                arrangement of leaves on a stem, the branching of trees, the
                shape of seashells, and the spirals in sunflowers.
              </li>
              <li>
                <b> Golden Ratio:</b> The ratio between consecutive Fibonacci
                numbers tends to approach the golden ratio, approximately
                1.61803398875. The golden ratio has aesthetic appeal and is
                often considered visually pleasing. It has been used in art,
                architecture, and design.
              </li>
              <li>
                <b> Recurrence Relations:</b> The Fibonacci sequence can be
                represented by a recurrence relation, which means each number
                depends on the two previous numbers. This recurrence relation
                can be utilized in various algorithms and mathematical
                calculations.
              </li>
              <li>
                <b> Dynamic Programming: </b>Fibonacci numbers are commonly used
                in dynamic programming problems, where the solution of a problem
                is built using previously computed values. The Fibonacci
                sequence is a classic example of dynamic programming, as each
                Fibonacci number depends on the two preceding numbers.
              </li>
              <li>
                <b> Mathematical Properties:</b> Fibonacci numbers have
                intriguing mathematical properties and relationships. These
                properties include divisibility rules, parity properties, and
                connections to other number sequences and mathematical concepts.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Fibonacci Generator</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to generate fibonacci series
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
                <h4>{num}</h4>
                <h5>{msg}</h5>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Fibonacci;
