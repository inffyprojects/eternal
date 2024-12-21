import React from 'react';

export function ResultCard({ label, value, gradient }) {
  return (
    <div className="result-card">
      <div 
        className="result-gradient"
        style={{ background: `linear-gradient(to right, ${gradient})` }}
      />
      <div className="result-content">
        <div className="result-label">{label}</div>
        <div className="result-value">{value}</div>
      </div>
    </div>
  );
}

