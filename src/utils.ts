// Type definition for position on the chessboard
export type Position = { row: number; col: number };

// Size of the chessboard (8x8)
export const boardSize = 8;

// Convert a Position object to chess notation (e.g., { row: 5, col: 4 } to 'D5')
export const posToString = (pos: Position): string =>
  String.fromCharCode(pos.col + 64) + pos.row;

// Convert a chess notation string (e.g., 'D5') to a Position object
export const getPositionFromString = (position: string): Position => {
  // Validate position format (must be 'A1' to 'H8')
  if (!/^[A-H][1-8]$/.test(position)) {
    throw new Error(
      `Invalid position format: ${position}. Expected format is 'A1' to 'H8'.`
    );
  }

  return {
    col: position.charCodeAt(0) - 64, // Convert column letter to number
    row: parseInt(position[1]), // Convert row part to a number
  };
};

// Check if the given position is within the bounds of the chessboard
export const isValidPosition = (pos: Position): boolean =>
  pos.row >= 1 && pos.row <= boardSize && pos.col >= 1 && pos.col <= boardSize;
