import React from 'react';
import '../../assets/stylesheets/calculator.css';

const Results = ({ totalTiles, totalBoxes, totalCostUSD, totalCostINR }) => {
  return (
    <div className="tile-results-section">
      <h2>Calculation Results</h2>
      <div className="tile-result-card">
        <div className="tile-result-label">Total Tiles Required</div>
        <div className="tile-result-value">{totalTiles} tiles</div>
      </div>
      <div className="tile-result-card">
        <div className="tile-result-label">Total Boxes Needed</div>
        <div className="tile-result-value">{totalBoxes} boxes</div>
      </div>
      <div className="tile-result-card">
        <div className="tile-result-label">Total Cost (USD)</div>
        <div className="tile-result-value">${totalCostUSD.toFixed(2)}</div>
      </div>
      <div className="tile-result-card">
        <div className="tile-result-label">Total Cost (INR)</div>
        <div className="tile-result-value">₹{totalCostINR.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Results;

