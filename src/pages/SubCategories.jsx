import React from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/stylesheets/SubCategories.css";
import productsData from "../assets/data/products.json";

const SubCategories = () => {
  const { categoryId } = useParams();
  const category = productsData.find((cat) => cat.id === parseInt(categoryId));

  return (
    <div className="subcategory-container">
      <h2>{category.category}</h2>
      <div className="subcategory-prnt">
      {category.subcategories.map((subcategory) => (
        <div key={subcategory.id} className="subcategory-card">
          <img
            src={subcategory.image}
            alt={subcategory.subcategory}
            className="subcategory-image"
          />
          <div className="subcategory-footer">
          <p>{subcategory.subcategory}</p>
          {/* <p>{subcategory.description}</p> */}
          <Link to={`/subcategory/${subcategory.id}`}>
            <button className="card__btn">View Styles</button>
          </Link>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SubCategories;
