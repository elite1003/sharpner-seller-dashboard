import React, { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList/ProductList";
const App = () => {
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);
  useEffect(() => {
    const initialValue = 0;
    const sumWithInitial = products.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.price,
      initialValue
    );
    setTotalValue(sumWithInitial);
  }, [products]);
  const submitHandler = (newProduct) => {
    setProducts((prev) => {
      return [...prev, newProduct];
    });
  };
  const handleDelete = (id) => {
    const data = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(data));
    setProducts(data);
  };
  return (
    <div>
      <AddProduct onSubmitHandler={submitHandler} />
      <ProductList
        heading="Product List"
        products={products}
        handleDelete={handleDelete}
      />
      <h1 style={{ textAlign: "center" }}>
        Total value worth of product: {totalValue}
      </h1>
    </div>
  );
};

export default App;
