import React from "react";
import { Col } from "react-bootstrap"
import Navbar_ from "./Navbar_"
import HomeDashboard from "./HomeDashboard"
import Products from "./Products"

const Main = ({component}) => {
  return (
    <Col md={10} sm={10} className="text-center m-0">
      <Navbar_ />
      {component === 'HomeDashboard' &&  <HomeDashboard />}
      {component === 'Products' && <Products />}
    </Col>
  );
};
export default Main;
