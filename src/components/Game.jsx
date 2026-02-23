import { useState } from "react";
import WordGuess from "./WordGuess.jsx";
import GuessesGrid from "./GuessesGrid.jsx";
import { sample } from "../utils";
import { WORDS } from "../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
  const [guessesList, setGuessesList] = useState([]);

  return (
    <>
      <GuessesGrid guessesList={guessesList} />
      <WordGuess setGuessesList={setGuessesList} />
    </>
  );
}
