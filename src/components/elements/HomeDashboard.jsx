import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeDashboard = () => {
  return (
    <div className="bg-light h-100 p-4">
      <h3 className="text-left p-3 text-muted">Dashboard</h3>

      <Row className="mx-auto w-100 justify-content-center">
        <Col md={2} className="bg-danger text-white py-5 h-25 ">
          <h5>18090</h5>
          <h6>Visits Today</h6>
        </Col>
        <Col md="auto"></Col>
        <Col md={2} className="bg-info text-white py-5">
          <h5>562</h5>
          <h6>New Orders</h6>
        </Col>
        <Col md="auto"></Col>

        <Col md={2} className="bg-primary text-white py-5">
          <h5>721</h5>
          <h6>New Users</h6>
        </Col>
        <Col md="auto"></Col>

        <Col md={2} className="bg-custom text-white py-5">
          <h5>$32874</h5>
          <h6>Total sales</h6>
        </Col>
      </Row>
    </div>
  );
};
export default HomeDashboard;
