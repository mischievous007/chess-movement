import { ChessPiece } from "./piece";
import { Position } from "../utils";

export class King extends ChessPiece {
  getMoves(): string[] {
    const directions: Position[] = [
      { row: 1, col: 0 },
      { row: -1, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: -1 },
      { row: 1, col: 1 },
      { row: 1, col: -1 },
      { row: -1, col: 1 },
      { row: -1, col: -1 },
    ];

    const moves: Position[] = directions.map((d) => ({
      row: this.position.row + d.row,
      col: this.position.col + d.col,
    }));

    return this.filterValidMoves(moves);
  }
}
