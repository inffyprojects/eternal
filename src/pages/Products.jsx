import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/products.css";
import productsData from "../assets/data/products.json";

const Products = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null); // Reset subcategory when selecting a new category
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
  };

  const filteredProducts = selectedSubcategory
    ? productsData
        .map((category) => ({
          ...category,
          subcategories: category.subcategories.filter(
            (subcategory) => subcategory.id === selectedSubcategory
          ),
        }))
        .filter((category) => category.subcategories.length > 0)
    : productsData.slice(0, 4); // Show only the first 4 categories by default

  return (
    <div className="products-container">
      {isMobile ? (
        <div className="products-prnt">
          {productsData.map((category) => (
            <div key={category.id} className="product-card">
              <section className="card__hero">
                <img src={category.image} alt={category.category} className="card__image" />
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
      ) : (
        <>
          <div className="sidebar">
            <h2>Filter by Category</h2>
            {productsData.map((category) => (
              <div key={category.id} className="filter-category">
                <p
                  className={`category ${selectedCategory === category.id ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.category}
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
            {filteredProducts.map((category) =>
              category.subcategories
                ? category.subcategories.map((subcategory) =>
                    subcategory.styles.map((style) => (
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
                  )
                : (
                  <div key={category.id} className="product-card">
                    <section className="card__hero">
                      <img src={category.image} alt={category.category} className="card__image" />
                      <p className="card__job-title">{category.category}</p>
                    </section>
                    <div className="card__footer">
                      <p className="card__job-title">{category.description}</p>
                      <Link to={`/category/${category.id}`}>
                        <button className="card__btn">View More</button>
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
