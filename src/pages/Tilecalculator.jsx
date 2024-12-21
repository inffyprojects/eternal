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
    <div className="calculator-container">
      <div className="max-width-wrapper">
        <header className="header">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
              <path d="M4 12h16M12 4v16" />
            </svg>
          </div>
          <h1 className="header-title">Tile Calculator</h1>
          <p className="header-subtitle">Calculate tiles needed with precision</p>
        </header>

        <div className="calculator-grid">
          <div className="glass-panel">
            <div className="panel-content">
              <div className="input-group">
                <label className="input-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 3H3v18h18V3z" />
                    <path d="M3 9h18M3 15h18" />
                  </svg>
                  Room Dimensions
                </label>

                <div className="input-row">
                  <InputField
                    label="Width"
                    value={dimensions.roomWidth.value}
                    onChange={(value) => updateDimension('roomWidth', value)}
                    unit={dimensions.roomWidth.unit}
                    onUnitChange={(unit) => updateUnit('roomWidth', unit)}
                  />
                </div>
                <Slider
                  value={dimensions.roomWidth.value}
                  onChange={(value) => updateDimension('roomWidth', value)}
                  max={100}
                  color="--primary"
                />

                <InputField
                  label="Length"
                  value={dimensions.roomLength.value}
                  onChange={(value) => updateDimension('roomLength', value)}
                  unit={dimensions.roomLength.unit}
                  onUnitChange={(unit) => updateUnit('roomLength', unit)}
                />
                <Slider
                  value={dimensions.roomLength.value}
                  onChange={(value) => updateDimension('roomLength', value)}
                  max={100}
                  color="--primary"
                />

                <InputField
                  label="Tile Width"
                  value={dimensions.tileWidth.value}
                  onChange={(value) => updateDimension('tileWidth', value)}
                  unit={dimensions.tileWidth.unit}
                  onUnitChange={(unit) => updateUnit('tileWidth', unit)}
                />
                <Slider
                  value={dimensions.tileWidth.value}
                  onChange={(value) => updateDimension('tileWidth', value)}
                  max={100}
                  color="--primary"
                />

                <InputField
                  label="Tile Length"
                  value={dimensions.tileLength.value}
                  onChange={(value) => updateDimension('tileLength', value)}
                  unit={dimensions.tileLength.unit}
                  onUnitChange={(unit) => updateUnit('tileLength', unit)}
                />
                <Slider
                  value={dimensions.tileLength.value}
                  onChange={(value) => updateDimension('tileLength', value)}
                  max={100}
                  color="--primary"
                />

                <InputField
                  label="Gap Size (Optional)"
                  value={dimensions.gapSize.value}
                  onChange={(value) => updateDimension('gapSize', value)}
                  unit={dimensions.gapSize.unit}
                  onUnitChange={(unit) => updateUnit('gapSize', unit)}
                  max={10}
                />
                <Slider
                  value={dimensions.gapSize.value}
                  onChange={(value) => updateDimension('gapSize', value)}
                  max={10}
                  color="--primary"
                />
              </div>

              <div className="input-group">
                <label className="input-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
                  </svg>
                  Price Settings
                </label>

                <div className="input-row">
                  <input
                    type="number"
                    className="input-field"
                    placeholder="Tiles per box"
                    value={tilesPerBox}
                    onChange={(e) => setTilesPerBox(parseInt(e.target.value) || 0)}
                  />
                  <select
                    className="select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                  </select>
                </div>

                <input
                  type="number"
                  className="input-field"
                  placeholder="Price per tile"
                  value={tilePrice}
                  onChange={(e) => setTilePrice(parseFloat(e.target.value) || 0)}
                />
              </div>

              <button className="calculate-button" onClick={calculateTiles}>
                Calculate
              </button>
            </div>
          </div>

          <div className="glass-panel">
            <div className="panel-content">
              <h2 className="input-label">Results</h2>

              {results ? (
                <>
                  <ResultCard
                    label="Total Tiles Needed"
                    value={`${results.totalTiles} tiles`}
                    gradient="var(--primary), var(--primary-light)"
                  />
                  <ResultCard
                    label="Number of Boxes"
                    value={`${results.totalBoxes} boxes`}
                    gradient="var(--secondary), var(--secondary-light)"
                  />
                  <ResultCard
                    label="Total Cost"
                    value={`${currency === 'USD' ? '$' : '₹'}${currency === 'USD' ? results.totalCostUSD.toFixed(2) : results.totalCostINR.toFixed(2)}`}
                    gradient="var(--warning), var(--warning-light)"
                  />
                </>
              ) : (
                <div className="empty-results">
                  <div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 12h16M12 4v16" />
                    </svg>
                    <p>Enter dimensions and details</p>
                    <p>Your results will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileCalculator;

