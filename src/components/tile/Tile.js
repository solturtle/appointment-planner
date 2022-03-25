import React from "react";

export const Tile = ({ object }) => {
  const values = Object.values(object);
  const firstValue = values[0];
  values.shift();

  return (
    <div className="tile-container">
      <p key={0} className="tile-title">{ firstValue }</p>
      {values.map((value, index) => (
        <p key={index+1} className="tile">{ value }</p>
      ))}
    </div>
  );
};
