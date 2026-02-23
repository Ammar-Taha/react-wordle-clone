import { useState } from "react";
import WordGuess from "./WordGuess.jsx";
import GuessesGrid from "./GuessesGrid.jsx";
import WinBanner from "./WinBanner.jsx";
import LoseBanner from "./LoseBanner.jsx";
import { sample } from "../utils";
import { WORDS } from "../data";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
  const [guess, setGuess] = useState("");
  const [guessesList, setGuessesList] = useState([]);
  const [results, setResults] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const tries = guessesList.length;
  const hasLost = !hasWon && tries >= NUM_OF_GUESSES_ALLOWED;
  const isGameOver = hasWon || hasLost;

  return (
    <>
      <GuessesGrid guessesList={guessesList} results={results} />

      {hasWon && <WinBanner tries={tries} />}
      {hasLost && <LoseBanner answer={answer} />}

      <WordGuess
        setGuessesList={setGuessesList}
        guessState={{ guess, setGuess }}
        setResults={setResults}
        answer={answer}
        setHasWon={setHasWon}
        disabled={isGameOver}
      />
    </>
  );
}
