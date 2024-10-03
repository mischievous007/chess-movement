export type Position = { row: number; col: number };

export const boardSize = 8;

export const posToString = (pos: Position): string =>
  String.fromCharCode(pos.col + 64) + pos.row;

export const getPositionFromString = (position: string): Position => {
  if (!/^[A-H][1-8]$/.test(position)) {
    throw new Error(
      `Invalid position format: ${position}. Expected format is 'A1' to 'H8'.`
    );
  }

  return {
    col: position.charCodeAt(0) - 64,
    row: parseInt(position[1]),
  };
};

export const isValidPosition = (pos: Position): boolean =>
  pos.row >= 1 && pos.row <= boardSize && pos.col >= 1 && pos.col <= boardSize;
