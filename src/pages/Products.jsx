import React, { useState } from "react";
import "../assets/stylesheets/products.css";
import productsData from "../assets/data/products.json";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Tracks the selected category
  const [selectedSubcategory, setSelectedSubcategory] = useState(null); // Tracks the selected subcategory

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((prevCategory) => (prevCategory === categoryId ? null : categoryId)); // Toggle categories
    setSelectedSubcategory(null); // Reset subcategory selection when toggling categories
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId); 
  };

  const getMainContent = () => {
    if (selectedSubcategory) {
      const category = productsData.find((cat) => cat.id === selectedCategory);
      const subcategory = category.subcategories.find((sub) => sub.id === selectedSubcategory);

      return (
        <>
          <h2 className="option-h1">{subcategory.subcategory}</h2>


          <div className="option-card-prnt">
            {subcategory.options.map((option) => (
              <article key={option.id} className="option-card">
                <img src={option.image} alt={option.dimension} className="option-image" />
                <div className="option-footer">
                  <h3>Dimension: {option.dimension}</h3>
                  <a href={option.link} target="_blank" rel="noopener noreferrer">
                    <button className="card__btn">Download</button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </>
      );
    } else if (selectedCategory) {
      // Display subcategories for the selected category
      const category = productsData.find((cat) => cat.id === selectedCategory);

      return category.subcategories.map((subcategory) => (
        <div
          key={subcategory.id}
          className="product-card"
          onClick={() => handleSubcategoryClick(subcategory.id)}
        >
          <section className="card__hero">
            <img src={subcategory.image} alt={subcategory.subcategory} className="card__image" />
            <p className="card__job-title">{subcategory.subcategory}</p>
          </section>
          <div className="card__footer">
            <p className="card__job-title">{subcategory.description}</p>
          </div>
        </div>
      ));
    } else {
      // Display main categories
      return productsData.map((category) => (
        <div
          key={category.id}
          className="product-card"
          onClick={() => handleCategoryClick(category.id)}
        >
          <section className="card__hero">
            <img src={category.image} alt={category.category} className="card__image" />
            <p className="card__job-title">{category.category}</p>
          </section>
          <div className="card__footer">
            <p className="card__job-title">{category.description}</p>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="products-container">
      {/* Sidebar for navigation */}
      <div className="sidebar">
        <h2>Categories</h2>
        {productsData.map((category) => (
          <div key={category.id} className="filter-category">
            {/* Category */}
            <p
              className={`category ${selectedCategory === category.id ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.category}
              <span className="arrow-icon">
                {selectedCategory === category.id ? (
                  <svg width="12" height="12" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24">
                    <path d="M12 8l6 6H6z" />
                  </svg>
                )}
              </span>
            </p>

            {/* Subcategories */}
            {selectedCategory === category.id &&
              category.subcategories.map((subcategory) => (
                <p
                  key={subcategory.id}
                  className={`subcategory ${selectedSubcategory === subcategory.id ? "active" : ""}`}
                  onClick={() => handleSubcategoryClick(subcategory.id)}
                >
                  {subcategory.subcategory}
                </p>
              ))}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="products-prnt">{getMainContent()}</div>
    </div>
  );
};

export default Products;
