import React from "react";
import { Tile } from '../tile/Tile.js'

export const TileList = ({ array }) => {
  return (
    <div>
      {array.length ? (
        array.map((object, index) => (
          <Tile key={index} object={object} />
        ))
      ) : (
        <p>No results are available.</p>
      )}
    </div>
  );
};

