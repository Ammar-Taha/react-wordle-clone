import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../constants";

export default function GuessesGrid({ guessesList, results }) {
  return (
    <div className="guess-results">
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (_, rowIndex) => {
        const guess = guessesList[rowIndex] || "";
        const resultRow = results[rowIndex] || []; // ✅ maybe empty before submit

        return (
          <p className="guess" key={rowIndex}>
            {Array.from({ length: WORD_LENGTH }, (_, cellIndex) => {
              const letter = guess[cellIndex] || "";
              const cellResult = resultRow[cellIndex]; // { letter, status } or undefined
              const status = cellResult?.status || ""; // ✅ safe before submit

              return (
                <span className={`cell ${status}`} key={cellIndex}>
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
