import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Palindromic = () => {
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

    function isPalindromeNumber(num) {
      const str = String(num);
      const reversedStr = str.split("").reverse().join("");
      return str == reversedStr;
    }

    if (isPalindromeNumber(num)) {
      setMsg(`${num} is Palindrome Number`);
    } else {
      setMsg(`${num} is Not Palindrome Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Palindrome Number:</h2>
          <h5>
            A palindrome number is a number that remains the same when its
            digits are reversed. In other words, a palindrome number reads the
            same forward and backward
          </h5>
          <p>For example, 121, 34543, and 12321 are all palindrome numbers.</p>
          <div className="data-description">
            <h6>
              To determine whether a number is a palindrome, you can follow the
              following steps:
            </h6>
            <br />
            <ul>
              <li>Convert the number to a string.</li>
              <li>Reverse the string.</li>
              <li>Compare the reversed string with the original string.</li>
              <li>
                If the reversed string is equal to the original string, then the
                number is a palindrome. Otherwise, it is not.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Palindrome Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Palindrome
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

export default Palindromic;
