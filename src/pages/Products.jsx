import React from "react";
import "../assets/stylesheets/products.css";
import productsData from "../assets/data/products.json";

const Products = () => {
  return (
    <div className="products-container">
      {productsData.map((category) => (
        <article key={category.id} className="card">
          <section className="card__hero">
            <header className="card__hero-header">
              <span>{category.price || "$150/hr"}</span> 
              <div className="card__icon">
                <svg
                  height="20"
                  width="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </header>
            <p className="card__job-title">{category.category}</p>
          </section>

          <div className="card__footer">
            <div className="card__job-summary">
              <div className="card__job-icon">
                <img
                  src={category.image}
                  alt={category.category}
                  className="product-image"
                />
              </div>
              <div className="card__job">
                <p className="card__job-title">{category.description}</p>
              </div>
            </div>
            <button
              className="card__btn"
              onClick={() => console.log(category.products)}
            >
              View
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Products;
