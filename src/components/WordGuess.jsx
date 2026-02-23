import { useState } from "react";

export default function WordGuess({ setGuessesList }) {
  const [guess, setGuess] = useState("");

  const handleGuess = (e) => {
    e.preventDefault();

    setGuessesList((prevGuesses) => [...prevGuesses, guess]);

    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
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
