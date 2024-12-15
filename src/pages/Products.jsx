import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/products.css";
import productsData from "../assets/data/products.json";

const Products = () => {
  return (
    <div className="products-container">
      {productsData.map((category) => (
        <div key={category.id} className="product-card">
          <section className="card__hero"> 
            <p className="card__job-title">{category.category}</p>
          </section>
          <div className="card__footer">
              <p className="card__job-title">{category.description}</p>
            <Link to={`/category/${category.id}`}>
              <button className="card__btn">View More</button>
            </Link>
            </div>
          </div>
      
      ))}
    </div>
  );
};

export default Products;
