// components/GameOfLife.tsx
"use client";
import { useEffect, useRef } from "react";

const GameOfLife = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const cellSize = 14;

  const createEmptyGrid = (rows: number, cols: number) => {
    return new Array(rows).fill(null).map(() => new Array(cols).fill(0));
  };

  const seedGrid = (rows: number, cols: number) => {
    const newGrid = createEmptyGrid(rows, cols);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Seed with ~20% live cells
        newGrid[row][col] = Math.random() > 0.8 ? 1 : 0;
      }
    }
    return newGrid;
  };

  const getNextGridState = (grid: number[][]) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const newGrid = grid.map((arr) => [...arr]);

    const countNeighbors = (grid: number[][], row: number, col: number) => {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          const newRow = row + i;
          const newCol = col + j;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            count += grid[newRow][newCol];
          }
        }
      }
      return count;
    };

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isAlive = grid[row][col] === 1;
        const neighbors = countNeighbors(grid, row, col);

        if (isAlive && (neighbors < 2 || neighbors > 3)) {
          newGrid[row][col] = 0; // Underpopulation or overpopulation
        } else if (!isAlive && neighbors === 3) {
          newGrid[row][col] = 1;
        }
      }
    }

    return newGrid;
  };

  const drawGrid = (grid: number[][], context: CanvasRenderingContext2D) => {
    const rows = grid.length;
    const cols = grid[0].length;
    context.clearRect(0, 0, cols * cellSize, rows * cellSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        context.fillStyle = grid[row][col] ? "#151515" : "#000000";
        context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      const rows = Math.floor(window.innerHeight / cellSize);
      const cols = Math.floor(window.innerWidth / cellSize);

      canvas.width = cols * cellSize;
      canvas.height = rows * cellSize;

      let initialGrid = seedGrid(rows, cols);

      const updateGame = () => {
        const nextGrid = getNextGridState(initialGrid);
        drawGrid(nextGrid, context);
        initialGrid = nextGrid;
      };

      const intervalId = setInterval(updateGame, 100);

      return () => clearInterval(intervalId);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};

export default GameOfLife;
