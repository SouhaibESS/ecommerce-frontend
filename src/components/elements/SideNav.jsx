import React from "react";
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <Col md={2} sm={2} className="text-center ">
      <h4 className="text-white bg-custom py-3 m-0 border-none ">E-commerce</h4>
      <Nav defaultActiveKey="/home" className="flex-column h-100 p-4" justify>
        <h5 className="text-left text-muted p-2">Main</h5>
        <Nav.Link href="/home" className="rounded link">
          Home
        </Nav.Link>
        <Nav.Link eventKey="link-1" className="rounded link">
          Profile
        </Nav.Link>
        <h5 className="text-left text-muted p-2 ">Products</h5>
        <Nav.Link href="/home" className="rounded link">
          Add Product
        </Nav.Link>
        <Nav.Link href="/dashboard/products" eventKey="link-1" className="rounded link">
          Products
        </Nav.Link>
        <h5 className="text-left text-muted p-2 ">Orders</h5>
        <Nav.Link href="/home" className="rounded link">
          Charts
        </Nav.Link>
        <Nav.Link eventKey="link-1" className="rounded link">
          Orders List
        </Nav.Link>
      </Nav>
    </Col>
  );
};
export default SideNav;
