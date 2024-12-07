import React, { useEffect, useState } from "react";
import '../assets/stylesheets/products.css';

const Products = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../assets/data/products.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="products-container">
      {categories.map((category) => (
        <div key={category.id} className="product-card">
          <img
            src={`/path-to/images/${category.image}`}
            alt={category.category}
            className="product-image"
          />
          <h3>{category.category}</h3>
          <p>{category.description}</p>
          <button onClick={() => console.log(category.products)}>
            View More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
