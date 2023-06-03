import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./numers.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Prime = () => {
  const numRef = useRef();
  const [msg,setMsg] = useState("");

  const hadleChange = (e)=>{
      const val =e.target.value;
      if(val===""){
        setMsg("");
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = numRef.current.value;

    function isPrime(number) {
      if (number <= 1) {
        return false; 
      }

      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false; 
        }
      }
      return true; 
    }
    if(isPrime(num)){
      setMsg(`${num} is Prime Number`);
    }
    else{
      setMsg(`${num} is Not Prime Number`);
    }
  };

  return (
    <Container className="shadow">
      <div className="data-container p-3">
        <div className="data-detail">
          <h2>Prime Number:</h2>
          <h5>
            A prime number is a natural number greater than 1 that is divisible
            only by 1 and itself. In other words, a prime number has exactly two
            positive divisors: 1 and the number itself.
          </h5>
          <p>
            For example, the first few prime numbers are 2, 3, 5, 7, 11, 13, and
            so on. These numbers cannot be divided evenly by any other number
            except 1 and themselves.
          </p>
          <div className="data-description">
            <h6>
              Prime numbers have several interesting properties and play a
              crucial role in number theory and various areas of mathematics.{" "}
            </h6>
            <br />
            <ul>
              <li>
                <b>Prime Factorization:</b> Every positive integer greater than
                1 can be expressed uniquely as a product of prime numbers. This
                is known as prime factorization. For example, the prime
                factorization of 12 is 2 x 2 x 3.
              </li>
              <li>
                <b>Sieve of Eratosthenes:</b> It is an ancient algorithm used to
                find all prime numbers up to a given limit. The algorithm starts
                with a list of numbers and progressively eliminates multiples of
                prime numbers, leaving only the primes.
              </li>
              <li>
                <b>Prime Number Theorem:</b> The prime number theorem,
                formulated by mathematician Jacques Hadamard and Charles Jean de
                la Vallee-Poussin independently, provides an estimation of the
                number of primes less than a given value. It states that the
                number of primes less than or equal to n is approximately
                n/ln(n), where ln(n) denotes the natural logarithm of n.
              </li>
              <li>
                <b>Importance in Cryptography:</b> Prime numbers have
                significant applications in cryptography, especially in the
                field of public-key encryption algorithms like RSA. The security
                of these algorithms relies on the difficulty of factoring large
                composite numbers into their prime factors.
              </li>
              <li>
                <b>Largest Known Prime:</b> As of my knowledge cutoff in
                September 2021, the largest known prime number is a Mersenne
                prime, specifically 2^82,589,933 − 1. Prime numbers of this form
                (2^n − 1) are known as Mersenne primes, and they often hold
                records for being the largest known primes due to efficient
                primality testing algorithms for this form.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-check">
          <h3 className="text-center">Prime Checker</h3>
          <Container className="d-flex justify-content-center">
            <Card
              style={{ width: "80%" }}
              className="shadow-sm p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter the Number to Check The Prime
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
                <h4>
                  {msg}
                </h4>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Prime;
