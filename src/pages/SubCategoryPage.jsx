import React from "react";
import { Link } from "react-router-dom";

const SubCategoryCard = ({ id }) => {
  return (
    <Link to={`/products/${id}`} className="subcategory-card-link">
      <button className="card__btn">View</button>
    </Link>
  );
};

export default SubCategoryCard;
