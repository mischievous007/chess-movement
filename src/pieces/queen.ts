import { ChessPiece } from "./piece";
import { isValidPosition, Position, posToString } from "../utils";

export class Queen extends ChessPiece {
  getMoves(): string[] {
    const moves: string[] = [];
    for (let i = 1; i < 8; i++) {
      const directions: Position[] = [
        { row: i, col: 0 },
        { row: -i, col: 0 },
        { row: 0, col: i },
        { row: 0, col: -i },
        { row: i, col: i },
        { row: i, col: -i },
        { row: -i, col: i },
        { row: -i, col: -i },
      ];

      directions.forEach((d) => {
        const move = {
          row: this.position.row + d.row,
          col: this.position.col + d.col,
        };
        if (isValidPosition(move)) moves.push(posToString(move));
      });
    }
    return moves;
  }
}
