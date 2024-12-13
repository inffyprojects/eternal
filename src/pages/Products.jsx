import React, { useState } from "react";
import "../assets/stylesheets/products.css";
import productsData from "../assets/data/products.json";

const Products = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handler to go back to the main category view
  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="products-container">
      {selectedCategory ? (
        // Render the subcategory (products) view
        <div className="subcategory-container">
          <button className="back-btn" onClick={handleBack}>
            Back to Categories
          </button>
          <h2>{selectedCategory.category}</h2>
          <div className="subcategory-cards">
            {selectedCategory.products.map((product) => (
              <article key={product.id} className="card">
                <section className="card__hero">
                  <header className="card__hero-header">
                    <p className="card__job-title">{product.name}</p>
                  </header>
                </section>

                <div className="card__footer">
                  <div className="card__job-summary">
                    <div className="card__job-icon">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                    </div>
                    <div className="card__job">
                      <p className="card__job-title">{product.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        // Render the main category view
        productsData.map((category) => (
          <article key={category.id} className="card">
            <section className="card__hero">
              <header className="card__hero-header"></header>
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
                onClick={() => setSelectedCategory(category)}
              >
                View
              </button>
            </div>
          </article>
        ))
      )}
    </div>
  );
};

export default Products;
