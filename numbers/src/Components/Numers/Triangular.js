import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Triangular = () => {
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

    function isTriangularNumber(number) {
      const discriminant = 8 * number + 1;
      const squareRoot = Math.sqrt(discriminant);
      return squareRoot == Math.floor(squareRoot);
    }

    if (isTriangularNumber(num)) {
      setMsg(`${num} is Triangular Number`);
    } else {
      setMsg(`${num} is Not Triangular Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Triangular number:</h2>
          <h5>
            A triangular number is a number that can form an equilateral
            triangle when dots or objects are arranged in the shape of a
            triangle. The dots are typically arranged in rows, with each row
            having one more dot than the previous row. The number of dots
            required to form a triangular number can be calculated using a
            simple formula.
          </h5>
          <h6>
            The formula to find the nth triangular number is: T(n) = (n * (n +
            1)) / 2 <br />
            Here, T(n) represents the nth triangular number.
          </h6>
          <p>
            Example .Let's find the 6th triangular number: T(6) = (6 * (6 + 1))
            / 2 = (6 * 7) / 2 = 42 / 2 = 21 <br /> So, the 6th triangular number
            is 21. If you arrange 21 dots in the shape of an equilateral
            triangle, it will have 6 rows, with the first row having 1 dot, the
            second row having 2 dots, the third row having 3 dots, and so on
            until the sixth row having 6 dots.
          </p>
          <div className="data-description">
            <br />
            <ul>
              <li>
                The sum of the first n natural numbers is equal to the nth
                triangular number. For example, the sum of the first 6 natural
                numbers (1 + 2 + 3 + 4 + 5 + 6) is 21, which is the 6th
                triangular number.
              </li>
              <li>
                Triangular numbers can be represented by dots arranged in the
                shape of an equilateral triangle, hence the name "triangular"
                numbers.
              </li>
              <li>
                Triangular numbers are a subset of figurate numbers, which are
                numbers that can be represented geometrically.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Triangular Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Triangular
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
export default Triangular;
