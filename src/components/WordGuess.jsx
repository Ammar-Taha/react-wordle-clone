import { checkGuess } from "../game-helpers.js";

export default function WordGuess({
  guessState: { guess, setGuess },
  setGuessesList,
  answer,
  setResults,
  setHasWon,
  disabled,
}) {
  const handleGuess = (e) => {
    e.preventDefault();
    if (disabled) return;

    setGuessesList((prevGuesses) => [...prevGuesses, guess]);

    const nextResultRow = checkGuess(guess, answer);
    setResults((prev) => [...prev, nextResultRow]);

    if (guess === answer) setHasWon(true);

    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disabled}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}
