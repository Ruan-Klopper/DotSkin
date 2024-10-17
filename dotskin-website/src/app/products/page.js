// Poducts Catalog
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "../global.css";
import "./productsCatalog.css";
import Link from "next/link";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
import ProductCard from "@/components/ProductCard/ProductCard";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
});

const ProductCardWrapper = ({ title, rating, price, image, cardType }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={3}>
      <div className="mb-8 flex justify-center">
        <ProductCard
          title={title}
          rating={rating}
          price={price}
          image={image}
          cardType={cardType}
        />
      </div>
    </Col>
  );
};

const PCPSideNav = () => {
  return (
    <div className="PLCsideBarContent">
      {/* Search Bar */}
      <h5>Search</h5>
      <Form className="mb-3">
        <Form.Control type="text" placeholder="Search products..." />
      </Form>

      {/* Reset and Search Buttons */}
      <div className="d-flex mb-3">
        <Button variant="dark mr-2">Search</Button>
        <Button variant="outline-dark">Reset</Button>
      </div>

      <h5 className="mt-5">Filters</h5>
      {/* Accordion 1: Skin Type */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Skin Type</Accordion.Header>
          <Accordion.Body>
            <Form>
              {["Normal", "Dry", "Oily", "Combination", "Sensitive"].map(
                (type, index) => (
                  <Form.Check
                    key={index}
                    type="radio"
                    name="skinType"
                    label={type}
                    id={`skinType-${index}`}
                  />
                )
              )}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion 2: Free Form */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Free Form</Accordion.Header>
          <Accordion.Body>
            <Form>
              {[
                "Paraben-free",
                "Cruelty-free",
                "Sulfate-free",
                "Vegan",
                "Fragrance-free",
              ].map((type, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  name="freeForm"
                  label={type}
                  id={`freeForm-${index}`}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion 3: Skin Condition */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Skin Condition</Accordion.Header>
          <Accordion.Body>
            <Form>
              {["Acne", "Wrinkles", "Dark spots", "Dry patches", "Redness"].map(
                (condition, index) => (
                  <Form.Check
                    key={index}
                    type="radio"
                    name="skinCondition"
                    label={condition}
                    id={`skinCondition-${index}`}
                  />
                )
              )}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion 4: Customer Ratings */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Customer Ratings</Accordion.Header>
          <Accordion.Body>
            <Form>
              {[
                "1 star & up",
                "2 stars & up",
                "3 stars & up",
                "4 stars & up",
                "5 stars",
              ].map((rating, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  name="ratings"
                  label={rating}
                  id={`ratings-${index}`}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default function ProductsCatalog() {
  const [isSideNavActive, setIsSideNavActive] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavActive(!isSideNavActive);
  };

  const products = [
    {
      title: "Boost.Exfoliate",
      price: "R690.00",
      rating: "5.0 (20)",
      image: "/sampleImages/image.png",
    },
    {
      title: "Hydra.Nourish",
      price: "R850.00",
      rating: "4.8 (15)",
      image: "/sampleImages/image-2.png",
    },
    {
      title: "Radiance.Serum",
      price: "R1,200.00",
      rating: "4.9 (25)",
      image: "/sampleImages/image-3.png",
    },
    {
      title: "Boost.Exfoliate",
      price: "R690.00",
      rating: "5.0 (20)",
      image: "/sampleImages/image.png",
    },
    {
      title: "Hydra.Nourish",
      price: "R850.00",
      rating: "4.8 (15)",
      image: "/sampleImages/image-2.png",
    },
    {
      title: "Radiance.Serum",
      price: "R1,200.00",
      rating: "4.9 (25)",
      image: "/sampleImages/image-3.png",
    },
    {
      title: "Boost.Exfoliate",
      price: "R690.00",
      rating: "5.0 (20)",
      image: "/sampleImages/image.png",
    },
    {
      title: "Hydra.Nourish",
      price: "R850.00",
      rating: "4.8 (15)",
      image: "/sampleImages/image-2.png",
    },
    {
      title: "Radiance.Serum",
      price: "R1,200.00",
      rating: "4.9 (25)",
      image: "/sampleImages/image-3.png",
    },
    {
      title: "Boost.Exfoliate",
      price: "R690.00",
      rating: "5.0 (20)",
      image: "/sampleImages/image.png",
    },
    {
      title: "Hydra.Nourish",
      price: "R850.00",
      rating: "4.8 (15)",
      image: "/sampleImages/image-2.png",
    },
    {
      title: "Radiance.Serum",
      price: "R1,200.00",
      rating: "4.9 (25)",
      image: "/sampleImages/image-3.png",
    },
  ];
  return (
    <div className="clientWebsiteContainer">
      <Navbar />
      <div className="clientWebsiteContent">
        <div className="PCLmainContainer">
          {/* SideNav */}
          {/* <div
            className={`PLCsideBar ${isSideNavActive ? "PLCsideBarClosed" : ""}`}
          >
            <PCPSideNav />
            <button className="PCAsideNavCloseBtn" onClick={toggleSideNav}>
              <div
                className={`PCAsideNavCloseBtnIcon ${isSideNavActive ? "PCAsideNavCloseBtnIconOpen" : "PCAsideNavCloseBtnIconClose"}`}
              ></div>
              {isSideNavActive ? "Search & Filtering" : "close"}
            </button>
          </div> */}

          <div className="flex justify-center">
            <div className="PCLsideNavHolder">
              <PCPSideNav />
            </div>
            <div className="PCLcontWrap">
              <Row>
                {products.map((product, index) => (
                  <ProductCardWrapper
                    cardType={"desktop"}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                  />
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
