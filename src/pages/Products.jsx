import React, { useState } from "react";
import "../assets/stylesheets/products.css";
import "../assets/stylesheets/var.css"
import productsData from "../assets/data/products.json";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedDimension, setSelectedDimension] = useState(null);

  const handleCategoryClick = (categoryId) => {

    if (categoryId >= 2 && categoryId <= 5) {
      const category = productsData.find((cat) => cat.id === categoryId);
      const subcategory = category.subcategories[0];
      const option = subcategory.options[0];
      setSelectedCategory(categoryId);
      setSelectedSubcategory(subcategory.id);
      setSelectedDimension(option.id);
    } else {
      setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
      setSelectedSubcategory(null);
      setSelectedDimension(null);
    }
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    setSelectedDimension(null);
  };

  const handleDimensionClick = (dimensionId) => {
    setSelectedDimension(dimensionId);
  };

  
  const getDimensions = (subcategory) => {
    return subcategory.dimensions || subcategory.options || [];
  };

  const getMainContent = () => {
    if (selectedDimension) {
      const category = productsData.find((cat) => cat.id === selectedCategory);
      const subcategory = category.subcategories.find((sub) => sub.id === selectedSubcategory);
      const dims = getDimensions(subcategory);
      const dimension = dims.find((dim) => dim.id === selectedDimension);

      
      if (dimension.variants && dimension.variants.length > 0) {
        return (
          <div className="var-card-prnt">
            {dimension.variants.map((variant) => (
              <article key={variant.id} className="var-card">
                <div className="var-image" >
                  <p className="card-info">Variant: {variant.variant}</p>
                </div>
                <div className="var-footer">
                  <a href={variant.pdf || variant.link} target="_blank" rel="noopener noreferrer">
                    <button className="card__btn">View PDF</button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        );
      } else {
     
        return (
          <div className="option-card-prnt">
            <article className="option-card">
              <img src={dimension.image} alt={dimension.dimension} className="option-image" />
              <div className="option-footer">
                <p className="card-info"> {dimension.dimension}</p>
                <a href={dimension.pdf || dimension.link} target="_blank" rel="noopener noreferrer">
                  <button className="card__btn">View PDF</button>
                </a>
              </div>
            </article>
          </div>
        );
      }
    } else if (selectedSubcategory) {
      const category = productsData.find((cat) => cat.id === selectedCategory);
      const subcategory = category.subcategories.find((sub) => sub.id === selectedSubcategory);
      const dims = getDimensions(subcategory);

      return (
        <div className="option-card-prnt">
          {dims.map((dimension) => (
            <div
              key={dimension.id}
              className="product-card"
              onClick={() => handleDimensionClick(dimension.id)}
            >
              <section className="card__hero">
                <img src={dimension.image} alt={dimension.dimension} className="card__image" />
              </section>
              <div className="card__footer">
                <p className="card-info">Dimension: {dimension.dimension}</p>
                <a href={dimension.pdf || dimension.link} target="_blank" rel="noopener noreferrer">
                  <button className="card__btn">View PDF</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (selectedCategory) {
      const category = productsData.find((cat) => cat.id === selectedCategory);
      return (
        <div className="option-card-prnt">
          {category.subcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              className="product-card"
              onClick={() => handleSubcategoryClick(subcategory.id)}
            >
              <section className="card__hero">
                <img src={subcategory.image} alt={subcategory.subcategory} className="card__image" />
              </section>
              <div className="card__footer">
                <p className="card-info">{subcategory.subcategory}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="option-card-prnt">
          {productsData.map((category) => (
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
                <p className="card-info">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="products-container">
      <div className="sidebar">
        <h2>Categories</h2>
        {productsData.map((category) => (
          <div key={category.id} className="filter-category">
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
      <div className="products-prnt">{getMainContent()}</div>
    </div>
  );
};

export default Products;
