import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/products.css";
import productsData from "../assets/data/products.json";

const Products = () => {
  return (
    <div className="products-container">
      {productsData.map((category) => (
        <article key={category.id} className="card">
          <section className="card__hero">
            <header className="card__hero-header"></header>
            <p className="card__job-title">{category.category}</p>
          </section>

          <div className="card__footer">
            <div className="card__job-summary">
              <img
                src={category.image}
                alt={category.category}
                className="product-image"
              />
              <p className="card__job-title">{category.description}</p>
            </div>
            <Link to={`/category/${category.id}`}>
              <button className="card__btn">View More</button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Products;
