import React from "react";
import classes from "./Select.module.css";
const Select = (props) => {
  return (
    <div className={classes.productCat}>
      <div className={classes.productCat__control}>
        <label>Choose a category</label>
        <select value={props.value} onChange={props.onChangeCategory}>
          <option value="electronic">Electronic</option>
          <option value="food">Food</option>
          <option value="skincare">SkinCare</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
