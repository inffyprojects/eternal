import React from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/stylesheets/options.css";
import productsData from "../assets/data/products.json";

const Options = () => {
  const { subcategoryId } = useParams();

  const category = productsData.find((cat) =>
    cat.subcategories.some((subcat) => subcat.id === parseInt(subcategoryId))
  );
  const subcategory = category.subcategories.find(
    (subcat) => subcat.id === parseInt(subcategoryId)
  );

  return (
    <div className="options-container">
      <h2 className="option-h1">{subcategory.subcategory}</h2>
      <p className="option-description">{subcategory.description}</p>

      <div className="option-card-prnt">
        {subcategory.options.map((option) => (
          <article key={option.id} className="option-card">
            <img src={option.image} alt={option.dimension} className="option-image" />
          
            <div className="option-footer">
              <h3>Dimension: {option.dimension}</h3>
              <p>Color: {option.color}</p>
              <Link to={option.link} target="_blank" rel="noopener noreferrer">
                <button className="card__btn">Download</button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Options;
