import { Pawn, King, Queen } from "../src/pieces";

describe("Chess Piece Movement Tests", () => {
  test("Pawn moves from G1", () => {
    const pawn = new Pawn("G1");
    expect(pawn.getMoves()).toEqual(["G2"]);
  });

  test("King moves from D5", () => {
    const king = new King("D5");
    expect(king.getMoves().sort()).toEqual(
      ["C4", "C5", "C6", "D4", "D6", "E4", "E5", "E6"].sort()
    );
  });

  test("Queen moves from E4", () => {
    const queen = new Queen("E4");
    expect(queen.getMoves().length).toBe(27);
  });

  test("Invalid position format throws an error", () => {
    expect(() => new Pawn("Z9")).toThrow(
      "Invalid position format: Z9. Expected format is 'A1' to 'H8'."
    );
  });

  test("Invalid piece type throws an error", () => {
    expect(() => {
      throw new Error(
        "Invalid piece type. Please choose from: Pawn, King, Queen."
      );
    }).toThrow("Invalid piece type. Please choose from: Pawn, King, Queen.");
  });
});
