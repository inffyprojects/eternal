import React from 'react';

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
    <div className="input-group">
      <label>{label}</label>
      <div className="input-row">
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          className="input-field"
          min={min}
          max={max}
          step={step}
        />
        {unit && (
          <select 
            value={unit} 
            onChange={(e) => onUnitChange(e.target.value)}
            className="select-unit"
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
        className="slider"
      />
    </div>
  );
};


