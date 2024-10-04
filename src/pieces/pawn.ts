import { ChessPiece } from "./piece";
import { Position } from "../utils";

// Class representing the Pawn piece
export class Pawn extends ChessPiece {
  // Method to get possible moves for the Pawn
  getMoves(): string[] {
    // A Pawn can move one step forward
    const moves: Position[] = [
      { row: this.position.row + 1, col: this.position.col },
    ];
    return this.filterValidMoves(moves); // Return valid moves
  }
}
