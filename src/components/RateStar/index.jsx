import React from "react";
import PropTypes from "prop-types";

const RateStar = (props) => {
  const { starNum, color, starRate } = props;

  if (starRate > starNum) {
    throw "Rate number canot greater than star number";
  }
  if (isNaN(starRate) || isNaN(starNum)) {
    throw "Rate number or star number must a number";
  }

  const starArray = Array.from(Array(starNum - Math.round(starRate)).keys());
  const starRateArray = Array.from(Array( Math.round(starRate)).keys());
  return (
    <div className="rate-star">
      <span className="rate-star__item"></span>
      {starRateArray.length > 0 &&
        starRateArray.map((item) => (
          <span className="rate-star__item" key={item}>
            <i
              className="bx bxs-star"
              style={{ color: color ? color : "#ffac4a" }}
            ></i>
          </span>
        ))}
      {starArray.length > 0 &&
        starArray.map((item) => (
          <span className="rate-star__item" key={item}>
            <i className="bx bx-star"></i>
          </span>
        ))}
    </div>
  );
};

RateStar.propTypes = {
  starNum: PropTypes.number.isRequired,
  starRate: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default RateStar;
