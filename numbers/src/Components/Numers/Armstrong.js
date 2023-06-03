import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Armstrong = () => {
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

    function isArmstrongNumber(number) {
      let num = number;
      let sum = 0;
      let numOfDigits = String(number).length;
    
      while (num > 0) {
        let lastDigit = num % 10;
        sum += Math.pow(lastDigit, numOfDigits);
        num = Math.floor(num / 10);
      }
    
      return sum == number;
    }

    if (isArmstrongNumber(num)) {
      setMsg(`${num} is Armstrong Number`);
    } else {
      setMsg(`${num} is Not Armstrong Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Armstrong number:</h2>
          <h5>
            A Armstrong number, also known as an number or a Narcissistic number
            pluperfect digital invariant, is a number that is equal to the sum
            of its own digits, each raised to the power of the number of digits.
          </h5>
          <h6>
            In general, for an n-digit number x, if the sum of the digits of x,
            each raised to the power of n, equals x itself, then x is a
            armstrong number.
          </h6>
          <p>
            Example. Let's take the number 153. The number of digits in 153 is
            3. <br />
            Each digit raised to the power of 3 (the number of digits) is: 1^3 +
            5^3 + 3^3 = 1 + 125 + 27 = 153 <br />
            As you can see, the sum of the digits raised to the power of 3 is
            equal to the original number, 153. Therefore, 153 is a armstrong
            number.
          </p>
          <div className="data-description">
            <br />
            <ul>
              <li>Armstrong numbers are always positive integers.</li>
              <li>Armstrong numbers can have varying numbers of digits.</li>
              <li>
                The smallest armstrong number is 1, as 1 raised to any power
                is still 1.
              </li>
              <li>
              Armstrong numbers can be found in different number bases. The
                concept of armstrong numbers is not limited to base 10.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Armstrong Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Armstrong
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

export default Armstrong;
