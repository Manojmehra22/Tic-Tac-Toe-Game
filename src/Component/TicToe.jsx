import React from "react";
import "../App.css";

const TicToe = () => {
  //for create button in row and column
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={handleClick(index)}>
        X
      </button>
    );
  };

  const handleClick = () => {
    console.log(index, "click");
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default TicToe;
