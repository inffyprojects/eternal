import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/subcategory.css";

const SubCategoryCard = ({ id }) => {
  return (
    <div className="subcategory-card">
      <Link to={`/products/${id}`} className="subcategory-card-link">
        <div className="subcategory-card-content">
          <h3 className="subcategory-card-title">Subcategory {id}</h3>
          <button className="subcategory-card-btn">View</button>
        </div>
      </Link>
    </div>
  );
};

export default SubCategoryCard;
