import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/products.css";
import productsData from "../assets/data/products.json";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((prevCategory) => 
      prevCategory === categoryId ? null : categoryId
    );
    setSelectedSubcategory(null); // Reset subcategory when toggling a category
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
  };

  const getFilteredProducts = () => {
    if (!selectedCategory) {
      return productsData;
    }

    const category = productsData.find(cat => cat.id === selectedCategory);

    if (selectedSubcategory) {
      const subcategory = category.subcategories.find(sub => sub.id === selectedSubcategory);
      return subcategory ? [subcategory] : [];
    }

    return category.subcategories;
  };

  const filteredProducts = getFilteredProducts();

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
                  <svg width="10" height="10" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z" />
                  </svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 24 24">
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

      <div className="products-prnt">
        {filteredProducts.map((item) =>
          item.styles ? (
            item.styles.map((style) => (
              <div key={style.id} className="product-card">
                <section className="card__hero">
                  <img src={style.image} alt={style.style} className="card__image" />
                  <p className="card__job-title">{style.style}</p>
                </section>
                <div className="card__footer">
                  <p className="card__job-title">{style.description}</p>
                  <Link to={`/style/${style.id}`}>
                    <button className="card__btn">View More</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div key={item.id} className="product-card">
              <section className="card__hero">
                <img src={item.image} alt={item.subcategory} className="card__image" />
                <p className="card__job-title">{item.subcategory}</p>
              </section>
              <div className="card__footer">
                <p className="card__job-title">{item.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
