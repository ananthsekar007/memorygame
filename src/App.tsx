import React, { useEffect, useState } from "react";
import update from "immutability-helper";
import "./App.css";

type SelectedValue = {
  row: number;
  column: number;
};

function App() {
  const [grid, setGrid] = useState([
    [1, 2, 4, 2],
    [4, 1, 3, 5],
    [6, 3, 5, 6],
  ]);

  const [revealed, setRevealed] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const [selectedValue, setSelectedValue] = useState<
    SelectedValue | undefined
  >();

  const handleCardClick = (rowIndex: number, colIndex: number) => {
    if (revealed[rowIndex][colIndex]) return;

    const revealedCopy = [...revealed];
    revealedCopy[rowIndex][colIndex] = true;
    setRevealed(revealedCopy);

    const currentSelectedValue = grid[rowIndex][colIndex];

    if (selectedValue) {
      const previouslySelectedValue =
        grid[selectedValue.row][selectedValue.column];
      if (previouslySelectedValue !== currentSelectedValue) {
        setTimeout(() => {
          const copyArray = [...revealed];
          revealedCopy[rowIndex][colIndex] = false;
          revealedCopy[selectedValue.row][selectedValue.column] = false;
          setSelectedValue(undefined);
        }, 1000);
      } else {
        const copyArray = [...revealed];
        revealedCopy[rowIndex][colIndex] = true;
        setRevealed(copyArray);
        setSelectedValue(undefined);

        setTimeout(() => {
          if (revealed.flat().every((isRevealed) => isRevealed)) {
            alert("You Won!");
          }
        }, 500);
      }
    } else {
      setSelectedValue({
        row: rowIndex,
        column: colIndex,
      });
    }
  };

  return (
    <React.Fragment>
      <h1 className="header">Memory Game</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((number, colIndex) => (
              <div
                key={colIndex}
                onClick={() => handleCardClick(rowIndex, colIndex)}
                className="card"
              >
                {revealed[rowIndex][colIndex] ? number : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
