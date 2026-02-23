import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { WORD_LENGTH } from "../constants";

export default function GuessesGrid({ guessesList }) {
  return (
    <div className="guess-results">
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (_, rowIndex) => {
        const guess = guessesList[rowIndex] || "";

        return (
          <p className="guess" key={rowIndex}>
            {Array.from({ length: WORD_LENGTH }, (_, cellIndex) => (
              <span className="cell" key={cellIndex}>
                {guess[cellIndex] || ""}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
