import { useState } from "react";
import HangmanDiagram from "./HangmanDiagram";
import HangmanText from "./HangmanText";
import HangmanKeyboard from "./HangmanKeyboard";

const RandomWords = [
  "LION", "GIRAFFE", "COMPUTER", "VIOLET", "OCEAN", "MOUNTAIN", "RADIO", "JOURNEY", "GUITAR", "HORIZON",
  "BICYCLE", "LABRADOR", "BOOK", "SKYSCRAPER", "TABLE", "CUPCAKE", "PENCIL", "CHAIR", "LADDER", "ELEPHANT",
  "PYRAMID", "SATELLITE", "RIVER", "TELESCOPE", "SANDWICH", "PIZZA", "WINDMILL", "PAINTING", "TRUMPET", "BRAIN",
  "ALMOND", "CLOUD", "FIREPLACE", "WATERFALL", "TURTLE", "PINEAPPLE", "PHOTOGRAPH", "STADIUM", "CANDLE", "GARDEN",
  "LANTERN", "PEACOCK", "ZEBRA", "WALNUT", "GIRAFFE", "LUGGAGE", "BRIDGE", "TIGER", "BALLOON", "DOOR"
];

function App() {
  let RandomIndex = Math.floor(Math.random() * RandomWords.length);
  let [HangmanWord] = useState(RandomWords[RandomIndex]);
  let [GuessedWord, SetGuessedWord] = useState("");
  
  // Calculate Incorrect Guesses
  const IncorrectGuesses = Array.from(GuessedWord).filter(
    (letter) => !HangmanWord.includes(letter)
  ).length;

  // Check if the GuessedWord matches the HangmanWord
  const isWon = HangmanWord.split("").every((letter) => GuessedWord.includes(letter));

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "monospace",
            fontSize: "30px",
          }}
        >
          {isWon ? <h1>YOU WON</h1> : IncorrectGuesses > 5 ? <h1>YOU LOST</h1> : <h1>HANGMAN</h1>}
        </div>
        <HangmanDiagram IncorrectGuesses={IncorrectGuesses} />
        <HangmanText HangmanWord={HangmanWord} GuessedWord={GuessedWord} IncorrectGuesses={IncorrectGuesses} />
        <HangmanKeyboard
          GuessedWord={GuessedWord}
          SetGuessedWord={SetGuessedWord}
          IncorrectGuesses={IncorrectGuesses}
          isWon = {isWon}
        />
      </div>
    </>
  );
}

export default App;
