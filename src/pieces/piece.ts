import {
  Position,
  getPositionFromString,
  isValidPosition,
  posToString,
} from "../utils";

// Abstract base class for chess pieces
export abstract class ChessPiece {
  position: Position;

  // Constructor takes the position in chess notation (e.g., 'D5')
  constructor(position: string) {
    this.position = getPositionFromString(position); // Convert to Position object
  }

  // Abstract method to get possible moves (must be implemented by subclasses)
  abstract getMoves(): string[];

  // Helper method to filter valid moves and convert them to chess notation
  protected filterValidMoves(moves: Position[]): string[] {
    return moves.filter(isValidPosition).map(posToString);
  }
}
