"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../global.css";
import "./signin.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic or form submission logic here
    console.log(formData);
  };

  return (
    <div className="clientWebsiteContainer">
      <div className="SIlogoTopContainer">
        <div className="SIlogoTop"></div>
        <div className="SIlogoTopOverlay"></div>
      </div>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="signInFormContainer">
            <div className="signInFormContainerWrapper">
              <div className="signInTopGroup">
                <h3>Welcome!</h3>
                <h5>Let&apos;s create your account to get started</h5>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group
                      controlId="formFirstName"
                      className="signInFormItem"
                    >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      controlId="formLastName"
                      className="signInFormItem"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Form.Group controlId="formEmail" className="signInFormItem">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formPassword"
                    className="signInFormItem"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formConfirmPassword"
                    className="signInFormItem"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formSubscribe"
                    className="signInFormItem"
                  >
                    <Form.Check
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                      label="Subscribe to newsletter"
                    />
                  </Form.Group>

                  <div>
                    <Button variant="dark" type="submit" className="mr-2">
                      Sign Up
                    </Button>
                    <Link href="/signin" passHref legacyBehavior>
                      <Button variant="outline-dark" as="a">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                </Row>
              </Form>
              <div className="SignInBottomGroup">
                <h5>or sign up with</h5>
                <button className="SignInBtnOther mb-2">
                  <div className="SignInBtnOtherIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M19.4316 8.19808C19.5492 8.86681 19.6043 9.55023 19.6043 10.23C19.6043 13.2723 18.5167 15.8443 16.6245 17.586H16.6281C14.971 19.1145 12.6966 20 9.99967 20C6.21879 20 2.76125 17.8689 1.06372 14.4922C-0.354571 11.6666 -0.354573 8.33771 1.06371 5.51215C2.76125 2.13178 6.21879 0.000673866 9.99967 0.000673866C12.4835 -0.0287207 14.8828 0.904557 16.6906 2.60209L13.8357 5.45704C12.8032 4.47232 11.4253 3.93587 9.99967 3.95792C7.3909 3.95792 5.17528 5.71792 4.3853 8.08785C3.96643 9.32977 3.96643 10.6746 4.3853 11.9165H4.38898C5.18263 14.2828 7.39457 16.0428 10.0033 16.0428C11.3518 16.0428 12.5092 15.6974 13.4058 15.0874H13.4021C14.4566 14.3893 15.1768 13.2907 15.4009 12.0488H9.99966V8.19808H19.4316Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="SignInBtnOtherText">Continue with Google</div>
                </button>
                <button className="SignInBtnOther">
                  <div className="SignInBtnOtherIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M19.9992 10.0605C19.9992 4.50371 15.5218 -0.000976562 9.99863 -0.000976562C4.47546 -0.000976562 -0.00195312 4.50371 -0.00195312 10.0605C-0.00195312 15.0825 3.65512 19.245 8.43604 19.9998V12.9689H5.89683V10.0605H8.43604V7.84386C8.43604 5.32219 9.92906 3.9293 12.2134 3.9293C13.3076 3.9293 14.452 4.12581 14.452 4.12581V6.60189H13.191C11.9486 6.60189 11.5612 7.37747 11.5612 8.17315V10.0605H14.3348L13.8914 12.9689H11.5612V19.9998C16.3422 19.245 19.9992 15.0825 19.9992 10.0605Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="SignInBtnOtherText">
                    Continue with Facebook
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="signInImageContainer">
            <div className="signInImage"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
