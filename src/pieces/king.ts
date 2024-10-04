import { ChessPiece } from "./piece";
import { Position } from "../utils";

// Class representing the King piece
export class King extends ChessPiece {
  // Method to get possible moves for the King
  getMoves(): string[] {
    // King can move one square in any direction
    const directions: Position[] = [
      { row: 1, col: 0 }, // Down
      { row: -1, col: 0 }, // Up
      { row: 0, col: 1 }, // Right
      { row: 0, col: -1 }, // Left
      { row: 1, col: 1 }, // Down-Right
      { row: 1, col: -1 }, // Down-Left
      { row: -1, col: 1 }, // Up-Right
      { row: -1, col: -1 }, // Up-Left
    ];

    const moves: Position[] = directions.map((d) => ({
      row: this.position.row + d.row,
      col: this.position.col + d.col,
    }));

    return this.filterValidMoves(moves); // Return valid moves
  }
}
