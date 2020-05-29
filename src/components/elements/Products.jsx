import React, { useState } from "react";
import { Table } from "react-bootstrap";
import prod1Img from '../../assets/pictures/pro1.png'
import prod2Img from '../../assets/pictures/pro2.png'
import prod3Img from '../../assets/pictures/pro3.png'
import prod4Img from '../../assets/pictures/pro4.png'

const Products = () => {
  const [products] = useState([
    {
      img: prod1Img,
      name: "chair",
      pcs: 2,
      amout: "$200",
      status: "Shipped",
    },
    {
      img: prod2Img,
      name: "mobile",
      pcs: 3,
      amout: "$70",
      status: "Shipped",
    },
    {
      img: prod3Img,
      name: "LED",
      pcs: 2,
      amout: "$100",
      status: "Shipped",
    },
    {
      img: prod4Img,
      name: "chair",
      pcs: 5,
      amout: "$220",
      status: "Shipped",
    },
  ]);
  return (
    <div className="bg-light h-100 p-4">
      <h3 className="text-left p-3 text-muted">Products</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Pcs</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>
                <img src={product.img} />
              </td>
              <td>{product.name}</td>
              <td>{product.pcs}</td>
              <td>{product.amout}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Products;
