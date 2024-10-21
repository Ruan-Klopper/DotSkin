// Cart page
"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../global.css";
import "./cart.css";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
});

const CartProductItem = () => {
  return (
    <div className="CPIbody">
      <div className="flex">
        <div
          className="PCIimage mr-3"
          style={{ backgroundImage: "url(/sampleImages/image.png)" }}
        ></div>
        <div className="PCIproductDetails">
          <p className="mb-1">Product:</p>
          <h5 className="mb-0 font-bold">Body Neroli</h5>
          <h6>R320.00</h6>
        </div>
      </div>
      <div className="mr-2">
        <p className="mb-1">Quantity: 2</p>
        <div className="cartPrimarySplitter mb-1"></div>
        <p className="mb-0">Total</p>
        <h5 className="font-bold">R480.00</h5>
      </div>
    </div>
  );
};

export default function ProductsCatalog() {
  return (
    <div
      className="clientWebsiteContainer"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <Navbar />
      <div className="clientWebsiteContent cartPage">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-5">
              <div className="cartItemGroup mb-3">
                <div className="cartItemHeader mb-3">
                  <h1 className="cartItemHeaderTitle">Your Cart</h1>
                  <div className="cartPrimarySplitter"></div>
                </div>
                <div>
                  <CartProductItem />
                  <CartProductItem />
                  <CartProductItem />
                  <CartProductItem />
                </div>
                <Button variant="dark" className="cartFinalButton">
                  Clear cart
                </Button>
              </div>
              <div className="cartItemGroup">
                <Form.Group controlId="formEmail" className="signInFormItem">
                  <Form.Label>Got a coupon</Form.Label>
                  <div className="flex">
                    <Form.Control
                      type="text"
                      name="text"
                      placeholder="Coupon Code"
                      required
                      className="mr-3"
                    />
                    <Button variant="dark">Submit</Button>
                  </div>
                </Form.Group>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="cartItemGroup mb-5">
                <div className="cartItemHeader">
                  <h1 className="cartItemHeaderTitle">Cart Total</h1>
                  <div className="cartPrimarySplitter mb-3"></div>
                  <div className="cartTotalTableContainer">
                    <table className="cartTotalTable">
                      <tbody>
                        <tr className="cartTabletread">
                          <td className="cartTableItemLeft">Subtotal:</td>
                          <td style={{ fontWeight: "Bold" }}>R1010.00</td>
                        </tr>
                        <tr>
                          <td className="cartTableItemLeft">Discount:</td>
                          <td style={{ fontWeight: "Bold" }}>R0.00</td>
                        </tr>
                        <tr>
                          <td className="cartTableItemLeft">Shipping:</td>
                          <td style={{ fontWeight: "Bold" }}>R100.00</td>
                        </tr>
                        <tr>
                          <td className="cartTableItemLeft"></td>
                          <td style={{ fontWeight: "Bold" }}>
                            <p className="font-light mb-0 mt-1 text-sm">
                              Shipping to
                            </p>
                            <p className="text-sm mb-0">
                              1446 Cunningham Avenue Waverley Pretoria
                            </p>
                            <p className="text-sm mb-0">
                              Gauteng, South Africa 0135
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cartPrimarySplitter mt-3 mb-3"></div>
                  <table className="cartTotalTable">
                    <tbody>
                      <tr>
                        <td className="cartTableItemLeft">Total:</td>
                        <td style={{ fontWeight: "Bold" }}>R100.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cartBottomButtonGroup mt-4">
                    <Button variant="dark" className="cartFinalButton">
                      Proceed to checkout
                    </Button>
                    <Button variant="outline-dark" className="cartFinalButton">
                      Continue shopping
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
