import React from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/stylesheets/styles.css";
import productsData from "../assets/data/products.json";

const Styles = () => {
  const { subcategoryId } = useParams();

  const category = productsData.find((cat) =>
    cat.subcategories?.some((subcat) => subcat.id === parseInt(subcategoryId))
  );
  const subcategory = category?.subcategories?.find(
    (subcat) => subcat.id === parseInt(subcategoryId)
  );

  if (!category || !subcategory) {
    return <div>Subcategory not found. Please check the URL or data.</div>;
  }

  return (
    <div className="styles-container">
      <h2>{subcategory.subcategory}</h2>
      <div className="style-prnt">
        {subcategory.styles.map((style) => (
          <div key={style.id} className="style-card">
            <img src={style.image} alt={style.style} className="style-image" />
            <div className="style-footer">
              <p>{style.style}</p>
              <Link to={`/style/${style.id}`}>
                <button className="card__btn">View Options</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Styles;
