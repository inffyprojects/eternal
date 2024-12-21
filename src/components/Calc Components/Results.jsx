import React from 'react';

const Results = ({ totalTiles, totalBoxes, totalCostUSD, totalCostINR }) => {
  return (
    <div className="results-section">
      <h2>Calculation Results</h2>
      <div className="result-card">
        <div className="result-label">Total Tiles Required</div>
        <div className="result-value">{totalTiles} tiles</div>
      </div>
      <div className="result-card">
        <div className="result-label">Total Boxes Needed</div>
        <div className="result-value">{totalBoxes} boxes</div>
      </div>
      <div className="result-card">
        <div className="result-label">Total Cost (USD)</div>
        <div className="result-value">${totalCostUSD.toFixed(2)}</div>
      </div>
      <div className="result-card">
        <div className="result-label">Total Cost (INR)</div>
        <div className="result-value">₹{totalCostINR.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Results;

