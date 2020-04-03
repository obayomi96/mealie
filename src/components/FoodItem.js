import React from "react";
import PropTypes from 'prop-types';

const FoodItem = ({ name, category, thumbnail, videoUrl, ingredients, source, tags, instructions }) => {
  return (
    <div className="food-item-div">
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{tags}</p>
      <div>
        <img
          width="150px"
          height="100px"
          className="meal-thumbnail"
          alt={'' || name}
          src={'' || thumbnail}
        />
      </div>
      <p>{instructions}</p>
      <div>
      Food source: 
        <a href={source}>{source}</a>
      </div>
      <div>
        <iframe
          width="150px"
          height="100px"
          src={'' || videoUrl}
          title="VideoUrl"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
};

FoodItem.propType = {
  name: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.string,
  thumbnail: PropTypes.string,
  videoUrl: PropTypes.string,
  source: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.array,
}

export default FoodItem;
