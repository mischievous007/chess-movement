import { ChessPiece } from "./piece";
import { Position } from "../utils";

export class Pawn extends ChessPiece {
  getMoves(): string[] {
    const moves: Position[] = [
      { row: this.position.row + 1, col: this.position.col },
    ];
    return this.filterValidMoves(moves);
  }
}
