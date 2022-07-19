import React from "react";
import "../assets/Border.css";
import Container from "@mui/material/Container";

const Board = () => {
  const dimension = {
    width: 10,
    height: 10,
  };
  const Array2d = Array(dimension.width)
    .fill()
    .map((_, indexH) =>
      Array(dimension.height)
        .fill()
        .map((_, indexW) => indexW)
    );
  console.log(Array2d);
  return (
    <Container component="main" maxwidht="xs">
      <div className="center">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${dimension.width}, 30px)`,
            gridTemplateRows: `repeat(${dimension.height}, 30px)`,
            color: "white",
          }}
        >
          {Array2d.map((row, i) =>
            row.map((col, j) => {
              return <div style={{
                border: "1px solid white",
                display: "flex",
                placeContent: "center center",
                alignItem: "Center"
              }}>{col}</div>;
            })
          )}
        </div>
      </div>
    </Container>
  );
};

export default Board;
