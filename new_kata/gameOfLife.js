const createGrid = (rows, cols) => 
{
  return Array.from({length: rows}, () => Array(cols).fill(0));
};

const getNextGen = (currentGrid) => 
{
    const numRows = currentGrid.length;
    const numCols = currentGrid[0].length;
    const newGrid = createGrid(numRows, numCols);

    for (let i = 0; i < numRows; i++) 
    {
        for (let j = 0; j < numCols; j++) 
        {
            let liveNeighbors = 0;

            for (let x = -1; x <= 1; x++) 
            {
                for (let y = -1; y <= 1; y++) 
                {
                    if (x === 0 && y === 0) continue;

                    const newI = i + x;
                    const newJ = j + y;

                    if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols && currentGrid[newI][newJ] === 1) 
                    liveNeighbors++;
                }
            }

            const currentState = currentGrid[i][j];

            if (currentState === 1) 
            {
                if (liveNeighbors < 2 || liveNeighbors > 3) newGrid[i][j] = 0; 
                else newGrid[i][j] = 1;
            } 
            
            else
            {
                if (liveNeighbors === 3) newGrid[i][j] = 1;
                else newGrid[i][j] = 0;
            }
        }
    }

    return newGrid;
};

export {createGrid, getNextGen};