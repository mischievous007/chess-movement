import {
  Position,
  getPositionFromString,
  isValidPosition,
  posToString,
} from "../utils";

export abstract class ChessPiece {
  position: Position;

  constructor(position: string) {
    this.position = getPositionFromString(position);
  }

  abstract getMoves(): string[];

  protected filterValidMoves(moves: Position[]): string[] {
    return moves.filter(isValidPosition).map(posToString);
  }
}
