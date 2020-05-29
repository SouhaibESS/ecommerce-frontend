import React from "react";
import { Row } from "react-bootstrap";
import SideNav from "../elements/SideNav";
import Main from "../elements/Main";

const Dashboard = ({page}) => {

  console.log('mn dashboard', page)

  return (
    <Row noGutters>
      <SideNav />
      <Main component={page} />
    </Row>
  );
}

export default Dashboard;
