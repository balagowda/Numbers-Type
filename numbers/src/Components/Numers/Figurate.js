import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Figurate = () => {
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

    function generateTriangularNumbers(limit) {
      const triangularNumbers = [];
      for (let n = 1; n <= limit; n++) {
        const triangularNumber = (n * (n + 1)) / 2;
        triangularNumbers.push(triangularNumber);
      }
      return triangularNumbers;
    }

    const triangularNumbers = generateTriangularNumbers(num);

    setMsg(`Triangular Numbers for range ${num} are ${triangularNumbers} `);
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Figurate number:</h2>
          <h5>
            Figurate numbers are a class of numbers that can be arranged to form
            regular polygonal shapes. These shapes include triangles, squares,
            pentagons, hexagons, and so on. Each shape corresponds to a
            different type of figurate number.
          </h5>
          <h6>
            The general formula to calculate the nth figurate number of a given
            shape is: <br /> FigurateNumber(n) = (n * (a * (n - 1) + b)) / 2{" "}
            <br /> where 'a' and 'b' are constants that depend on the shape.
          </h6>
          <div className="data-description">
            <br />
            <ul>
              <li>
                <b> Triangular Numbers:</b> Triangular numbers are a type of
                figurate number that can form an equilateral triangle when
                represented as dots or objects. <br /> The formula to calculate
                the nth triangular number is: TriangularNumber(n) = (n * (n +
                1)) / 2 <br /> For example, the first few triangular numbers are
                1, 3, 6, 10, 15, and so on.
              </li>
              <li>
                <b> Square Numbers: </b>Square numbers are a type of figurate number
                that can form a square when represented as dots or objects.{" "}
                <br /> The formula to calculate the nth square number is:
                SquareNumber(n) = n^2 <br /> For example, the first few square
                numbers are 1, 4, 9, 16, 25, and so on.
              </li>
              <li>
                <b> Pentagonal Numbers:</b> Pentagonal numbers can be arranged to form a
                regular pentagon when represented as dots or objects. <br /> The
                formula to calculate the nth pentagonal number is:
                PentagonalNumber(n) = (n * (3n - 1)) / 2 <br /> For example, the
                first few pentagonal numbers are 1, 5, 12, 22, 35, and so on.
              </li>
              <li>
                <b> Hexagonal Numbers:</b> Hexagonal numbers can be arranged to form a
                regular hexagon when represented as dots or objects. <br /> The
                formula to calculate the nth hexagonal number is:
                HexagonalNumber(n) = n * (2n - 1) <br /> For example, the first
                few hexagonal numbers are 1, 6, 15, 28, 45, and so on.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Figurate Generator</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to generate Figurate number <br />
                  <p className="text-danger">
                    Note: here figurate numbers will generates for Triangular
                    Numbers.
                  </p>
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

export default Figurate;
