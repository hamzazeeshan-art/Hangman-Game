import "./css/HangmanText.css";

interface HangmanTextProps {
  HangmanWord: string;
  GuessedWord: string;
  IncorrectGuesses: number;
}

function HangmanText({ HangmanWord, GuessedWord, IncorrectGuesses }: HangmanTextProps) {
  const HangmanWordArray = HangmanWord.split("");

  return (
    <div className="text">
      {HangmanWordArray.map((letter, index) => {
        const isLetterGuessedCorrect = GuessedWord.includes(letter);
        
        return (
          <h1
            key={index}
            className={`word ${
              IncorrectGuesses > 5 && !isLetterGuessedCorrect
                ? "game-over" 
                : !isLetterGuessedCorrect
                ? "not-visible" 
                : "" 
            }`}
          >
            {letter}
          </h1>
        );
      })}
    </div>
  );
}

export default HangmanText;
