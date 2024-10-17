// Poducts Catalog
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "../../global.css";
import "./productSingleView.css";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import ProductCard from "@/components/ProductCard/ProductCard";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
});

export default function ProductSingleView() {
  const [isSideNavActive, setIsSideNavActive] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavActive(!isSideNavActive);
  };
  return (
    <div className="clientWebsiteContainer">
      <Navbar />
      <div className="clientWebsiteContent productSingleView">
        <Container className="PSVcontainer">
          <Row>
            <Col xs={12} sm={12} md={5} lg={6} className="PSVimageWrapper">
              <div
                className="PSVproductImage"
                style={{ backgroundImage: "url(/sampleImages/image.png)" }}
              ></div>
            </Col>
            <Col xs={12} sm={12} md={7} lg={6}>
              <div className="PSVcontent">
                <h1>ProductTitle</h1>
                <div className="PSVratingsGroup">
                  <div className="PSVratingsContainer"></div>
                  <h5>12 Ratings</h5>
                </div>
                <h3>R600.00</h3>
                <div className="PSVsplitter"></div>
                {/* Pills */}
                <h5>Description</h5>
                <h5>
                  250ml. Floral infused neroli body wash with enzymatic
                  exfoliation will leave your skin smooth and calm.
                </h5>
                <div className="PSVorderBtnGroup">
                  {/* Quantity selector */}
                  <button>Add to Cart</button>
                </div>
                <div className="PSVpaymentOptions"></div>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Directions</Accordion.Header>
                    <Accordion.Body>
                      Apply a small amount to damp skin, or use with bath puff,
                      and gently massage in a circular motion creating a rich
                      lather. Rinse off.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ingredients</Accordion.Header>
                    <Accordion.Body>
                      Aloe Extract, Hydrolyzed Rice Protein, Glycine Soja
                      (Soybean) Protein, Superoxide Dismutase, Sodium
                      Hyaluronate, PEPTIDES: Glycerin, Palmitoyl Tripeptide-5,
                      Palmitoyl Dipeptide-5 Diaminobutyroyl Hydroxythreonine,
                      Palmitoyl Dipeptide-6 Diaminohydroxybutyrate, Dipeptide,
                      Diaminobutyroyl, Benzylamide Diacetate, Glycerin, Aqua
                      (Water)
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Precautioms</Accordion.Header>
                    <Accordion.Body>
                      Keep out of reach of children and store in a cool, dry
                      place out of direct sunlight. If irritation occurs, reduce
                      frequency of use. If irritation persists, discontinue use
                      and consult your skin care professional.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="PSVsplitter"></div>
                <h2>Reviews</h2>
                <div className="PSVcustomerRatingsContainer">
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <div className="PSVcardRating"></div>
                      <Card.Title>Username 29 Nov 2005</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
