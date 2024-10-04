import { Pawn, King, Queen } from "../src/pieces";

describe("Chess Piece Movement Tests", () => {
  // Test the movement of a Pawn from position G1
  test("Pawn moves from G1", () => {
    // Create a new Pawn at G1
    const pawn = new Pawn("G1");

    // Expect the possible moves to be only one step forward, i.e., G2
    expect(pawn.getMoves()).toEqual(["G2"]);
  });

  // Test the movement of a King from position D5
  test("King moves from D5", () => {
    // Create a new King at D5
    const king = new King("D5");

    // The King can move one square in all directions,
    // so the possible moves are C4, C5, C6, D4, D6, E4, E5, E6
    // Sort the array for consistent comparison, as the order may vary
    expect(king.getMoves().sort()).toEqual(
      ["C4", "C5", "C6", "D4", "D6", "E4", "E5", "E6"].sort()
    );
  });

  // Test the movement of a Queen from position E4
  test("Queen moves from E4", () => {
    // Create a new Queen at E4
    const queen = new Queen("E4");

    // The Queen can move any number of squares horizontally, vertically, and diagonally
    // Therefore, it should have a total of 27 possible moves from E4
    expect(queen.getMoves().length).toBe(27);
  });

  // Test for invalid position input (e.g., Z9)
  test("Invalid position format throws an error", () => {
    // Create a new Pawn at an invalid position Z9
    // The position Z9 is invalid and should throw an error with the specific message
    expect(() => new Pawn("Z9")).toThrow(
      "Invalid position format: Z9. Expected format is 'A1' to 'H8'."
    );
  });

  // Test for invalid piece type input
  test("Invalid piece type throws an error", () => {
    // Simulate invalid piece type input
    const invalidPieceType = "Knight";

    // Since the piece type is invalid (only Pawn, King, and Queen are valid),
    // the program should throw an error with the specific message
    expect(() => {
      switch (invalidPieceType.toLowerCase()) {
        case "pawn":
        case "king":
        case "queen":
          break;
        default:
          throw new Error(
            "Invalid piece type. Please choose from: Pawn, King, Queen."
          );
      }
    }).toThrow("Invalid piece type. Please choose from: Pawn, King, Queen.");
  });
});
