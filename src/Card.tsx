import React, { useEffect, useReducer, useRef } from "react";
import "./App.css";

interface Props {
  colIndex: number;
  rowIndex: number;
  onCardClick: (rowIndex: number, colIndex: number) => void;
  isRevealed: boolean;
  value: number;
}

export function Card({
  rowIndex,
  colIndex,
  isRevealed,
  value,
  onCardClick,
}: Props) {
  return (
    <div
      key={colIndex}
      onClick={() => {
        onCardClick(rowIndex, colIndex);
      }}
      className="card"
    >
      {isRevealed ? <p>{value}</p> : ""}
    </div>
  );
}
