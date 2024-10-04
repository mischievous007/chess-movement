import { ChessPiece } from "./piece";
import { isValidPosition, Position, posToString } from "../utils";

// Class representing the Queen piece
export class Queen extends ChessPiece {
  // Method to get possible moves for the Queen
  getMoves(): string[] {
    const moves: string[] = [];

    // Queen can move in all directions until hitting the board edge
    for (let i = 1; i < 8; i++) {
      const directions: Position[] = [
        { row: i, col: 0 }, // Down
        { row: -i, col: 0 }, // Up
        { row: 0, col: i }, // Right
        { row: 0, col: -i }, // Left
        { row: i, col: i }, // Down-Right
        { row: i, col: -i }, // Down-Left
        { row: -i, col: i }, // Up-Right
        { row: -i, col: -i }, // Up-Left
      ];

      directions.forEach((d) => {
        const move = {
          row: this.position.row + d.row,
          col: this.position.col + d.col,
        };
        if (isValidPosition(move)) moves.push(posToString(move));
      });
    }

    return moves; // Return all valid moves
  }
}
