import React from "react";

const FoodItem = ({ name, category, thumbnail, instructions }) => {
  return (
    <div className="food-item-div">
      <h3>{name}</h3>
      <p>{category}</p>
      <div>
        <img
          width="100px"
          height="100pxb"
          className="meal-thumbnail"
          alt={name}
          src={thumbnail}
        />
      </div>
      <p>{instructions}</p>
    </div>
  );
};

export default FoodItem;
