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
    <div className="clientWebsiteContainer">
      <Navbar />
      <div className="clientWebsiteContent cartPage">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
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
              <div className="cartPrimarySplitter mt-4"></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="cartItemHeader">
                <h1 className="cartItemHeaderTitle">Cart Total</h1>
                <div className="cartPrimarySplitter"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
