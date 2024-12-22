import React from "react";
import { useParams, Link } from "react-router-dom";
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
      <h2 className="option-h1">{style.style}</h2>
      <div className="option-card-prnt">
        {style.options.map((option) => (
          <article key={option.id} className="option-card">
            <img src={option.image} alt={option.color} className="option-image" />
            <div className="option-footer">
              <div>
                <p>Color: {option.color}</p>
                <p>Dimension: {option.dimension}</p>
              </div>
              <Link to={option.link}>
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
