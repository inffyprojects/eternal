import React from 'react';
import '../../assets/stylesheets/calculator.css';

export const InputField = ({ 
  label, 
  value, 
  onChange, 
  unit, 
  onUnitChange, 
  min = 0, 
  max = 1000,
  step = 0.1 
}) => {
  const handleSliderChange = (e) => {
    onChange(parseFloat(e.target.value));
  };

  const handleInputChange = (e) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div className="tile-input-group">
      <label>{label}</label>
      <div className="tile-input-row">
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          className="tile-input-field"
          min={min}
          max={max}
          step={step}
        />
        {unit && (
          <select 
            value={unit} 
            onChange={(e) => onUnitChange(e.target.value)}
            className="tile-select-unit"
          >
            <option value="meter">Meters</option>
            <option value="centimeter">Centimeters</option>
            <option value="feet">Feet</option>
            <option value="inch">Inches</option>
          </select>
        )}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="tile-slider-range"
      />
    </div>
  );
};



