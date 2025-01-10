import React, { useState } from 'react';
import { Slider } from '../components/Calc Components/Slider';
import { ResultCard } from '../components/Calc Components/ResultCard';
import { InputField } from '../components/Calc Components/InputField';
import '../assets/stylesheets/calculator.css';

const TileCalculator = () => {
  const [dimensions, setDimensions] = useState({
    roomWidth: { value: 0, unit: 'meter' },
    roomLength: { value: 0, unit: 'meter' },
    tileWidth: { value: 0, unit: 'centimeter' },
    tileLength: { value: 0, unit: 'centimeter' },
    gapSize: { value: 0, unit: 'centimeter' }
  });

  const [tilesPerBox, setTilesPerBox] = useState(0);
  const [tilePrice, setTilePrice] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [results, setResults] = useState(null);

  const convertToMeters = (value, unit) => {
    switch (unit) {
      case 'centimeter': return value / 100;
      case 'millimeter': return value / 1000;
      case 'feet': return value * 0.3048;
      case 'inch': return value * 0.0254;
      default: return value;
    }
  };

  const calculateTiles = () => {
    const roomWidthM = convertToMeters(dimensions.roomWidth.value, dimensions.roomWidth.unit);
    const roomLengthM = convertToMeters(dimensions.roomLength.value, dimensions.roomLength.unit);
    const tileWidthM = convertToMeters(dimensions.tileWidth.value, dimensions.tileWidth.unit);
    const tileLengthM = convertToMeters(dimensions.tileLength.value, dimensions.tileLength.unit);
    const gapSizeM = convertToMeters(dimensions.gapSize.value, dimensions.gapSize.unit);

    const totalArea = roomWidthM * roomLengthM;
    const tileArea = (tileWidthM + gapSizeM) * (tileLengthM + gapSizeM);

    const totalTiles = Math.ceil(totalArea / tileArea);
    const totalBoxes = Math.ceil(totalTiles / (tilesPerBox || 1));
    const totalCostUSD = totalTiles * tilePrice;
    const totalCostINR = totalCostUSD * 83; // Approximate conversion rate

    setResults({
      totalTiles,
      totalBoxes,
      totalCostUSD,
      totalCostINR,
    });
  };

  const updateDimension = (key, value) => {
    setDimensions(prev => ({
      ...prev,
      [key]: { ...prev[key], value: parseFloat(value) || 0 }
    }));
  };

  const updateUnit = (key, unit) => {
    setDimensions(prev => ({
      ...prev,
      [key]: { ...prev[key], unit }
    }));
  };

  const units = ['meter', 'centimeter', 'feet', 'inch'];

  return (
    <div className="tile-calculator-container">
      <div className="tile-max-width-wrapper">
        <header className="tile-header">

          <h1 className="tile-header-title">Tile Calculator</h1>
          <p className="tile-header-subtitle">Calculate tiles needed with precision</p>
        </header>

        <div className="tile-calculator-grid">
          <div className="tile-glass-panel">
            <div className="tile-panel-content">
              <div className="tile-input-group">
                <label className="tile-input-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 3H3v18h18V3z" />
                    <path d="M3 9h18M3 15h18" />
                  </svg>
                  Room Dimensions
                </label>

                <InputField
                  label="Width"
                  value={dimensions.roomWidth.value}
                  onChange={(value) => updateDimension('roomWidth', value)}
                  unit={dimensions.roomWidth.unit}
                  onUnitChange={(unit) => updateUnit('roomWidth', unit)}
                />



                <InputField
                  label="Length"
                  value={dimensions.roomLength.value}
                  onChange={(value) => updateDimension('roomLength', value)}
                  unit={dimensions.roomLength.unit}
                  onUnitChange={(unit) => updateUnit('roomLength', unit)}
                />
                <label className="tile-input-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 3H3v18h18V3z" />
                    <path d="M3 9h18M3 15h18" />
                  </svg>
                  Tile Dimensions
                </label>
                <InputField
                  label="Tile Width"
                  value={dimensions.tileWidth.value}
                  onChange={(value) => updateDimension('tileWidth', value)}
                  unit={dimensions.tileWidth.unit}
                  onUnitChange={(unit) => updateUnit('tileWidth', unit)}
                />

                <InputField
                  label="Tile Length"
                  value={dimensions.tileLength.value}
                  onChange={(value) => updateDimension('tileLength', value)}
                  unit={dimensions.tileLength.unit}
                  onUnitChange={(unit) => updateUnit('tileLength', unit)}
                />

                <InputField
                  label="Gap Size (Optional)"
                  value={dimensions.gapSize.value}
                  onChange={(value) => updateDimension('gapSize', value)}
                  unit={dimensions.gapSize.unit}
                  onUnitChange={(unit) => updateUnit('gapSize', unit)}
                />


              </div>
            </div>
          </div>

          <div className="tile-glass-panel">
            <div className="tile-panel-content">
              <InputField
                label="Tiles per Box"
                value={tilesPerBox}
                onChange={(value) => setTilesPerBox(value)}
              />

              <InputField
                label="Tile Price"
                value={tilePrice}
                onChange={(value) => setTilePrice(value)}
              />



              <button className="tile-calculate-button" onClick={calculateTiles}>
                Calculate
              </button>
            </div>
          </div>
        </div>

        {results && (
          <div className="tile-result-card">
            <div className="tile-result-gradient" />
            <div className="tile-result-content">
              <h3 className="tile-result-label">Results</h3>
              <div className="tile-result-value">Total Tiles: {results.totalTiles}</div>
              <div className="tile-result-value">Total Boxes: {results.totalBoxes}</div>
              <div className="tile-result-value">Total Cost: ${results.totalCostUSD.toFixed(2)}</div>
              <div className="tile-result-value">Total Cost in INR: ₹{results.totalCostINR.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TileCalculator;
