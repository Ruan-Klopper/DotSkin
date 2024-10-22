// Products Catalog
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
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const toggleSideNav = () => {
    setIsSideNavActive(!isSideNavActive);
  };

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="clientWebsiteContainer">
      <Navbar />
      <div className="clientWebsiteContent">
        <div className="PCLmainContainer">
          {/* SideNav */}
          <div className="flex justify-center">
            <div className="PCLsideNavHolder">
              <PCPSideNav />
            </div>
            <div className="PCLcontWrap">
              {loading ? (
                <div>Loading products...</div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                <Row>
                  {products.map((product, index) => (
                    <ProductCardWrapper
                      key={index}
                      cardType={"desktop"}
                      title={product.name} // Adjusted property name
                      price={`R${product.price}`} // Formatting price
                      rating={product.rating}
                      image={product.image}
                    />
                  ))}
                </Row>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
