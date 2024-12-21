import React from 'react';
import '../../assets/stylesheets/calculator.css';

export function ResultCard({ label, value, gradient }) {
  return (
    <div className="tile-result-card">
      <div 
        className="tile-result-gradient"
        style={{ background: `linear-gradient(to right, ${gradient})` }}
      />
      <div className="tile-result-content">
        <div className="tile-result-label">{label}</div>
        <div className="tile-result-value">{value}</div>
      </div>
    </div>
  );
}

