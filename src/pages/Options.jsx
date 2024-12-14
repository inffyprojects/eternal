import React from "react";
import { useParams } from "react-router-dom";
import "../assets/stylesheets/options.css";
import productsData from "../assets/data/products.json";

const Options = () => {
  const { styleId } = useParams();

  const category = productsData.find((cat) =>
    cat.subcategories.some((subcat) =>
      subcat.styles.some((style) => style.id === parseInt(styleId))
    )
  );
  const subcategory = category.subcategories.find((subcat) =>
    subcat.styles.some((style) => style.id === parseInt(styleId))
  );
  const style = subcategory.styles.find(
    (style) => style.id === parseInt(styleId)
  );

  return (
    <div className="options-container">
      <h2>{style.style}</h2>
      {style.options.map((option) => (
        <article key={option.id} className="option-card">
          <img src={option.image} alt={option.color} className="option-image" />
          <p>Color: {option.color}</p>
          <p>Dimension: {option.dimension}</p>
        </article>
      ))}
    </div>
  );
};

export default Options;
