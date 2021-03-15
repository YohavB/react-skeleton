import React from "react";
import Shimmers from "./Shimmers";
import "./Skeleton.css";

const SkeletonElement = ({ type }) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min + "%";
  }

  const classes = ` skeleton ${type}`;

  return (
    <div
      className={classes}
      style={{ width: type === "text" ? getRandomInt(75, 85) : null }}
    >
      <Shimmers />
    </div>
  );
};

export default SkeletonElement;
