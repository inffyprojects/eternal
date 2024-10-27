import React, { useState } from 'react';
import '../assets/stylesheets/calculator.css';

const TileCalculator = () => {
  const [roomLength, setRoomLength] = useState('');
  const [roomWidth, setRoomWidth] = useState('');
  const [tileLength, setTileLength] = useState('');
  const [tileWidth, setTileWidth] = useState('');
  const [gapSize, setGapSize] = useState('');
  const [tilesPerBox, setTilesPerBox] = useState('');
  const [pricePerTileUSD, setPricePerTileUSD] = useState('');
  const [pricePerTileINR, setPricePerTileINR] = useState('');
  const [results, setResults] = useState({ tiles: 0, boxes: 0, totalPrice: 0 });
  
  const [roomLengthUnit, setRoomLengthUnit] = useState('meters');
  const [roomWidthUnit, setRoomWidthUnit] = useState('meters');
  const [tileLengthUnit, setTileLengthUnit] = useState('cm');
  const [tileWidthUnit, setTileWidthUnit] = useState('cm');
  const [gapSizeUnit, setGapSizeUnit] = useState('cm');

  const conversionRates = {
    USD: 1,
    INR: 83, // Example conversion rate; you can update this with a real API
  };

  const unitConversions = {
    meters: 1,
    feet: 0.3048,
    inches: 0.0254,
    cm: 0.01,
    yards: 0.9144,
  };

  const handleCalculate = () => {
    const roomLengthMeters = roomLength * unitConversions[roomLengthUnit];
    const roomWidthMeters = roomWidth * unitConversions[roomWidthUnit];
    const tileLengthMeters = tileLength * unitConversions[tileLengthUnit];
    const tileWidthMeters = tileWidth * unitConversions[tileWidthUnit];
    const gapSizeMeters = gapSize * unitConversions[gapSizeUnit];

    const roomArea = roomLengthMeters * roomWidthMeters;
    const tileArea = (tileLengthMeters + gapSizeMeters) * (tileWidthMeters + gapSizeMeters);

    const numberOfTiles = Math.ceil(roomArea / tileArea);
    const numberOfBoxes = tilesPerBox ? Math.ceil(numberOfTiles / tilesPerBox) : 0;
    const totalPrice = pricePerTileUSD ? (pricePerTileUSD * numberOfTiles) : 0;

    setResults({ tiles: numberOfTiles, boxes: numberOfBoxes, totalPrice });
    setPricePerTileINR(totalPrice * conversionRates.INR); // Update INR price
  };

  const handlePriceChange = (e) => {
    const priceInUSD = e.target.value;
    setPricePerTileUSD(priceInUSD);
    setPricePerTileINR(priceInUSD * conversionRates.INR); // Update INR price when USD changes
  };

  return (
    <div className="calc-main">
      <div className="container">
        <h1>Tile Calculator</h1>

        <label>Room Length</label>
        <div className="input-row">
          <input type="number" value={roomLength} onChange={(e) => setRoomLength(e.target.value)} placeholder="Length" />
          <select value={roomLengthUnit} onChange={(e) => setRoomLengthUnit(e.target.value)}>
            <option value="meters">Meters</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
            <option value="cm">Centimeters</option>
            <option value="yards">Yards</option>
          </select>
        </div>

        <label>Room Width</label>
        <div className="input-row">
          <input type="number" value={roomWidth} onChange={(e) => setRoomWidth(e.target.value)} placeholder="Width" />
          <select value={roomWidthUnit} onChange={(e) => setRoomWidthUnit(e.target.value)}>
            <option value="meters">Meters</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
            <option value="cm">Centimeters</option>
            <option value="yards">Yards</option>
          </select>
        </div>

        <label>Tile Length</label>
        <div className="input-row">
          <input type="number" value={tileLength} onChange={(e) => setTileLength(e.target.value)} placeholder="Length" />
          <select value={tileLengthUnit} onChange={(e) => setTileLengthUnit(e.target.value)}>
            <option value="cm">Centimeters</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
            <option value="meters">Meters</option>
            <option value="yards">Yards</option>
          </select>
        </div>

        <label>Tile Width</label>
        <div className="input-row">
          <input type="number" value={tileWidth} onChange={(e) => setTileWidth(e.target.value)} placeholder="Width" />
          <select value={tileWidthUnit} onChange={(e) => setTileWidthUnit(e.target.value)}>
            <option value="cm">Centimeters</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
            <option value="meters">Meters</option>
            <option value="yards">Yards</option>
          </select>
        </div>

        <label>Gap Size (optional)</label>
        <div className="input-row">
          <input type="number" value={gapSize} onChange={(e) => setGapSize(e.target.value)} placeholder="Gap Size" />
          <select value={gapSizeUnit} onChange={(e) => setGapSizeUnit(e.target.value)}>
            <option value="cm">Centimeters</option>
            <option value="inches">Inches</option>
            <option value="feet">Feet</option>
          </select>
        </div>

        <label>Tiles per Box (optional)</label>
        <input type="number" value={tilesPerBox} onChange={(e) => setTilesPerBox(e.target.value)} placeholder="Tiles per box" />
        
        <label>Tile Price (USD)</label>
        <input type="number" value={pricePerTileUSD} onChange={handlePriceChange} placeholder="Price per tile in USD" />
        
        <label>Tile Price (INR)</label>
        <input type="number" value={pricePerTileINR} readOnly placeholder="Price per tile in INR" />

        <button onClick={handleCalculate}>Calculate</button>
        
        <div className="results">
          <p>Number of Tiles: {results.tiles}</p>
          <p>Number of Boxes: {results.boxes}</p>
          <p>Total Price: {results.totalPrice.toFixed(2)} USD</p>
        </div>
      </div>
    </div>
  );
};

export default TileCalculator;
