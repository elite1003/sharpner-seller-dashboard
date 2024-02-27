import React from "react";
import classes from "./ProductList.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
const ProductList = (props) => {
  return (
    <Card className={classes.product}>
      <h1>{props.heading}</h1>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.price} {product.name}
            <Button
              onClick={() => {
                props.handleDelete(product.id);
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductList;
