"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import "../global.css";
import "./adminscreens.css";

export default function AdminProductCatalog() {
  // Sample product data for DotSkin (you can replace this with real product data)
  const [products, setProducts] = useState([
    {
      id: 1,
      sku: "DSK001",
      name: "Hydrating Face Cream",
      price: "R299.99",
      active: true,
      description: "A deeply hydrating face cream.",
      directions: "Apply to clean skin daily.",
      ingredients: "Water, Glycerin, etc.",
      precautions: "Avoid contact with eyes.",
      seo: "Hydrating Face Cream",
      categories: ["Face", "Moisturizer"],
      image: "/sampleImages/image.png",
    },
    {
      id: 2,
      sku: "DSK002",
      name: "Vitamin C Serum",
      price: "R399.99",
      active: true,
      description: "A revitalizing Vitamin C serum.",
      directions: "Apply 2-3 drops to clean skin.",
      ingredients: "Vitamin C, Hyaluronic Acid, etc.",
      precautions: "Patch test before use.",
      seo: "Vitamin C Serum",
      categories: ["Face", "Serum"],
      image: "/sampleImages/image.png",
    },
    // Add more products here...
  ]);

  // State to control the edit modal visibility and selected product
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State to control the create product modal visibility
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    sku: "",
    name: "",
    price: "",
    active: true,
    description: "",
    directions: "",
    ingredients: "",
    precautions: "",
    seo: "",
    categories: "",
    image: "",
  });

  // Function to open the modal and set the selected product
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Function to open the create product modal
  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  // Function to close the create product modal
  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  // Function to handle product deletion (placeholder)
  const handleDeleteProduct = () => {
    alert(`Product "${selectedProduct.name}" has been deleted.`);
    setShowModal(false);
  };

  // Function to handle creating a new product
  const handleCreateProduct = () => {
    const newProductData = {
      ...newProduct,
      id: products.length + 1,
      categories: newProduct.categories.split(","),
    };
    setProducts([...products, newProductData]);
    setShowCreateModal(false);
  };

  return (
    <div>
      <Container className="my-4">
        <h1>Manage products</h1>
        <Row className="mt-4">
          <Col xs={12} sm={12} md={4} lg={3}>
            <h5>Search</h5>
            <div className="CMSHeaderControlGroup">
              {/* Search bar for searching a product */}

              <Form className="d-flex">
                <Form.Group
                  controlId="searchProduct"
                  className="flex-grow-1 me-2"
                >
                  <Form.Control
                    type="text"
                    placeholder="Search for a product..."
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Search
                </Button>
              </Form>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4} lg={3}>
            {/* Button to create a new product */}
            <h5>Add an product</h5>
            <div className="CMSHeaderControlGroup">
              <Button
                variant="primary"
                onClick={handleOpenCreateModal}
                className=""
              >
                Create Product
              </Button>
            </div>
          </Col>
          <div className="ASNspliiter mt-3 mb-5"></div>
        </Row>

        {/* Product Cards */}
        <Row>
          {products.map((product) => (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              className="mb-4"
              key={product.id}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="mb-0">
                    <strong>SKU: </strong> {product.sku}
                  </Card.Text>
                  <Card.Text className="mb-0">
                    <strong>Price: </strong> {product.price}
                  </Card.Text>
                  <Card.Text className="mb-3">
                    <strong>Status: </strong>
                    {product.active ? "Active" : "Inactive"}
                  </Card.Text>
                  {/* Button to open the modal */}
                  <Button
                    variant="dark"
                    className="d-block w-100 mb-2"
                    onClick={() => handleOpenModal(product)}
                  >
                    View/Edit
                  </Button>
                  <Button variant="danger" className="d-block w-100" size="sm">
                    {product.active ? "Deactivate" : "Activate"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for editing/viewing product details */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton className="sticky-modal-header">
            <Modal.Title>{`${selectedProduct.sku} - ${selectedProduct.name}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                {/* Left column for image */}
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group controlId="productImage" className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <div className="mb-3">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "300px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>

                {/* Right column for text fields */}
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group controlId="productName" className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedProduct.name}
                    />
                  </Form.Group>

                  <Form.Group controlId="productDescription" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      defaultValue={selectedProduct.description}
                    />
                  </Form.Group>

                  <Form.Group controlId="productDirections" className="mb-3">
                    <Form.Label>Directions</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      defaultValue={selectedProduct.directions}
                    />
                  </Form.Group>

                  <Form.Group controlId="productIngredients" className="mb-3">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      defaultValue={selectedProduct.ingredients}
                    />
                  </Form.Group>

                  <Form.Group controlId="productPrecautions" className="mb-3">
                    <Form.Label>Precautions</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      defaultValue={selectedProduct.precautions}
                    />
                  </Form.Group>

                  <Form.Group controlId="productPrice" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedProduct.price}
                    />
                  </Form.Group>

                  <Form.Group controlId="productSEO" className="mb-3">
                    <Form.Label>SEO</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedProduct.seo}
                    />
                  </Form.Group>

                  <Form.Group controlId="productCategories" className="mb-3">
                    <Form.Label>Categories</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedProduct.categories.join(", ")}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            {/* View reviews button */}
            <Button variant="info" className="mt-3 me-2">
              View Reviews
            </Button>

            {/* Delete product button */}
            <Button
              variant="danger"
              className="mt-3"
              onClick={handleDeleteProduct}
            >
              Delete Product
            </Button>
          </Modal.Body>
        </Modal>
      )}

      {/* Modal for creating a new product */}
      <Modal show={showCreateModal} onHide={handleCloseCreateModal} size="lg">
        <Modal.Header closeButton className="sticky-modal-header">
          <Modal.Title>Create New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              {/* Right column for image */}
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group controlId="newProductImage" className="mb-3">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        image: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                  />
                </Form.Group>
              </Col>
              {/* Left column for text fields */}
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group controlId="newProductSKU" className="mb-3">
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.sku}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, sku: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="newProductName" className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="newProductDescription" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="newProductDirections" className="mb-3">
                  <Form.Label>Directions</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={newProduct.directions}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        directions: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="newProductIngredients" className="mb-3">
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={newProduct.ingredients}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        ingredients: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="newProductPrecautions" className="mb-3">
                  <Form.Label>Precautions</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={newProduct.precautions}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        precautions: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="newProductPrice" className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="newProductCategories" className="mb-3">
                  <Form.Label>Categories (comma-separated)</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.categories}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        categories: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Button
            variant="primary"
            className="mt-3"
            onClick={handleCreateProduct}
          >
            Create Product
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
