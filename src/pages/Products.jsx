import React from "react";
import '../assets/stylesheets/products.css'
import productsData from "../assets/data/products.json"; 
const Products = () => {
  return (
    <div className="products-container">
      {productsData.map((category) => (
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
