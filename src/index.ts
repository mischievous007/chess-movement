import { Pawn, King, Queen } from "./pieces";

// Get input from command line arguments
const pieceType = process.argv[2]?.toLowerCase(); // Convert piece type to lowercase
const position = process.argv[3]?.toUpperCase(); // Convert position to uppercase

try {
  let moves: string[];

  // Determine which piece to create based on input
  switch (pieceType) {
    case "pawn":
      moves = new Pawn(position).getMoves();
      break;
    case "king":
      moves = new King(position).getMoves();
      break;
    case "queen":
      moves = new Queen(position).getMoves();
      break;
    default:
      throw new Error(
        "Invalid piece type. Please choose from: Pawn, King, Queen."
      );
  }

  // Output the possible moves
  console.log(
    `Possible moves for ${pieceType} at ${position}: ${moves.join(", ")}`
  );
} catch (error: any) {
  // Handle errors gracefully
  console.error(error.message);
}
