import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { Container, Row, Col, Form, FormGroup,Button } from "reactstrap";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  });
  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <input type="text" id="username" placeholder="Username" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="email" id="email" placeholder="Email" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" id="password" placeholder="Password" onChange={handleChange}/>
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">Register</Button>
                </Form>
                <p>Already have an account?<Link to="/register">Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
