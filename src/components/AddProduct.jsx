import React, { useEffect, useState } from "react";
import Input from "./Input/Input";
import Card from "./Card/Card";
import Button from "./Button/Button";
import classes from "./AddProduct.module.css";
const AddProduct = (props) => {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setIsFormValid(
        productId.trim().length > 0 &&
          sellingPrice.trim().length > 0 &&
          productName.trim().length > 0
      );
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [productId, productName, sellingPrice]);
  const productIdInputChangeHandler = (e) => {
    setProductId(e.target.value);
  };
  const sellingPriceInputChangeHandler = (e) => {
    setSellingPrice(e.target.value);
  };
  const producNameInputChangeHandler = (e) => {
    setProductName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("products")) || [];
    if (isFormValid) {
      const newProduct = {
        id: Math.random().toString(),
        price: sellingPrice,
        name: productName,
      };

      data.push(newProduct);
      localStorage.setItem("products", JSON.stringify(data));
      props.onSubmitHandler(newProduct);
      setProductId("");
      setSellingPrice("");
      setProductName("");
    }
  };
  return (
    <Card className={classes.addProduct}>
      <form onSubmit={submitHandler}>
        <Input
          onChange={productIdInputChangeHandler}
          value={productId}
          type="text"
          id="productId"
          label="Product Id"
        />
        <Input
          onChange={sellingPriceInputChangeHandler}
          value={sellingPrice}
          type="text"
          id="sellingPrice"
          label="Selling Price"
        />
        <Input
          onChange={producNameInputChangeHandler}
          value={productName}
          type="text"
          id="productName"
          label="Product Name"
        />
        <Button type="submit">Add Product</Button>
      </form>
    </Card>
  );
};

export default AddProduct;
