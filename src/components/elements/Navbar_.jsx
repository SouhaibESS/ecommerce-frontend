import React from "react";
import { Navbar, Image, Dropdown } from "react-bootstrap";

const Navbar_ = () => {
  return (
    <Navbar className="m-0 bg-custom ">
      <h4 className="text-white p-1">.</h4>

      <div className="ml-auto">
        <Dropdown
          key="left"
          id={`dropdown-button-drop-left`}
          drop="left"
          variant="secondary"
        >
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="bg-custom auth"
          >
            <Image
              src="https://randomuser.me/api/portraits/men/12.jpg"
              roundedCircle
              height="35"
              width="35"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="link">
              Home
            </Dropdown.Item>

            <Dropdown.Item href="#/action-1" className="link">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};
export default Navbar_;
