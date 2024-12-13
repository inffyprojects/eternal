import React from "react";
import "../assets/stylesheets/products.css";
import SubCategoryCard from "./SubCategoryPage";

const Products = ({ data }) => {
  return (
    <div className="products-container">
      {data.map((item) => (
        <article key={item.id} className="card">
          <section className="card__hero">
            <header className="card__hero-header"></header>
            <p className="card__job-title">{item.category || item.name}</p>
          </section>

          <div className="card__footer">
            <div className="card__job-summary">
              <div className="card__job-icon">
                <img
                  src={item.image}
                  alt={item.category || item.name}
                  className="product-image"
                />
              </div>
              <div className="card__job">
                <p className="card__job-title">{item.description}</p>
              </div>
            </div>
            {item.products ? (
              <SubCategoryCard id={item.id} />
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Products;
